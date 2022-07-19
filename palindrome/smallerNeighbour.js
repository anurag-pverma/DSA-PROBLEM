let arr = [39, 27, 11, 4, 24, 32, 32, 4];

// smaller nighbour element
var N= arr.length-1;
function smallerNeighbour(arr, N){
    var stack = [];
    var ans = [];

    for(var i=0; i<arr.length; i++){
        while (stack.length !=0 && arr[i] <= stack[stack.length-1]) {
            stack.pop();
        }
        if(stack.length==0){
            ans[i]= [-1];
        }
        else{
            ans[i]= stack[stack.length-1] 
        }

        stack.push(arr[i]);
    }
    // return ans;/
    var bag = "";
    for(var i=0; i<ans.length; i++){
        bag += ans[i]+ " "
    }
    return bag;
}

console.log(smallerNeighbour(arr, N));
