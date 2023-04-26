
const axiosRequest = require('axios')

// axiosRequest
// .get('https://www.boredapi.com/api/activity')
// .then(response => {
//     console.log(`you could ${response.data.activity}`)
// })
// .catch(error => {
//     console.error(`ERROR! ${error}`)
// })
// console.log('Why I am here')
//------------------------------------------------

async function getActivity(){
    try{
    let response = await axiosRequest.get('https://httpstat.us/500');//'https://www.boredapi.com/api/activity'
    console.log(`you could ${response.data.activity}`)
    } catch(error){
        console.error(`ERROR! ${error}`)
    }
}

getActivity();