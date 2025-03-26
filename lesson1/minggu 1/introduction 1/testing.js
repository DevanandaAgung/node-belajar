const rgb = [255, 140, 0]

// Before Destructing Array
const redManual = rgb[0]
const greenManual = rgb[1]
const blueManual = rgb[2]

// // After Destructing Array
const [red, green, blue] = rgb
console.log(red , green, blue) // Output: 255 140 0