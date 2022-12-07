import React from "react";
import ReactDOM from "react-dom/client";
import  App  from "./App";
import "./index.css";


// [Learning]

// A tuple is typed array with pre-defined length and types for each index
// let ourTuple:[number,boolean,string]
// ourTuple=[5,false,'coding']

// To define type for object

// type Person ={
//  name:string
//  age?:number
//}


// we want to have have array of persons object
// const people:Person[]= [{name:'basia', age:22},{name:'ania', age:12} ]

// how do we declare a function type ? - we need to define the function of how many things its going to contain.

// let printNameFn:(name:string)=> void - it will take name ane return void
// let printNameFn:(name:string)=> number - it will take name ane return number type
// let printNameFn:(name:string)=> never - it will take name ane return never- we don`t know what fn will return
// void returns - undefined, but never doesn't return anything.  


// unknown- can take any type, instead of any 

// type is called ad ALIAS : one is type , and other is interface 


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
