// loop method
// forEach, find, filter, map, sort, reduce

const dogs = [
    { name: "Lassie", famelevel: 13 },
    { name: "Beethoven", famelevel: 8 },
    { name: "Hachiko", famelevel: 18 },
    { name: "Balto", famelevel: 5 }
];

// task: add a famelevel of +3 for all dogs
// we use map to ensure referential transparency -> forEach doesn't ensure referential transparency cause it doesn't return

const increasedPublicityDogs = dogs.map(dog => dog.famelevel += 3);

console.log(dogs);

// task: add the key male and value true except for Lassie

const dogsAddedIsMale = dogs.map(dog => {
    if (dog.name === "Lassie") {
        dog.isMale = false;
        return dog;
    } else {
        dog.isMale = true;
        return dog;
    }
});

console.log(dogs);
console.log(dogsAddedIsMale);

const dogsAddedIsMaleNewObjects = dogs.map(dog => dog.name === "Lassie" ? 
{ name: dog.name, famelevel: dog.famelevel, isMale: false } : 
{ name: dog.name, famelevel: dog.famelevel, isMale: true });

const numbers = [1, 2, 3, 4, 5];

const numbersDoubled = numbers.map(number => number * 2);

//console.log(numbersDoubled);