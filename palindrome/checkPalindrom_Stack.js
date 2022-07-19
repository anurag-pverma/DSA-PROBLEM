//  Reverse string using stack 
 
 
 let str = 'ram';
function reversstrig (str){

    let stack = [];
    for(var i=0; i<str.length; i++){
        stack.push(str[i]);
    }
    let revStr = "";
    while(stack.length > 0){
        revStr += stack.pop();
    }
    return revStr;
}

console.log(reversstrig (str));

// check palindrome 

let string = "nayaan";
let checkstr = reversstrig(string);
// console.log(checkstr);
if(string == checkstr){
    console.log("isPalindrome")
}
else{
    console.log("isnotPalindrome")
}
