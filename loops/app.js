//q:1

// for ( var i = 0; i < 10 ; i++ ) {
//     console.log(i); // 0 to 9 print
// }

//q:2

// for ( var i = 0; i <= 10 ; i++ ) {
//     console.log(i); // zero 0 to 10 print
// }

// q:3

// for ( var i = 10; i <= 20 ; i++ ) {
//     console.log(i); // 10 to 20 print
// }

// q:4

// for ( var i = 10; i <= 20 ; ++i ) {
//     console.log(i); // 10 to 20 print
// }

//q:5


// for ( var i = 10; i <= 20 ; i-- ) {
//     console.log(i); // 10 to 20 print
// }

// for ( var i = 10; i <= 20 ; --i ) {
//     console.log(i); // 10 to 20 print
// }

//q:6

// var arr = ["kashaf", "sara", "zara" , "sana", "amna"];

// for ( var i = 0; i < arr.length ; i++ ) {
//     console.log(arr [i]); 
// }

//q:7


// var arr = ["karachi", "Lahore", "Multan" , "Islamabad", "Naran"];

// for ( var i = 0; i < arr.length ; i++ ) {
//     console.log(arr [i]); 
// }


//q:8


// var arr = ["karachi", "Lahore", "Multan" , "Islamabad", "Naran"];
// for ( var i = 0; i < arr.length ; i++ ) {
//     if (arr[i] == "Islamabad"){
//     console.log("mil gaya");}

// }


//q:9

// var arr = ["karachi", "Lahore", "Multan" , "Islamabad", "Naran"];
// var flag = false;
// for ( var i = 0; i < arr.length ; i++ ) {
//     if (arr[i] == "Islamabad")
//     flag = true; 
// }
// if (flag){
//     console.log("mil gaya")
// }else {
//     console.log("nahi mila")
// }


//q:10

var arr = ["karachi", "Lahore", "Multan" , "Islamabad", "Naran"];
var flag = "no";
for ( var i = 0; i < arr.length ; i++ ) {
    if (arr[i] == "Lahore") {
    flag = "yes"; 
    console.log("mil gaya");
    }
}

if (flag === "no")  {
    console.log("nahi mila");

}

