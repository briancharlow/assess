// Write a JavaScript program to find the types of a given angle.

// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function angle(){
    if(random===90){
    console.log("this is a right angle");
    }
    else if(random<90){
        console.log("this is an acute angle")
    }
     else if(random>90 && random<180){
        console.log("this is an obtuse angle")
    }
     else if(random===180){
        console.log("this is a straight angle")
    }
    else{
        console.log("this is a reflex angle")
    }
}
let random=prompt("please enter the degrees");
angle();