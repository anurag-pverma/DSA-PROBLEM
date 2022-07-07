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