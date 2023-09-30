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
  
  /**
  let central = require('./central'),
    db1 = require('./db1'),
    db2 = require('./db2'),
    db3 = require('./db3'),
    vault = require('./vault'),
    mark = require('./mark');

// Solution hidden. Unfold this block to see it.
module.exports = function(id) { // autofold
    let dbs = {
        db1: db1,
        db2: db2,
        db3: db3
    };

    return new Promise(function(resolve, reject) {
        Promise.all([
            central(id)

            .catch(function() {
                return Promise.reject('Error central');
            })

            .then(function(db) {
                return dbs[db](id)

                .catch(function() {
                    return Promise.reject('Error ' + db);
                });
            }),

            vault(id)

            .catch(function() {
                return Promise.reject('Error vault');
            })
        ])

        .then(function(data) {
            mark(id).catch(function() {});

            resolve({
                id: id,
                username: data[0].username,
                country: data[0].country,
                firstname: data[1].firstname,
                lastname: data[1].lastname,
                email: data[1].email
            });
        })

        .catch(function(error) {
            reject(error);
        });
    });
};
  */