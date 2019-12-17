

const express = require("express");
const app = express();
const service = "GetFeature";
const payment = require("../Controller/PaymentPlanService");
const { check, validationResult } = require('express-validator');
/** 
   * @description Método get expuesto al usuario
   * @autor Javier Suarez, 10/12/2019
   * @param {number} numberQuotas Número de cuotas a las que se calcula el plan de pagos
   * @param {number} interest interes que se realiza el cálculo del plan de pagos
   * @param {number} iva iva que se le va a aplicar al calculo del plan de pagos
   * @param {number} balanceDefer Saldo a diferir total con el que se realiza el cálculo del plan de pagos
   * @param {number} fixedfee cuota fija con el que se realiza el cálculo del plan de pagos
   * @return {json} json con el plan de pagos generado
*/
app.get(`/${service}/:numberQuotas/:interest/:iva/:balanceDefer/:fixedfee`, [
  check('numberQuotas').isNumeric().withMessage('You must enter a numerical value'), check('interest').isNumeric().withMessage('You must enter a numerical value'),
  check('iva').isNumeric().withMessage('You must enter a numerical value'), check('balanceDefer').isNumeric().withMessage('You must enter a numerical value'),
  check('fixedfee').isNumeric().withMessage('You must enter a numerical value')], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    res.status(200).send(payment.paymentPlan(req.params.numberQuotas, req.params.interest, req.params.iva, req.params.balanceDefer, req.params.fixedfee));
  });

module.exports = app;