// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
function check(){

let x=8;
let sum= num1+num2;
let diff= Math.abs(num1-num2);

if((Number(num1)|| Number(num2))===8){
    if(num1===8){
        console.log("num1 is 8");
    }
    else {
        console.log("num2 is 8");
    }
    
}
else if(sum===8){
    console.log("sum of the numbers is 8");

}
else if(diff===8){
    console.log("the difference of the numbers is 8");
}
else{
    console.log("the numbers are neither 8, nor have a sum of eight, nor have a difference of eight");
}

}
let num1=prompt("enter the first number:");
let num2=prompt("enter the second number");
check();