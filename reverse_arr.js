/// Reverse of an array with two pointers
var arr = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function swap(arr, i, j){
    var temp = arr[i];
    arr[i]= arr[j];
    arr[j]= temp;
  }
  
  function reversearray(arr){
    var right = arr.length-1;
    var left = 0;
    
    while(left<right){
      swap(arr, left, right)
      left++;
      right--
    }
    return arr;
  }
  
  console.log(reversearray(arr))

  // question/You are given an array, and an integer K
  // You have to reverse the array from0 to K, keeping the rest of the elements in the same order
  // You must not use any extra space or create a new array for the same
  // Ensure you are not using any extra array to achieve this, and not directly printing it

  // *************SOLUTION*********
  
var array = [1 ,2 ,3 ,4 ,5 ,6]
// output = 4 3 2 1 5 6
var n = 6, k= 3;
console.log( reverseFirstPart(array, n, k))
function reverseFirstPart(arr, n, k){
  var left = 0;
  while(left<k){
    swap(array, left, k);
    left++;
    k--;
  }
  return array.join(" ")
}

