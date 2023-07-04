// array logic, create 2D array



const getProducts = async () => {
	const response = await fetch('https://fakestoreapi.com/products')
	const result = await response.json()
	console.log(result)
  const tot_price = result.reduce( (all, item) => {
      all += item.price;
      return all
  } ,0)

  
  //parseFloat(result).toFixed(2)
  
  console.log(parseFloat(tot_price).toFixed(2))
}

let arr = ["aaa","bbb","ccc","aaa","bbb"]
// Expected O/P : aaa:2, bbb:2, ccc:1

const result = arr.reduce( (all,item) => {
if(all[item]){
    all[item] = all[item] + 1
} else {
    all[item] = 1
}
return all
},{})

console.log(result)

const tabledata = [
    {
        paytype_id: 4,
        amount: 1500.5,
        date: "2017-11-01",
        provider_id: "AA",
        employee_type_id: 1
      },
      {
        paytype_id: 4,
        amount: 74,
        date: "2017-11-01",
        provider_id: "AB",
        employee_type_id: 2
      }
]

const resultData = tabledata.reduce( (all,item) => {
   // (all[item?.paytype_id] = item,all)
    return {...all,[item.paytype_id] : item}

},{})

//console.log(resultData)

 // Resulting row in data table:

  [{
    "paytype_id": 4,
    "amount": 1574.5,
    "date": "2017-11-01",
  }]
  console.log("first")


  export function generate_avatar_data(name) {
    name = name || "";
  
    var colours = [
      "#1abc9c",
      "#2ecc71",
      "#3498db",
      "#9b59b6",
      "#34495e",
      "#16a085",
      "#27ae60",
      "#2980b9",
      "#8e44ad",
      "#2c3e50",
      "#f1c40f",
      "#e67e22",
      "#e74c3c",
      "#061417",
      "#95a5a6",
      "#f39c12",
      "#d35400",
      "#c0392b",
      "#bdc3c7",
      "#7f8c8d"
    ];
  
    const cleanName = name.replace(/[!@#$%^&*]/g, "").replace(/\s+/g, " ");
  
    var nameSplit = String(cleanName).toUpperCase().split(" ");
  
    var initials;
    var lastinitial;
    if (nameSplit.length == 1) {
      initials = nameSplit[0] ? nameSplit[0].charAt(0) : "?";
      lastinitial = initials;
    } else {
      initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
      lastinitial = nameSplit[1].charAt(0);
    }
  
    var charIndex = (lastinitial == "?" ? 72 : lastinitial.charCodeAt(0)) - 64;
    var colourIndex = charIndex % 20;
  
    return { initials: initials, color: colours[colourIndex] };
  }
  
  console.log(generate_avatar_data("Manu Jha"))

   const tabledata1 = [
    {
        "paytype_id": 4,
        "amount": 1500.5,
        "date": "2017-11-01",
        "provider_id": "AA",
        "employee_type_id": 1
      },
      {
        "paytype_id": 4,
        "amount": 74,
        "date": "2017-11-01",
        "provider_id": "AB",
        "employee_type_id": 2
      },
      {
        "paytype_id": 4,
        "amount": 74,
        "date": "2017-11-01",
        "provider_id": "AB",
        "employee_type_id": 2
      }
]

const resultData1 = tabledata1.reduce( (all,item) => {
const {amount} = item


   // (all[item?.paytype_id] = item,all)
    return {...all,
    [item.employee_type_id] : {"amount":all.amount,"date":item.date,"paytype_id":item.paytype_id},
    [item.amount] : {"amount":all.amount + item.amount,"date":item.date,"paytype_id":item.paytype_id},
    [item.date] : {"amount":item.amount,"date":item.date,"paytype_id":item.paytype_id}
    }

},{"amount":0})

console.log(resultData)
   const Stack = new Stack()