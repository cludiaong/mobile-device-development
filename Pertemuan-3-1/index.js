// let john = ["john", "doe", 35, true, [80, 60, 90]];
// console.log(john[4]);
// console.log(john.length);
// john[2] = 42;

// console.log(john[john.length - 1]);

// let array = [1, 2, 3, "halo", false, true];

// array.pop();
// array.unshift("Selamat Pagi");

// console.log(array); // Output: [1, 2, 3, "halo", false]

// let buah = ["Pisang", "Jeruk", "Apel", "Mangga"];

// buah.splice(2, 0, "Lemon", "Kiwi");
// console.log(buah);

// let buah2 = ["pisang", "apel", "jeruk"];
// let sayur = ["tomat", "bayam", "wortel"];
// let biji = ["kedelai", "kacang tanah", "kacang polong"];

// let makanan = buah2.concat(sayur, biji);

// console.log(makanan);

// let cemilan = [
//   "kripik singkong",
//   "kripik kentang",
//   "krupuk ikan",
//   "permen",
//   "coklat",
//   "kue",
// ];
// let cemilanGurih = cemilan.slice(0, 3);
// let cemilanManis = cemilan.slice(3);

// console.log(cemilanGurih);

// let buah = { nama: 'mangga', warnaKulit: 'hijau', hargaPerBuah: 5000 };

// let orang = {
//   nama: 'john',
//   umur: 24,
//   pekerjaan: 'programmer'
// };

// let john = {
//   firstName: "John",
//   lastName: "Doe",
//   Age: 20,
//   status: "Student",
// };

// console.log(john.firstName);
// console.log(john["lastName"]);

// john.job = "teacher";

// console.log(john.job);

//Array built-in method menggunakan for
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let colors = ["blue", "red", "yellow", "green"];

// colors.forEach(function (data, index) {
//   console.log(data + " index:" + index);
// });

let students = [
  {
    fullName: "John Doe",
    age: 21,
    address: "Paniki Bawah",
  },
  {
    fullName: "Renaldy Lawongan",
    age: 22,
    address: "Airmadidi Bawah",
  },
  {
    fullName: "Claudia",
    age: 23,
    address: "Tobelo",
  },
];

// students.forEach(function (items, index) {
//   console.log(items.fullName + " index:" + index);
// });

//Use Map
// let studentName = students.map(function (items) {
//   return items.fullName;
// });

// console.log(studentName);

// //Use forEach
// let studentName2 = students.forEach(function (queue) {
//   return queue.age;
// });

// console.log(studentName2);

let filterArr = students.filter(function (antrian) {
  return antrian.age < 22;
});

console.log(filterArr);
