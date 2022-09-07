// Remove Duplicates of an array
let arr = [1, 3, 5, 6 , 4, 4, 4, 3, 4  ,5,3, 2, 5, 6];
let obj= {};
for(let i of arr){
    obj[i]= true
}

let newarr = Object.keys(obj);
console.log(newarr)
console.log(typeof(arr))


// using set data structure 
let set = [...new Set(arr)]; // it gives unique element of an array 
console.log(set);