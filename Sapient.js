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