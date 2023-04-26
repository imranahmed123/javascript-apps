// Using fetch function to request API
 fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => 
       response.json()
       //console.log(response.headers)
     )
    .then((data) => {
        console.log(data)
        console.log("Joke: ", data.value)
    }
    )
    .catch()
    console.log("end")
