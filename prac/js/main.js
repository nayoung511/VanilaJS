const animals = [
    { name: 'lion', size:'big', isAgressive: true, weight: 200},
    { name: 'monkey', size:'medium', isAgressive: true, weight: 30}, 
    { name: 'cat', size:'small', isAgressive: false, weight: 10},
    { name: 'rat', size:'small', isAgressive: false, weight: 2},
]

// for(let i = 0; i<animals.length; i++){
//     console.log(animals[i]);
// }

// for(let animal of animals){
//     console.log(animal)
// }


//foreach, map, filter, reduce
//map

/*
const animalsNames = animals.map(function(animal){
    return `Animal's name is ${animal.name} and size is ${animal.size}`;
});

console.log(animalsNames);
*/

//filter
// const smallAnimal = animals.filter(function(animal){
//     return animal.size === 'small';
// });

// console.log(smallAnimal);

//reduce

/*
const numbers = [1,10,11,23, 444];

const total = numbers.reduce(function(acc, cur){
    console.log(acc, cur);
    return acc + cur;
});

console.log(total);


const totalWeight = animals.reduce(function(acc, cur){
    return acc + cur.weight;
},0);
//0으로 초기화 

console.log(totalWeight);
*/