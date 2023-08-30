const arr = [1, 2];

// push returns the new length of the array
const new_lenght_of_the_arr = arr.push(5);

const arr2 = [10, 11, 12];
// concats return the new array after merging
const newArr = arr.concat(arr2);
const newArrES6 = [...arr, ...arr2];

console.log(new_lenght_of_the_arr);
console.log(newArr);
console.log(newArrES6);
