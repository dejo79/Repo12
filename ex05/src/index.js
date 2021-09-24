var myPetsArray = [
    { animalType: "Dog",
        name: "Pujdo" },
      { animalType: "Cat",
        name: "Maca" },
       { animalType: "Bird",
        name: "Tweety" } 
];
function myPetsFunction(pets) {
    myPetsArray[1].name[1];
}
console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;