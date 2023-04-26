const axiosRequest = require('axios')

let response = axiosRequest.get('https://httpstat.us/404')//https://www.boredapi.com/api/activity
                           .then(response => {
                                console.log(`You could ${response.data.activity}`);
                           })
                           .catch(error => {
                            console.log(`Error : ${error}`);
                           })

