
//Pertemuan 6
///Spread Operator

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(...numbers);

///1.Duplikasi Array

// let numbers2 = [...numbers];
// console.log(numbers2);

//2.Menggabungkan array
// let numbers1 = [1, 2, 3];
// let numbers2 = [5, 6, 7];
// let numbers3 = [8, 9, 10];

// let combineNumbers5 = numbers1.concat(4, numbers2, numbers3);
// let combineNumbers6 = [...numbers1, 4, ...numbers2, ...numbers3];

// console.log(combineNumbers5);
// console.log(...combineNumbers6);

// let john = {
//     fullName : "John Doe",
//     age : 35,
//     address : "Manado",

// };

// john = {...john, job : "teacher"};
// console.log(john);

//Destructoring
//let numbers = [1, 2, 3, 4, 5];

//let a = numbers[0];
//let [a, b, c, d, e] = numbers;
//console.log(a); //Akan melihat urutan

let john = {
    fullName : "John Doe",
    age : 35,
    address : "Manado",

};

let {age: umur} = john;
console.log(umur); 

//
const ucapkanSalam = ({fullName, age, address}) => {
    let kalimat = `Halo nama saya ${fullName}`;
    console.log(kalimat);
}

ucapkanSalam(john);








