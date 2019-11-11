/*

**Bonus Questions: 
**1.** Write a function that takes in a parameter called `num`, and returns a random number between 0 and `num`. Look up documentation for [Math.Random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).

Examples

```
getRandomNum(6) ➞  returns a random number between 0 and 6
getRandomNumber(10) ➞ returns a random number between 0 and 10
```
*/


function getRandomNum(number){
    let num = number;
   let result = Math.floor(Math.random() * num) + 1;
return result;
}

console.log(getRandomNum(3));

/*
**2.** A leap year has one day added to February for being synchronized with the seasonal year. A leap year appears with a regular frequency, which is determined by the rule below:

The year is exactly divisible by 400, or exactly divisible by 4 and not exactly divisible by 100.
Given a year you must implement a function that returns true if it's a leap year, or false if it's not.
```
Examples
isLeap(2020) ➞ true // Exactly divided by 4 and not by 100.
isLeap(1800) ➞ false // Exactly divided by 4, but is also exactly divided by 100.
isLeap(2000) ➞ true // Exactly divided by 400.
isLeap(2019) ➞ false // It can't be exactly divided by 400 or by 4.
```

Notes

Exactly divided can be interpreted as the remainder of the division is equal to 0.

*/

function isLeap(number){
    let num = number;
    if( (num % 400 == 0) || (num %4 == 0 ) && (num % 100 != 0 ) ){

    return true;
    }
    else{

    return false;
    }
}

console.log(isLeap(2019));