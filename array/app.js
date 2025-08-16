//q:1

// var arr = ["karachi", "Lahore", "Multan" , "Islamabad", "Naran"];

// var tem = arr[1];
// arr[1] = arr[3];
// arr[3] = tem;
// console.log(arr); // ["karachi", "Islamabad", "Multan", "Lahore", "Naran"]


//q:2


// var name= "RAZA"
// name = name.toLowerCase()
// console.log(name);


// var abc = "hello world"
// for(var i =0; i < abc.length;i++){
//     console.log(abc[i]);
    
// }

//q:3

var fruits = ["bnana","apple","pineapple","grpes"];


var result = fruits.pop()
console.log(result); // "grpes"

//q:4

var arr = ["karachi", "Lahore", "Multan" , "Islamabad", "Naran"];
var result = arr.shift();
console.log(result); // "karachi"


//q:5
var arr = ["karachi", "Lahore", "Multan" , "Islamabad", "Naran"];
arr.push("Peshawar");
console.log(arr); // ["karachi", "Lahore", "Multan", "Islamabad", "Naran", "Peshawar"]

//q:6
var arr = ["karachi", "Lahore", "Multan" , "Islamabad", "Naran"];
arr.unshift("Peshawar");
console.log(arr); // ["Peshawar", "karachi", "Lahore", "Multan", "Islamabad", "Naran"]

//q:7
var arr = ["karachi", "Lahore", "Multan" , "Islamabad", "Naran"];
var result = arr.slice(1, 3);
console.log(result); // ["Lahore", "Multan"]

//q:8
var arr = ["karachi", "Lahore", "Multan" , "Islamabad", "Naran"];
var result = arr.splice(1, 2);
console.log(result); // ["Lahore", "Multan"]

//q:9
var arr = ["karachi", "Lahore", "Multan" , "Islamabad", "Naran"];
var result = arr.indexOf("Lahore");
console.log(result); // 1 (index of "Lahore")

//q:10
var arr = ["karachi", "Lahore", "Multan" , "Islamabad", "Naran"];
var result = arr.lastIndexOf("Naran");
console.log(result); // 4 (index of "Naran")