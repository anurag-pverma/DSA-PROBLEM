
// Merge sort with recursive approach


var arr= [20, 23, 52, 1, 3, 5, 80, 12]
var N = arr.length;
    var left=0;
   var right=N-1
    mergeSort(arr,left,right)
    console.log(arr.join(" "))
    

   function mergeSort(arr,left,right){
       
       if(left==right){
           return
       }
       let middle=Math.floor((left+right)/2)
       mergeSort(arr,left,middle)
       mergeSort(arr,middle+1,right)
       mergeArr(arr,left,right,middle)
       
   }
   
   function mergeArr(arr,left,right,middle){
       var arr1=[]
       var arr2=[]
       var i=0;
       var j=0;
       var current=left
       for(let x=left; x<=middle; x++){
           arr1.push(arr[x]);
       }
       for(let y=middle+1; y<=right; y++){
           arr2.push(arr[y])
       }
       
       while(i<arr1.length && j<arr2.length){
           if(arr1[i]<=arr2[j]){
               arr[current]=arr1[i]
               i++
           }
           else{
               arr[current]=arr2[j]
               j++
           }
           current++;
       }
       while(i<arr1.length){
           arr[current]=arr1[i]
           i++
           current++
       }
         while(j<arr2.length){
           arr[current]=arr2[j]
           j++
           current++
       }
   }
   
    
   
     