//object

// eta ekta object, emne declare kore

// const student= {


// }; 

// // eta hocche obeject er moddhe function call kora
// const student= {
//     fullName: "Intesar Shawon",
//     marks: 95,
//     printMarks: function () {
//         console.log("marks=", this.marks); //function er vitor theke 95 marks print koranor jonno this use hoise
//     },
// }; 
// // sob object er moddhe prototype thake, eta arekta object..,ekta object er moddhe arekta object jekhane onek kichu (methods,fuction, object) thake
// __proto__ evabe prototype set kore


// const employee={
//     calTax1(){
//         console.log("tax rate is 10%");
//     },// eivabe function call kora jay, evabe beshi call hoy
//     calTax2 : function () {
//         console.log("tax rate is 10%");
//     }// eivabeo kora jay, eivabe kon call hoy

// };
// const karanArjun={
//     salary: 50000;
// };




// const employee={
//     calTax1(){
//         console.log("tax rate is 10%");
//     }
// };
// const karanArjun1={
//     salary: 50000,
// };

// const karanArjun2={
//     salary: 50000,
// };
// const karanArjun3={
//     salary: 50000,
// };
// const karanArjun4={
//     salary: 50000,
// };

// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;

// // prototype ekta special property jeta Java Script object er moddhe thakbei, eta diye object access kora jay



// const employee={
//     calTax1(){
//         console.log("tax rate is 10%");
//     }
// };
// const karanArjun={
//     salary: 50000,
//     calTax1(){
//         console.log("tax rate is 40%");
//     }
// };
// karanArjun.__proto__ = employee;
// // object ar prototype er jodi same method thake, tahole object er method use hobe




//class in JS


// class ToyotaCar{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     //ekhane notun ekta function rakhtesi jetate ()er moddhe argument thakbe, nicher object gula eta use korte parbe 

//     setBrand(brand){
//         this.brandName = brand;
//         // this hocche ekhane object jetar jonno function create kora hocche
//         //ekhane this. er sathe je brandname ache eta object er property, but = er pashe jei bran ache ota ar bracket ermoddher ta argument
//     }
// }
// //eta ekta class, ekhane koma diye separate korte hoy na, niche dekhbo class theke kemne object create kore
// let fortuner = new ToyotaCar();
// // log a giye fortuner ke start stop sob e koraite parbo, karon class er moddhe jesob function ache, object access korte parbe
// fortuner.setBrand = "fortuner";

// let lexus = new ToyotaCar();
// // lexus o ei class tar sob use korte parbe, lexus.start() ba lexus.stop()- eshob likhe
// lexus.setBrand = "lexus";
// // upore this hocche ekhane object jetar jonno function create kora hocche, this er jayga ta fortune lexus eshob object nicche

// //uporer fortuner, lexus jokhon print dibo log a, auto constructor naam a special ekta method create hobe
// //ei constructor amra create na korleo JS auto create kore
// // tobe eta amra custom way te create korte pari jekono class er moddhe
// //niche oitai kortesi



// //constructor
// // eta JS er ekta special method
// // construcor er onno naam nai, eta diyei create kora lage
// // uporer example ta diye amra eta niche create kore dekhachhi
// // constructor er moddhe diye multiple valur pass kora jay, niche amra oita korbo



// class ToyotaCar{
//     constructor(brand, mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }

// }
// let fortuner = new ToyotaCar("fortuner", 10);
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus", 12);
// console.log(lexus);
// //log a giye fortuner lexus likhlei hobe





class Person{
    constructor(){
        this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person{
    work(){
        console.log("do coding");
    }
}

class Doctor extends Person{
    work(){
        console.log("patient serving");
    }
}

let karan = new Engineer();
let arjun = new Doctor();
//extends kora mane parents er sob boishisto nijer moddhe niye nea
//log a giye karan ba arjun likhle bojha jabe era person er sob niye nise
//upore constructor ache, extends er khetre etao niye ney


//front end a lage na dekhe apatoto class stop ekhane 
// https://www.youtube.com/watch?v=VlPiVmYuoqw
// 8.28->9.21 a giye sikhe nibo lagle
// biday 

