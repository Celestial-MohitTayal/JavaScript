// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");


// function flattenArr(arr) {
//     let result = [];
    
//     function helperFunc(subArr) {
//         for(let elem of subArr) {
//             if(typeof elem === 'object' && elem !== null && elem.constructor == Array){
//                 helperFunc(elem);
//             } else {
//                 result.push(elem);
//             }
//         }
//     }
    
//     helperFunc(arr);
//     return result;
// }

// console.log(flattenArr([1,2,[3,4,[5],6],7,8]))

//curry function implementation

// function curry (func) {
//     return function curriedFunc(...args){
//         console.log(args.length, func.length)
//         if(args.length >= func.length) {
//             return func(...args)
//         } else{
//             return function(...next) {
//                 return curriedFunc(...args, ...next);
//             }
//         }
//     }
// }

// const sum = (a,b,c,d) => a+b+c+d;
// const totalSum = curry(sum);
// console.log(totalSum(1)(2)(3)(4))


// let array = ['a','b'];
// let elem = [1,2,3];

// array.push.apply(array, elem);

// console.log(array)

// function asyncTask(taskName, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`${taskName} is completed in the ${delay} Secs`);
//       resolve(taskName);
//     }, delay * 1000);
//   });
// }

// function syncTask(taskName, delay) {
//   const start = Date.now();
//   while (Date.now() - start < delay * 1000) {}
//   console.log(`${taskName} is completed in the ${delay} Secs`);
// }

//  function asyncTaskRecord() {
//     console.log("Asynchrounous task are running");
//     let start = Date.now();
//     Promise.all([
//       asyncTask("Async Task 1", 10),
//       asyncTask("Async Task 2", 5),
//       asyncTask("Async Task 3", 3),
//       asyncTask("Async Task 4", 1),
//     ]).then((res) => {
//     let end = Date.now();
//     console.log("Total time taken by asynchronous task: ", end - start);
//     });
// }

// function syncTaskRecord() {
//     console.log("Synchrounous task are running");
//     let start = Date.now();
//     syncTask("Sync Task 1", 10),
//     syncTask("Sync Task 2", 5),
//     syncTask("Sync Task 3", 3),
//     syncTask("Sync Task 4", 1);
//     let end = Date.now();
//     console.log("Total time taken by synchronous task: ", end - start, "\n");
// }

// syncTaskRecord();
// asyncTaskRecord();



// // let now = new Date().getTime();

// // setTimeout(() => {
// //     console.log("Task 1 - 10 Secs")
// //     return setTimeout(() => {
// //         console.log("Task 2 - 7 Secs")
// //         return setTimeout(() => {
// //             console.log("Task 3 - 5 Secs")
// //             return setTimeout(() => {
// //                 console.log("Task 4 - 6 Secs")
// //                 let currentTime = new Date().getTime();
// //                 let timeTaken = currentTime - now;
// //                 console.log("Total Time Taken:", timeTaken)
// //             }, 6000)
// //         }, 5000)
// //     }, 7000)
// // }, 10000)

// console.log(typeof class)

// function findGCD(arr) {
//     let smallestNum = 100;
//     for(let elem of arr) {
//         if(smallestNum > elem){
//             smallestNum = elem;
//         }
//     }
    
//     // console.log(smallestNum)
    
//     while(smallestNum > 0){
//         if(isGCD(smallestNum, arr)) return smallestNum;
//         smallestNum--;
//     }
// }

// function isGCD(num, arr) {
//     for(let elem of arr){
//         if(elem % num !== 0){
//             return false;
//         }
//     }
//     return true;
// }


// console.log(findGCD([7, 14, 28]))



// function add(a) {
//     const inner = (b) => add(a + b);
//     inner.valueOf = () => a; // Converts function to value when needed
//     // console.log(a);
//     return inner;
// }

// // Example usage:
// console.log(+add(10)(20)(30));

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");


// let arr1 = [1,3,5,7,9]
// let arr2 = [2,4,6]

// function mergeArrays(arr1, arr2) {
//     let n = arr1.length;
//     let m = arr2.length;
    
//     let i = 0;
//     let j = 0;
    
//     let result = [];
    
//     while(i < n || j < m) {
//         if(arr1[i] < arr2[j] || arr2[j] == undefined){
//             result[result.length] = arr1[i];
//             i++;
//         } else {
//             result[result.length] = arr2[j];
//             j++;
//         }
//     }
    
//     return result;
// }

// console.log(mergeArrays(arr1, arr2));


// function foo() {
//     console.log(arguments);
// }
 
// const bar = () => {
//     console.log(arguments);
// };
 
// foo(1, 2, 3);
// bar(4, 5, 6);

// function Person(name) {
//     this.name = name;
// }
 
// Person.prototype.sayHello = function() {
//     console.log(`Hello, ${this.name}`);
// };
 
// const p = new Person("John");
// p.sayHello.call(p);

// console.log({} + {});
// console.log({} + []);
// console.log([] + {});
// console.log([] + []); 
// console.log(Math.floor(0.1) + Math.floor(0.2) === Math.floor(0.3))


// let arr = [1,2,3,4,5,6]
// console.log(arr.slice(1,3))
