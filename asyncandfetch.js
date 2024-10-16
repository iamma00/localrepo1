const { response } = require("express");

const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"js", password:"123"})
        } else {
            reject("ERROR:Something went wrong")
        }
    },1000)
});

async function consumepromise() {
    try {
        const reponse = await promise 
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromise()
// fetch
fetch('https://api.github.com/users/iamma00')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
} )
.catch((error)=>console.log(error))
