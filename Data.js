var arr =
[
[
{
  "id": 6501511,
  "invoiceId": {
    "id": 1043773
  },
  "chargeBandType": "TIME",
  "jobTaskId": {
    "id": 19399852
  },
  "invoicedNet": {
    "amountString": 0,
    "currencyType": "USD"
  },
  "invoicedTaxOneOtherCurrency": null,
  "invoicedTaxOne": {
    "amountString": 0,
    "currencyType": "USD"
  },
  "taxOneRate": 0.1
},
{
  "id": 6501517,
  "invoiceId": {
    "id": 1043773
  },
  "chargeBandType": "TIME",
  "jobTaskId": null,
  "jobExpenseId": null,
  "jobThirdPartyCostId": {
    "id": 20602
  },
  "invoicedNet": {
    "amountString": 0,
    "currencyType": "USD"
  },
  "invoicedTaxOneOtherCurrency": null,
  "invoicedTaxOne": {
    "amountString": 0,
    "currencyType": "USD"
  },
  "taxOneRate": 0.1
},
{
  "id": 6501508,
  "invoiceId": {
    "id": 13773
  },
  "chargeBandType": "TIME",
  "jobTaskId": {
    "id": 19398574
  },
  "invoicedNet": {
    "amountString": 30,
    "currencyType": "USD"
  },
  "invoicedTaxOneOtherCurrency": null,
  "invoicedTaxOne": {
    "amountString": 3,
    "currencyType": "USD"
  },
  "taxOneRate": 0.1
},
{
  "id": 65014,
  "invoiceId": {
    "id": 104
  },
  "chargeBandType": "TIME",
  "jobTaskId": null,
  "jobExpenseId": null,
  "jobThirdPartyCostId": {
    "id": 206
  },
  "invoicedNet": {
    "amountString": 0,
    "currencyType": "USD"
  },
  "invoicedTaxOneOtherCurrency": null,
  "invoicedTaxOne": {
    "amountString": 0,
    "currencyType": "USD"
  },
  "taxOneRate": 0.1
}],
[
{
  "id": 6483,
  "invoiceId": {
    "id": 1042400
  },
  "chargeBandType": "TIME",
  "jobTaskId": {
    "id": 198574
  },
  "invoicedNet": {
    "amountString": 100,
    "currencyType": "USD"
  },
  "invoicedTaxOneOtherCurrency": null,
  "invoicedTaxOne": {
    "amountString": 10,
    "currencyType": "USD"
  },
  "taxOneRate": 0.1
}
]
];

const ar1 = arr.map( (val,index) => val[index])
const ar2 = ar1.map( val => val)
console.log(ar2)

const ArrObj = [
    {name:"Manu", occupation:"Web Developer"},
    {name:"Keshav", occupation:"Enterprenaur"},
    {name:"Uddhav", occupation:"Student"},
    {name:"Deepak", occupation:"Business Man"}
]

let ArrayofValues =[]

for (let index = 0; index < ArrObj.length; index++) {
    const {name,occupation} = ArrObj[index];
    ArrayofValues.push(`${name} is ${occupation}` )
}

console.log(ArrayofValues)