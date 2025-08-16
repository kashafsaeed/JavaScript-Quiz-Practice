// var arr = ["karachi", "Lahore", "Multan" , "Islamabad", "Naran"];
// var flag = "no";
// for ( var i = 0; i < arr.length ; i++ ) {
//     if (arr[i] == "Lahore") {
//     flag = "yes"; 
//     console.log("mil gaya");
//     }
// }

// if (flag === "no")  {
//     console.log("nahi mila");

// }

// q:2

var arr = ["karachi", "Lahore", "Multan" , "Islamabad", "Naran"];
var flag = false;
for ( var i = 0; i < arr.length ; i++ ) {
    if (arr[i] == "naran")
    flag = true; 
}
if (flag){
    console.log("mil gaya")
}else {
    console.log("nahi mila")
}

// q:3

// for ( var i = 0; i < arr.length ; i++ ) {
//     if (arr[i] == "Lahore") {
//     console.log("mil gaya");
//     break; // stops the loop when "Lahore" is found
//     }
//     console.log("nahi mila");
// }
// console.log("nahi mila"); // this will execute if "Lahore" is not found in the array
 

// q:4
// var arr = ["karachi", "Lahore", "Multan" , "Islamabad", "Naran"];
// var flag = false;
// for ( var i = 0; i < arr.length ; i++ ) {
//     if (arr[i] == "Lahore") {
//     flag = true;
//     console.log("mil gaya");
//     continue; // skips the rest of the loop iteration when "Lahore" is found
//     }
//     console.log("nahi mila");
// }
// var flag = false;
// for ( var i = 0; i < arr.length ; i++ ) {
//     if (arr[i] == "Lahore") {
//     flag = true;
//     console.log("mil gaya");
//     break; // stops the loop when "Lahore" is found
//     }
// }