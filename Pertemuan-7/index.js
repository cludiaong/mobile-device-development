//Exercise #3
//1 (Export) Suhu dari farenheit ke celcius
// export default = 99.20;

export function Suhu (Celscius){
   let suhu1 = Celscius;
   let suhu2 = suhu1 * 9/5 + 32;
    let result = suhu1 + ' Farenheit = ' + suhu2 +  ' Celscius';
    console.log(result);
}

//2 (Export Deafult) Menghitung BMI
//Membuat fungsi untuk default paramter

const BeratBadan =  (berat, tinggi) => {

let BB = berat / tinggi * tinggi;
console.log("BMI = " + BB);

if (BB > 1 && BB < 18.5){
    console.log("Status : Berat Badan Kurang");
}
 else if (BB > 18.5 && BB < 25){
    console.log("Status : Berat Badan Normal");
 }
else if (BB > 25 && BB < 30){
    console.log("Status Berat Badan Berlebihan");
}
else {
    console.log("Status : Obesitas");
}

};

export default BeratBadan

