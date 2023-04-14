console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// for (var i = 1; i < 100; i++) {
//   //   if (i % 2 != 0) {
//   //     console.log(i);
//   //   }
//   if (i % 2 == 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// for (var i = 1; i <= 100; i++) {
//   console.log(i);
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FIZZBUZZ");
//   } else if (i % 3 == 0) {
//     console.log("FIZZ");
//   } else if (i % 5 == 0) {
//     console.log("BUZZ");
//   }
// }

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
console.log("Exercise 1 done in a while loop");
// var a = 1;
// var b = 100;
// while (a <= b) {
//   if (a % 2 != 0) {
//     console.log(a);
//     a++;
//   }
//   if (a % 2 == 0) {
//     a++;
//   }
// }

console.log("Exercise 2 done in DO While loop");

// let i = 1;
// do {
//   console.log(i);
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FIZZBUZZ");
//   }
//   else if (i % 3 == 0) {
//     console.log("FIZZ");
//   } else if (i % 5 == 0) {
//     console.log("BUZZ");
//   }
//   i++;
// } while (i < 100);


console.log("EXERCISE 4:\n==========\n");

// let value = Math.round((Math.random() * 500));
// let n = Math.round(Math.random() * (500 - 100) + 100);

// for (var i = 0; i <= n; i++){
//     console.log(i);
//     if (i == value){
//         console.log("Found value!")
//          break;
//     }
//     else{
//         console.log("Did not find value");
//     }
// }

console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (var i = start; i <= n; i++) {
  console.log(i);
  if (i == fizzDivisor) {
    console.log("FIZZ");
  } else if (i == buzzDivisor){ 
    console.log("BUZZ");
  }
  else if (i % 3 == 0 && i % 5 == 0) {
   console.log("FIZZBUZZ");
  }
}


