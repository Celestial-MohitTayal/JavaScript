// console.log('Hello')

// //Scoping
// {
//     var a = 10;
//     let b = 20
//     let c = 30;
// }

// console.log(a); // 10
// console.log(b); // Reference Error b is not defined
// console.log(c)  // Reference Error c is not defined

// //Variable Shadowing
// function test() {
//     let a = "Hello";
//     if (true) {
//         let a = "Hi"
//         console.log(a); // Hi
//     }
//     console.log(a); // Hello
// }
// test(); // Perfect example of shadowing
 

// // function test1() {
// //     var a = "Hello";
// //     let b = "Bye"
// //     if (true) {
// //         let a = "Hi"
// //         var b = "Good Bye"  // uncaught syntax error : identifier 'b' has already been declared. 
// //         console.log(a); 
// //         console.log(b);
// //     }
// // }
// // test1(); //It is possible to shadow var variable with let but shadow let variable with var is not possible - because it crossed the boundary of scope - this is called illegal shadowing


// //Declaration without initialisation
// let z;  // Ok
// var y;  // Ok
// // const x; // not okay - uncaught error: missing initializer in const declaration


// //Declaration
// // let a;
// // let a; // Error we cannot re-declare let variables
// var a;
// var a; // This is fine
// // const a;
// // const a; // not possible - but different error it is necessary to initialise const variable while decalaration. - uncaught error: missing initializer in const declaration

// let b 
// {
//     let b; // this is fine - because of different scope - already discussed come under shadowing;
// }

// //Re - Intialisation= 1;
// // let a = 10;
// a = 20; // Ok in case of let

// var q = 10;
// q = 10; // Ok in case of var

// const w = 10;
// w = 20;     // Not Possible - uncaught type error: assignment to const variable


// //Hoisting - in the creation phase javascript move your variable and function declarations to the top of its scope
// console.log(count); // no error - output: undefined
// var count = 1;

// console.log(count1); // Error: ReferenceError: Cannont access 'count1' before initialization
// let count1 = 1;

// console.log(count2); // Error: ReferenceError: Cannont access 'count2' before initialization
// const  count2 = 1;

// //Temporal Dead Zone: It is the time between the declaration and intialisation of const and let variables
// //Temporal Dead Zone: It is the term to describe the state where variables are in the scope but they are not yet declared
let v = 0o15;
let z = 0x1123;
let x = 0b11;
console.log(v, z, x)