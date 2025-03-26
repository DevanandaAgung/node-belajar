console.log("hello world")

// LOOPING
for (let i=0; i<5; i++) {
  console.log(i + '. I have to be progamer') ;
}

// template literals A
const a = 10;
const b = 15;

console.log(
  'value a = '+ a + '\n'+
  'value b = '+ b + '\n'+
  'the sum of a with b is'+ 
  (a+b)
)

// template literals B
const c = 10;
const d = 15;

console.log(
  `value c = ${c}
  value d = ${d}
  the sum of c with d is ${c + d}`
)

// spread operator

// Array
const e = [1, 2]
const f = [3, 4]
const g = [...e, ...f]
console.log(g) // [1, 1, 3, 4]

// object
const biodata1 = {nama: "bagus"}
const biodata2 = {umur: 17}
const biodata = {...biodata1, ...biodata2}
console.log(biodata)
// output {nama: "bagus", umur: 17}

// Destructing

const student = {
  firstName: "Grad",
  lastName : "chinda"
};

// // Before Destructing Object
// const firstName = student.firstName
// const lastName = student.lastName

// after Destructing Object
const {firstName, lastName} = student
console.log(firstName, lastName); // output Grad chinda

// const rgb = [225, 140, 0];

// // before Destructing Array
// const red = rgb[0];
// const green =rgb[1];
// const blue = rgb[2];

// // After Destructing Array
// const [r, g, b] = rgb;
// console.log(r, g, b);