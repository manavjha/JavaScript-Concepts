let data = [{
    "a": "xiao ming",
    "b": "18",
    "c": [
      {
        "a": "Zootopia",
        "b": 109,
        "c": "tt2948356",
      },
      {
        "a": "Hacksaw Ridge",
        "b": 139,
        "c": "tt2119532"
      },
      {
        "a": "Kiminona",
        "b": 106,
        "c": "tt5311514"
      }
    ]
  }]
  console.log(Object.entries(data[0]))

 
 
 const {a:name,b:age,c:favoriteMovies} = data[0]
 console.log(favoriteMovies)
 console.log(age)
 console.log(name)
  Object.entries(data[0])

  const favmovielist = favoriteMovies.map( movie => movie.a);
  console.log(favmovielist)
 // Meaning of response
 /*  [{
    "name": "xiao ming",
    "age": "18",
    "favoriteMovies": [
      {
        "anme": "Zootopia",
        "duration": 109,
        "IMDb": "tt2948356"
      },
      {
        "name": "Hacksaw Ridge",
        "duration": 139,
        "IMDb": "tt2119532"
      },
      {
        "name": "Kiminona",
        "duration": 106,
        "IMDb": "tt5311514"
      }
    ]
  }]*/


  const url1 = "https://swapi.dev/api/people/";
let apiData1 = null;

const getApi1 = async () => {
  const response = await fetch(url1);
  const response1 = await response.json();
  const data = response1.results;
  const films = data.map((f) => {
    // console.log(f.films);
    return f.films.map(async (film) => {
      return fetch(film)
        .then((d) => d.json())
        .then((t) => t);
    });
  });
  //console.log(data)
  // apiData1 = data;
  return data;
};

getApi1()
  .then((data) => {
    data.map((f) => {
      return f.films.map(async (film) => {
        return fetch(film)
          .then((d) => d.json())
          .then((t) => console.log(t));
      });
    });
    console.log(data); // Do something with the fetched data
  })
  .catch((error) => {
    console.error(error); // Handle any errors that occurred during the API request
  });

  const url2 = "https://swapi.dev/api/people/";

  const getfilmurl = async() => {
       const response = await fetch('url2')
       const resp = response.json()

  }