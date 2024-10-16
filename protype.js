function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}          //this means jis  function ko prototype k saath relate kiya hai

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

const chai = new createUser("Chai", 25) //new keyword  is used to create a new object instance

const tea = new createUser("Tea", 250)

chai.printMe()


// console.log(myName.trueLength);

let myHero = ["thor", "spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spiderman:"sling"

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

Object.prototype.mahmood = function(){
    console.log(`mahmood is present in all objects`);
}

// heroPower.mahmood()
myHero.mahmood() //All object in js have a prototype object which is Object.prototype with power of all mahmood function




Array.prototype.heymahmood = function(){
    console.log(`Mahmood says hii`);
}
myHero.heymahmood()  //Array got power  of heymahmood() function


//inheritance//////////////////////////////////////////////////////////////////////////////
// let myName = "hitesh    "
// let mychannel = "chai   "
// console.log(myName.trueLength);


const Teacher = {
    makeVideo:true
}

const TeachingStuff = {
    isAvailable:false
}

const TASupport = {
    makeAssignment:'JS Assignment',
    fullTime:true
}
Object.setPrototypeOf(TeachingStuff,Teacher)

let anusername ="ChaiAurCode     "         

//high level overview __proto__  is used to set the prototype of an object
//now we use Object.setPrototypeOf for inheritance 
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lenght is:${this.trim().length}`);   
}
anusername.trueLength()
