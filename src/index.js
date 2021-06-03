import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";
ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// const person = {
//   name: "Mosh",
//   walk() {
//     console.log(this);
//   },
//   talk() {},
// };

//provide refrence to person object with values
// person.walk();
// // person["name"] = "john";
// // const targetMember = 'name';
// // person[targetMember.value]="john";
// //this const walk will give that walk is function.if we call it like walk on console.
// //bind method we can set the value permanently.based on argument.
// const walk = person.walk.bind(person);

// //it will tell us whats in walk and show its a function
// console.log(walk);
// //if we call this function this keyword will behave diffrently and return window object.
// //will give undefined
// walk();

// const square = function (number){
//   return number*number;
// }

// const square = (number) => number * number;

// console.log(square(5));

// const jobs = [
//   {
//     id: 1,
//     isActive: true,
//   },
//   {
//     id: 2,
//     isActive: true,
//   },
//   {
//     id: 3,
//     isActive: false,
//   },
// ];

// //simple function
// // const activeJobs = jobs.filter(function (job) {
// //   return job.isActive;
// // });

// const activeJobs = jobs.filter((job) => job.isActive);
// console.log(activeJobs);

//map
// const colors = ["red", "green", "blue"];

// const items = colors.map((color) => `<li>${color}</li>`);
// console.log(items);

//object Destructing
// const address = {
//   street:'',
//   city:'',
//   country:''
// }

// const street = address.street;
// const city =address.city;
// const country = address.country;

//same as above
// const {street, city ,country}= address;
//for alias
// const {street: st, city ,country}= address;

//spread Operator
// const first = [1,2,3];
// const second = [4,5,6];

//const combined= first.concat(second);
//we can add more element through spread operator.
// const combined = [...first,...second];

// const first = {
//   name: "mosh",
// };
// const second = { job: "instructor" };
// const combined = { ...first, ...second, location: "Australia" };
// console.log(combined);

//classes
// const person = {
//   name: "Mosh",
//   walk() {
//     console.log("walk");
//   },
// };
// const person2 = {
//   name: "Mosh",
// };

// class Person {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
//   walk() {
//     console.log("walk");
//   }
// }
// const person = new Person("Mosh");

//Inheritence

// class Teacher extends Person {
//     constructor(name,degree){
//       super(name);
//       this.degree=degree;

//     }
//     teach() {
//       console.log("Teach");
//     }
//   }
//   const teacher = new Teacher("Mosh","MSc");
//   teacher.
