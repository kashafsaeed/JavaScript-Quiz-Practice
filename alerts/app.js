// q:1

let name = "Alice";
alert("Hello, " + name + "!"); // Hello, Alice!

//q:2

alert(2 + 2);  // 4

//q:3

let result = confirm("Do you want to proceed?");
if (result) {
  console.log("User clicked OK");
} else {
  console.log("User clicked Cancel");
}

// q:4
let x = 5;
let y = "5";
alert(x == y); // true 

//q:5
let results = alert("2" + 2 - "1"); // 21

// q:6
var resultss = alert(2 - "4" * 6);
// (4*6 => 2 - 24) => -22

// q:7
var resultsss = alert(12 - 45 + "3" + 8 );
 //(12-14 => -33 => -33 con + 3 => -333 => -333 + 8) -3338


// q:8 

var alert1 = alert(23 + 23 - 3 + "87" * 2);
// (23 + 23 => 46 => 46 - 3 => 43  + => 87*2 => 174 => 174 + 43 ) 217

// q:9

var result1 = alert(4 + "34" - 6); 
// 4 + concat 34 => 434 => 434 - 6 => 428 ans 


// q:10

var result2 = alert(34 + 67 - 7 + "hello" + 7  ); 
//  ( 34 + 67 => 101 => 101 - 7 => 94 => 94 + hello + 7) 94hello7

// q:11
var result3 = alert(5 - 2 +  89 * "45" + 67 % 8 + "5"); //40115


//q:12 
var result4 = alert (2 + "2");//22

//q:13
var result5 = alert(7 + "7" + 7 * "98" );// 77686