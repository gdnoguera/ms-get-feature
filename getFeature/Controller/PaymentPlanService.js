"use strict";

var listInterests = {
    currentInterests: []
};

/** 
   * @description Método paymentPlan Que calcula el plan de pagos
   * @autor Javier Suarez, 10/12/2019
   * @param {number} numberQuotas Número de cuotas a las que se calcula el plan de pagos
   * @param {number} interest interes que se le va a aplicar al cálculo del plan de pagos
   * @param {number} iva iva que se le va a aplicar al cálculo del plan de pagos
   * @param {number} balanceDefer Saldo a diferir total con el que se calcula el plan de pagos
   * @param {number} fixedfee cuota fija con el que se calcula el plan de pagos
   * @return {json} json con el plan de pagos generado
*/
function paymentPlan(numberQuotas, interest, iva, balanceDefer, fixedfee) {
    var listPayment = {
        paymentPlan: []
    };
    var initialValue = balanceDefer;
    var capitalPay;
    for (var i = 1; i <= numberQuotas; i++) {
        listInterests = generateInterest(interest, balanceDefer, iva);
        var interestC = listInterests.currentInterests[0].interestC;
        var ivaInterest = listInterests.currentInterests[0].ivaInterest;
        capitalPay = parseFloat(fixedfee) - interestC - ivaInterest;
        balanceDefer = parseFloat(balanceDefer) - capitalPay;
        listPayment.paymentPlan.push({ numberQuota: i, initialValue: initialValue, capitalPayment: capitalPay, interests: interestC, iva: ivaInterest, monthlyQuota: fixedfee, balance: balanceDefer < 0 ? 0 : balanceDefer });
    }
    return listPayment.paymentPlan;
}

/** 
   * @description Método generateInterest genera el interes y iva del interes por cuota del plan de pagos
   * @autor Javier Suarez, 10/12/2019
   * @param {number} interest interes que se le va a aplicar al calculo del plan de pagos
   * @param {number} balanceDefer Saldo a diferir total con el que se calcula el plan de pagos
   * * @param {number} iva iva que se le va a aplicar al calculo del plan de pagos
   * @return {json} json con el interes y iva del interes por cuota del plan de pagos
*/
function generateInterest(interest, balanceDefer, iva) {
    listInterests = {
        currentInterests: []
    };
    var interestCo = parseFloat(balanceDefer) * parseFloat(interest);
    listInterests.currentInterests.push({ interestC: interestCo, ivaInterest: interestCo * parseFloat(iva) });
    return listInterests;
}
module.exports = { paymentPlan };