Values and variables
value is the most fundamental unit of information -piece of data
text, number,
let firstname= 'shiny'; declaring a variable and assigned value to it
console.log(firstname) gives shiny

let PI =3.14 - constant variable names can be all caps

Data Types: assignment.js
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

Basic Operator: bmi-challenge.js
operator - helps you to combine values
const currentAge = 2045-1985;
console.log(currentAge);

type of operator

assignment operator =
let x= 10+5; 10+5 is calculated first and then the value is assigned to x
x+=10 same as x= x+10; 15+10 = 25
x*=4 same as x = x*4 ; result is 25\*4 = 100
x++ same as x=x+1 101
x-- same as x=x-1 100

comparison operators: for making descisions >, < .>= ,<=
result is boolean
console.log(10>20) result is false
console.log(30>10) result is true

operator precedence:
mathematical operators are always performed first before comparison operators.
most operatos are operated left to right
exponentional , assignment operator is executed right to left

Strings and template literals:stringTemplate.js
//old method
const shiny =
" I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
//using template literals
const shinyNew = ` I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(shinyNew);
can also use ` for any regular string

Taking decisions - if else: descision.js
if (BMIMark > BMIJohn) {
console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's!`);
} else {
console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's!`);
}

Type conversion and coercion :conversionCoercion.js
const year ='1991'; - is a string so if we perform + operation it will concatinate like
console.log(year+20) - 199120 will be the output,
so to enable arithmetic operation we convert the string type to Number using Number()
console.log(Number(year)+20) =2011 ;
when you try to convert a string (shiny ) to a number - NaN(type is number)
convert to a string use String()

type coercion:
when dealing with two types of values -
console.log("i am a " + 30 + "year old programmer");
here the + triggers a coercion

console.lo('23'- '10'- 3) ; gives 10 - converts string to number(reverse coercion happens here) same for multiplication and division too (takes values as numbers)

truthy and falsy value:
ONLY 5 falsy values : 0,"", undefined , null and NAN
when converting these above 5 values it will be false and rest all when converted to boolean will be truth
console.log(Boolean(0)) - false
console.log(Boolean(25)) - truth

Equality operator:
