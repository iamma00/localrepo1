class User {
    constructor(email, pass){
        this.email = email,
        this.pass = pass
    }

    get pass(){
        return this._pass.toUpperCase()
    }
    set pass(value){
        this._pass = value
    }
}

const mahmood = new User("mghg@abc.com","abc")
console.log(mahmood.pass);

