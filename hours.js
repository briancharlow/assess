// Write a JavaScript program to convert a given number into hours and minutes.
function changeHours(){
    let hours= Math.floor(Number(input)/60);
    let minutes= Number(input)%60;
    
    console.log(`the time in hours and minutes is ${hours} hrs and ${minutes} mins`);
}
let input=prompt("enter the number to be converted");
changeHours();