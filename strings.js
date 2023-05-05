//Write a function that takes an array of numbers as input and 

// const { number } = require("prop-types")

// //returns the sum of all the numbers

function add(arrayNums){
    let sum=0
    for(let i=0;i<arrayNums;i++){
    sum+=arrayNums[i]
}
return sum
}
const arrayNums=[34,78,90]
console.log(add(arrayNums))
//Write a function that takes two numbers as input and returns true if their sum is
// greater than 100,
//And false otherwise
function add_numbers(num1,num2){
    sum=num1+num2
    if(sum>100){
        return true
    }else
    return false
}
const string=[30,20]
console.log(add_numbers(string))

//Write a function that takes a string as input and returns the number of vowels in the 
//string
function count_vowels(string){
    const count=string.match(/['a','e','i','o','u']/g).length
    return count
}
console.log(count_vowels("miriam"))


//Write a function that takes in a array of numbers as a parameter and returns the second 
//largest number in the array


//Write a function that takes a string as a parameter and returns true if the string is a
// palindrome and false otherwise
function checkPalindrome(string){
   var  myString="noon".split(",").reverse("").join("")
    if(string==myString){
        return "true"
    }else
    return "false"
}
console.log(checkPalindrome("noon"))
