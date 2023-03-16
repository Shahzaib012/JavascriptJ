// console.log(false || (true && false));
// console.log(true ||(1+2));
// console.log("ss");
// console.log((1+2) || true);
// console.log(true && (1 + 2));
// console.log(false && (1 + 2));
// console.log((32*4)>=129);
// console.log(false !== !true);
// console.log(true===4);
// console.log(false === (847 === '847'))
// console.log(false === (847 == '847'))
// console.log((!true || (!(100/5) === 20) || ((328/4) === 82)) || false);

// const num = 8;
// const num2 = '8';
// if(!(typeof(num) === "number")){
//     console.log("Validation check verified that it is not an integer");
// }

// if(!(typeof(num2) === "number")){
//     console.log("Validation check verified that it is not an integer");
// }

// var num = prompt();
// var num2 = prompt();
// if(!(typeof(num) === "number")){
//     console.log("Validation check verified that it is not an integer");
// }
 

// Number(num);
// var num = prompt();
// let numberGiven = Number(num);
 

// if(!isNaN(numberGiven)){
//     console.log("This is surely an integer");
// }

// else if(!(typeof(num) === "number")){
//     console.log("Validation check verified that it is not an integer");
// }

// if(Number.isInteger(num)){
//     console.log("This is an integer");
// }else {
//     console.log("It is not an integer")
// }

// Question no 3
// var a = prompt();
// var b = prompt();
// if(a>b){
//      console.log("it is greater ");
// }
// else {console.log("it is smaller")};
   
// Question no 4
// var a = prompt();
// var b = prompt();
// var c = prompt();
// if(a>b && b>c){
//      console.log(" A  is greater ");
// }
// else if(b>a && a>c)
//  {console.log("b  is greater");}

// else {console.log("c is greater")};

// Question no 5
// var a = prompt();
// if(a<0){
//     console.log("it is negative");
// }
// else if(a>0){
//     console.log("it is positive");
// }
// else {console.log("it is zero");}

// Question no 6

// var a = prompt();
// if(a%5==0 && a%11==0){
//     console.log("it is divisible by 5 and 11");
// }
// else {console.log("its not divisible");}

// Question no 7

// var a = prompt();

// if(a%2==0){
//     console.log("it is even");
// }else if(a == 0){
//     console.log("It is even")
// }
// else {console.log("its odd");}

// Question no 8

// function allLetter(inputtxt)
//   {
//    var letters = /^[A-Za-z]+$/;
//    if(inputtxt.match(letters))
//      {
//       //  console.log("true");
//       return true;
//      }
//    else
//      {
//      alert(" message:It is not alphabet");
//      return false;
//      }
//     }
//     let val = allLetter (prompt());
//     console.log(val);

// Question No 9
// var a = prompt("Please enter character");

// switch(a){
//     case "Sunday":  
//             console.log("it is Sunday");
//         break;
//         case "Monday":  
//             console.log("it is Monday");
//         break;
//         case "Tuesday":  
//             console.log("it is Tuesday");
//         break;
//         case "Wednesday":  
//             console.log("it is Wednesday");
//         break;
//         case "Thursday":  
//             console.log("it is Thursday");
//         break;
//         case "Friday":  
//             console.log("it is Friday");
//         break;
//         case "saturday":  
//             console.log("it is Saturday");
//         break;
//             default:
//                 console.log("Monday");
// }

// Question NO 10

// var a = prompt("Please enter Month");

// switch(a){
//     case "January":
     
//             console.log("31 Days");
//         break;
//         case "February":
//         case "february":
//             console.log("28 Days");
//         break;
//         case "March":
//         case "march":
//             console.log("31 Days");
//         break;
//         case "April":  
//         case "april":  
//             console.log("30 Days");
//         break;
//         case "May":  
//         case "may":  
//             console.log("31 Days");
//         break;
//         case "June":  
//         case "june":  
//             console.log("30 DAys");
//         break;
//         case "July":  
//         case "july":  
//             console.log("31 Days");
//         break;
//         case "August":  
//         case "august":  
//             console.log("31 Days");
//         break;
//         case "September":  
//         case "september":  
//             console.log("30 Days");
//         break;
//         case "October":  
//         case "october":  
//             console.log("31 Days");
//         break;
//         case "November":  
//         case "november":  
//             console.log("30 Days");
//         break;
//         case "December":  
//         case "december":  
//             console.log("31 Days");
//         break;
//             default:
//                 console.log("Enter The Correct Name");
// }

// Question No 11
// var a = prompt("Please enter character");

// switch(a){
//     case "A":
//         case "a": 
//             console.log("it is vowel");
//         break;
//         case "E":
//         case "e":
//             console.log("it is vowel");
//             break;
//             case "I":
//             case "i":
//             console.log("it is vowel");
//             break;
//             case "O":
//             case "o":
//             console.log("it is voswel");
//             break;
//             case "U":
//             case "u":
//             console.log("it is voswel");
//             break;
//             default:
//                 console.log("It is Constant");
// }

// Question No 12         it is not valid question.....
// var num1 = prompt();
// var num2 = prompt();
// num3 = Number(num1);
// num4 = Number(num2);

