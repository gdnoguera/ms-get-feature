function getpaymentDetaill(){
    return{
        paymenDetaill:
{
    porcentageIVA:'porcentajeiva',
    priceIVA:'precioconiva',
    firstPrice:'primerpago',
    balanceFinance:'saldoafinanciar',
    valueFee:'valorcuota',
    interestPorcentageEA:'porcentajeinteresEA',
    interestPorcentageEM:'porcentajeinteresEM',
    interestPorcentageMora:'porcentajeinteresmora',
    interestPorcentageCurrentEA:'porcentajeinterescorrienteEA'
}

    }
}

function getPaymentPlan(){
return{

    paymenDetaill:
    {
        porcentageIVA:'19',
        priceIVA:'228000',
        firstPrice:'primerpago',
        balanceFinance:'1200000',
        valueFee:'200000',
        interestPorcentageEA:'0',
        interestPorcentageEM:'0',
        interestPorcentageMora:'1.2',
        interestPorcentageCurrentEA:'0'
    },

    paymentPlan: [
        {
        numberQuota: "1",
        initialValue: "567200",
        capitalPayment: "89651",
        interests: "12144",
        iva: "0",
        monthlyQuota: "101796",
        balance: "477868"
        },
        {
        numberQuota: '2',
        initialValue: '567200',
        capitalPayment: '91569',
        interests: '10226',
        iva: '0',
        monthlyQuota: '101796',
        balance: '477868'
        },
        {
        numberQuota: '3',
        initialValue: '567200',
        capitalPayment: '93529',
        interests: '8266',
        iva: '0',
        monthlyQuota: '101796',
        balance: '477868'
        },
        {
        numberQuota: "4",
        initialValue: "567200",
        capitalPayment: "95530",
        interests: "6265",
        iva: "0",
        monthlyQuota: "101796",
        balance: "477868"
        },
        {
        numberQuota: "5",
        initialValue: "567200",
        capitalPayment: "97565",
        interests: "4220",
        iva: "0",
        monthlyQuota: "101796",
        balance: "477868"
        },
        {
        numberQuota: '6',
        initialValue: '567200',
        capitalPayment: '99664',
        interests: '2131',
        iva: '0',
        monthlyQuota: '101796',
        balance: '477868'
        }
        ]

    }
}



module.exports = getPaymentPlan();
      

                
    