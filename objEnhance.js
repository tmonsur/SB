//Same keys and values
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
}

//Computed Property Names
let favoriteNumber = 42;
var instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

//Object Methods
const instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
}

//createAnimal function
function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    };
}