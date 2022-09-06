//The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

//You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already 
//defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula 
//mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertCtoF(celsius) {
  const fahrenheit = (celsius * (9/5)) + 32;
  return fahrenheit;
}

convertCtoF(30);

//Reverse the provided string.
//You may need to turn the string into an array before you can reverse it.
//Your result must be a string.

function reverseString(str) {
return str.split("").reverse().join("");
}

reverseString('hello');

//Return the factorial of the provided integer.
//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//Factorials are often represented with the shorthand notation n!
//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num === 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
factorialize(5);

//Find the Longest Word in a String
//Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWord(str){
    let 
    words = str.split(''), 
    maxLength = 0, 
    longest = 0, 
    i;

    for(i = 0; i < longest; i+=1){
        if(words[i].length > maxLength){
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

//Return Largest Numbers in Arrays
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {

    let arrResult = [], i;
    const arrLength = arr.length;

        for(i = 0; i < arrLength; i+=1){
            let max = arr[i][0], j;
            const arrsLength = arr[i].length;

                for(j = 0; j < arrsLength; j+=1){
                    if(arr[i][j] > max){
                        max = arr[i][j];
                    }
                }
            arrResult[i] = max;
        }
    return arr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Confirm the Ending
//Check if a string (first argument, str) ends with the given target string (second argument, target).
//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the //JavaScript substring methods instead.

function confirmEnding(str, target) {
    return str.substring(str.length - target.length) === target;
  }
  
  confirmEnding("Bastian", "n");

//Repeat a String Repeat a String
//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this //challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    let newStr ='', i;
    for(i = 0; i < num; i+=1){
        newStr += str;
    }
    return newStr;
  }
  repeatStringNumTimes("abc", 3);

//Truncate a String
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    if(str.length > num){
        return str.slice(0, num) + "...";
    }else{
        return str;
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

//Finders Keepers
//Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth //test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
    return arr.find(func);
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

//Boo who
//Check if a value is classified as a boolean primitive. Return true or false.

//Boolean primitives are true and false.

function booWho(bool) {
  return (typeof bool === 'boolean')
}

booWho(null);























