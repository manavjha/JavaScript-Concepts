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

// Data
const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Dries Vincent',
      email: 'dries.vincent@example.com',
      role: 'Business Relations',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
    {
      name: 'Lindsay Walton',
      email: 'lindsay.walton@example.com',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Courtney Henry',
      email: 'courtney.henry@example.com',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      name: 'Tom Cook',
      email: 'tom.cook@example.com',
      role: 'Director of Product',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
  ]
const person = people.map( person => person.email);
console.log(person)  