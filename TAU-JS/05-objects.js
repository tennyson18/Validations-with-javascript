
const cookie = {
    name: "Charlie",
    isBrilliant: true,
    "+playsFootball": false,
    // adding functions to object
    isFriendly: function() {
        console.log("I am fiends with " + this.name);
    }
};

//make changes to the property
cookie.name = "luke"
//console.log(cookie);
//console.log(cookie["+playsFootball"]);
cookie.isFriendly();

//Classes
class Cookie {
    constructor(name, isBrilliant){
        this.name = name;
        this.isBrilliant = isBrilliant;
    }

    //Create a method which is a function that belongs to a class
    isFriendly () {
        console.log("I am fiends with " + this.name);
    }
}
const myCookie = new Cookie("Ben", true);
//console.log(myCookie);
//myCookie.isFriendly();