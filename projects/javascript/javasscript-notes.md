Values and variables
value is the most fundamental unit of information -piece of data
text, number,
let firstname= 'shiny'; declaring a variable and assigned value to it
console.log(firstname) gives shiny

let PI =3.14 - constant variable names can be all caps

Data Types:
value is either an object or primitive
Primitive:
number - 10.0,23.0 (in js decimal and integers are all number data type)
string - text "shiny" , "India"
boolean - true or false , take decisions with code
undefined - value taken by a variable which is not yet defined
let firstname; firstname has vlaue undefined until its assigned a value
null -
symbol - value which is unique and cant be changed.
bigIngt - large integers which a number cant hold

Javascript is dynamic typing that means you dont have to manually define the datatype while defining the variable
in Javascript variable x can be a number initially and later you can make it a string.
//comments
let javascriptIsFun = true;
console.log(javascriptIsFun)

typeof helps to find the data type of the variable
typeof null is shown as object - is a bug but not corrected

Let ,const and var
let we can declare a variable and then later assign the value to - reassigning
mutating the variable (let age=30;
age=31;)

value of const cant be changed.
const birthyear=1991;
birthyear =1990; - will give type error - assignment to const variable
const is immutable
also const job ; is not possible - miising initialiser in const declaration - means we have to declare const with value (const must be always initialised)
var works similar to let except that var is function scope and let is block scope.

Basic Operator:
operator - helps you to combine values
const currentAge = 2045-1985;
console.log(currentAge);
