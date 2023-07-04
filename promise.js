const url = "https://swapi.dev/api/people/";
let apiData = null
const getApi = async() => {
   const response = await fetch(url);
   const response1 = await response.json()
   const data = await response1.results
   apiData = data
   return data;
}

const res = await getApi()

const dat = apiData.map( d => {
 // const res = fetch(d.films).then( t => console.log(t))
const r = d.films
const y = r.map( x => {
  fetch(x).then(z => console.log(z))
})
 return y
})

console.log(dat)

console.log(apiData)
console.log(res)

// updated correct code for SWAPI (Sapient)

 const url1 = "https://swapi.dev/api/people/";
//let apiData1 = null;

const getApi1 = async () => {
  const response = await fetch(url1);
  const response1 = await response.json();
  const data = response1.results;
  const films = data.map( f => {
    console.log(f.films)
    f.films.map( film => {
      fetch(film).then( d => d.json()).then( t => console.log(t))
    })
  })
  // apiData1 = data;
  return films;
};

getApi1()
  .then((data) => {
    console.log(data); // Do something with the fetched data
  })
  .catch((error) => {
    console.error(error); // Handle any errors that occurred during the API request
  });









/*let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // all responses are resolved successfully
    for(let response of responses) {
      alert(`${response.url}: ${response.status}`); // shows 200 for every url
    }
    return responses;
  })
  // map array of responses into an array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => alert(user.name))); */