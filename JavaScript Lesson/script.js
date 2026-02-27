// const circle = {
//     radius:1,
//     location: {
//         x:1,
//         y:1
//     },
//     drow:function() {
//         console.log("doira");
//     }
// };

const { useLayoutEffect } = require("react");

// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log("doira");
//         }
//     }
// }

// const circle1 = createCircle(1);
// const circle2 = createCircle(2);

// console.log(circle1);
// console.log(circle2);

// function Circle(radius) {
//     this.radius = radius
//     this.drow = function() {
//     }
// }
// const circle = new Circle(1);

// const personFActory = (names, age) => {
//     const sayHello = () => console.log("Hello");
//     return {
//         names,
//         age,
//         sayHello
//     }
// }

// const jav = personFActory('Javohir',22);
// console.log(jav.names);

// const person = function(name,age) {
//     this.sayHello = () => console.log('hello');
//     this.name = name,
//     this.age = age
// }
// const jeff = new person('jeff',23);
// console.log(jeff);

// const Person2 = new function(name,age) {
//     this.name = namr
// }

// const person = function(name) {
//     this.sayHello = () => {
//         console.log("hello");
//         this.name = name,
//         this.age = age
//     }
// }

// value Type

// Number,string,boolean,undifiend,null === value;
// object,function,array ==== reference

// let a = 5;
// let b = a;
// a = 10;

// console.log(a,b);

// let x = {value: 10};
// let y = x;
// x.value = 20;
// y.value = 10     //har doim keyingi qiymatni oladi!
// console.log(x,y);

// let number = 1;

// function inside(number) {
//     number++;
//     console.log('inside',number);;
// }
// inside(number);
// console.log(number);

// reference type

// let obj = {value: 1}
// function inside(obj) {
//     obj.value++;
//     console.log('inside', obj);   
// }
// inside(obj);
// console.log(obj);

// for(let key in circle)
//     console.log(key,circle[key]);

// const circle = {
//     radius:1,
//     drow() {
//     console.log("doira");
    
//     }
// }

// if('drow' in circle);
// console.log("bor");


// const user = {
//     name:"Donik",
//     age:24,
//     sayHello() {
//         console.log(Hello);
//     }
// }

// // const clone = {};
// // for( let key in user)
// //     clone[key] = user[key]

// // console.log(clone); //clone kuchirish! 1-usul

// // const clone = Object.assign({},user);
// // console.log(clone);                    2-usul
  
// // const clone = {...user};
// // console.log(clone);             3-usul eng osoni



//  let car = {
//     make:"BMW",
//     model:"454LI",
//     year:2014,
//     getPrice: function() {
//         return 5000
//     },
//     printDescript: function() {
//         console.log(this.make + " " + this.model);
//     }
//  }
//  car.printDescript();

function fifth() {
    console.log(this.firstName + " " + this.lastName);
}
let customer = {
    fistName:"Donik",
    lastName: "Kuziev",
    print:fifth
}
customer.print()




    







