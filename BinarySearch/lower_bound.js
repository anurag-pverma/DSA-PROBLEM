let arr = [1, 1, 2, 2 ,5];
var k = 2;
var n = arr.length-1;

// we have to find lower bound  time complexity O(logN)

function lowerBound(arr,n,  k){
    var start = 0; end = n; var ans = -1; // 
    while (start<=end) {// 
        var mid = start + Math.floor((end -start)/2)
        
        if(arr[mid]==k){
            ans = mid
            end = mid-1;
        }
        else if (arr[mid]>k) {
            end = end -1;
        }
        else {
            start = mid +1;
        }
        
    }
    return ans;
}

console.log(lowerBound(arr,n,  k))