// switch (num3,num4) {
//   case (num3>num4):
//     console.log("Maximum Number", num3);
    
//     break;
//     case num3<num4:
//       console.log("Maximum Number",num4);
      
//       break;
//   default:
//     console.log("These are equals to each other");
//     break;
// }


// Question No 13
// var num = Number(prompt());

// switch (num % 2) {
//   case 0:
// console.log("it is even")
    
//     break;

//   default:
//     console.log("it is odd");
//     break;
// }

// Question No 14
// var num = prompt();
// switch (true){
//     case num> 0:
//         console.log("it is positive number");
//         break;
//         case num< 0:
//         console.log("it is negative number");
//         break;
//         case num == 0:
//             console.log("it is zero");
//             break;
//   default:
//     console.log("invalid value")
//     break;
// } 

// let num = parseInt(prompt("Enter a number:"));

// switch (true) {
//     case num > 0:
//         console.log(num + " is a positive number");
//         break;
//     case num < 0:
//         console.log(num + " is a negative number");
//         break;
//     default:
//         console.log(num + " is zero");
//         break;
// }

// Question No 15
// let a = parseFloat(prompt("Enter the value of coefficient a:"));
// let b = parseFloat(prompt("Enter the value of coefficient b:"));
// let c = parseFloat(prompt("Enter the value of coefficient c:"));

// let discriminant = b * b - 4 * a * c;
// let x1, x2;

// switch (true) {
//     case discriminant > 0:
//         x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         console.log(`The roots of the quadratic equation are ${x1} and ${x2}`);
//         break;
//     case discriminant === 0:
//         x1 = -b / (2 * a);
//         console.log(`The root of the quadratic equation is ${x1}`);
//         break;
//     default:
//         console.log("The quadratic equation has no real roots");
//         break;
// }

// Question No 16
 // get input values
// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let operator = prompt("Enter an operator (+, -, *, /):");

// calculate result based on operator
// let result;
// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     result = num1 / num2;
//     break;
//   default:
//     result = "Invalid operator";
// }

// display result
// alert(result);

// Questions No 17
//  let amount = parseInt (prompt("Enter Amount"));
// let note = 10;
// let num = Number(amount);5
// let ab = amount/note;
//   console.log("Number of Notes = ", ab);

// Question NO 18......................
// let angle1 = Number(prompt("Enter Angle One"));
// let angle2 = Number(prompt("Enter Angle Two"));
// let angle3 = Number(prompt("Enter Angle Three"));

// let isTrue = true;

// if((angle1 + angle2) < angle3 || (angle2 + angle3) < angle1 || (angle1 + angle3) < angle2){
//   isTrue = false;
// }

// if (isTrue){
//   console.log("it is valid");
// }else{console.log("it is invalid");}






 




// Question NO 19.....
// let isTrue = true;

// let side1 = Number(prompt("Enter side One"));
// let side2 = Number(prompt("Enter side One"));
// let side3 = Number(prompt("Enter side One"));
// let a,b,c = 0;

// if((side1 >side2)){
//   isTrue = false
// }

// Take input from user
// const side1 = parseFloat(prompt("Enter the length of side 1:"));
// const side2 = parseFloat(prompt("Enter the length of side 2:"));
// const side3 = parseFloat(prompt("Enter the length of side 3:"));

// Check if input is valid
// if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
//   console.log("Invalid input. Please enter a number for all sides.");
// } else if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
//   console.log("Invalid input. All sides should be greater than 0.");
// } else 
// if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
//   console.log("The input sides do not form a valid triangle.");
// } else {
//   console.log("The input sides form a valid triangle.");
// }


// let side1 = Number(prompt("Enter side One"));
// let side2 = Number(prompt("Enter side One"));
// let side3 = Number(prompt("Enter side One"));
// if (isNaN(side1) || isNaN(side2) || isNaN(side3)){
//   alert("it is invalid please enter number for all sides.");
// }else if(side1 <= 0 || side2 <= 0 || side3 <= 0 ){
//   alert("all sides should be greater than 0. ");
// }
//   else if(side1 + side2 <=side3 || side2 + side3 <= side1 || side1 +side3 <= side2){
//     alert("the input sides do not form a valid triangle .");
//   }else{console.log("the input sides form a valid triangle");}

// questionNo .....

//  let num = Number(prompt("Enter a number:"));
// let sum = 0;
// let product = 1;

// while (num > 0) {
//   let digit = num % 10;
//   sum += digit; 
//   sum = sum + digit
//   product *= digit;
//   num = Math.floor(num / 10);
// }

// console.log("Sum:", sum);
// console.log("Product:", product);

// question No 20.....................


function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   var digit = /^[0-9]+$/;
   if(inputtxt.match(digit))
     {
      //  console.log("true");
       alert(" message:It is digit");
      return true;
     }
   else if(inputtxt.match(letters))
     {
     alert(" message:It is alphabet");
     return true;
     }
     else{
      alert(" message:It is not alphabet");
      return false;
     }
    }
    let val = allLetter (prompt());
    console.log(val);
