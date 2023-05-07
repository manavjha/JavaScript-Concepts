//alert('hello manu');

const elm = document.createElement('button');
elm.innerText = "Click me"
elm.id = "btn"
document.getElementById('elm').append(elm)

//const bdy = 

const btn = document.querySelector('elm');

let val  = false;

elm.addEventListener('click', function(){
   // val = true;
  if(!val){

       document.querySelector('body').style.color="red" 
}
    console.log("Hi....")
})



class Person {
	constructor(name){
		this.name = name;
		this.getname = function(){
		return this.name;
	}
	}
	
	
	static getfullname(x){
		return x.name + "jha"
	} 
}

// Prototype

Person.prototype.getfirstname = function () {
  return this.name
}

const person1 = new Person("Manu")
console.log(person1.getname());
console.log(Person.getfullname(person1))
console.log(person1.getfirstname())
console.log(person1)



let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  
  // map every url to the promise of the fetch
  let requests = urls.map(url => fetch(url));
  console.log('url',requests)
  // Promise.all waits until all jobs are resolved
  Promise.all(requests)
    .then(responses => responses.forEach( 
	
      response => console.log(`${response.url}: ${response}`)
	// response => response.then(data => console.log(data))
    ));

    // polyfill function for foreach
 

Array.prototype.ForeachPolyfill = function(callback) {
const output =[]
  for ( let i=0;i<this.length;i++) {
    output.push(callback(this[i]))
  }
  return output
}

const ar = [1,2,3,4,5];

const updated_ar = ar.ForeachPolyfill( val => val*2)
console.log(updated_ar)







