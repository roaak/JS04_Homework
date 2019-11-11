//Q1
/*
Write a function to check if an array contains a particular number.

Examples
```
check([1, 2, 3, 4, 5], 3) ➞ true
check([1, 1, 2, 1, 1], 3) ➞ false
check([5, 5, 5, 6], 5) ➞ true
check([], 5) ➞ false
```
*/

function arrayCheck(boolean){
let Arr = new Array();
Arr = [1, 2, 3, 4, 5];
let  result = Arr.includes(3);

   console.log(result)
}

arrayCheck();

//Q2

/* Write a function that takes two integers (hours, minutes) and converts them to seconds.
convertToSeconds(1, 3) ➞ 3780
convertToSeconds(2, 0) ➞ 7200
convertToSeconds(0, 0) ➞ 0
*/

function convertToSeconds(Num1,Num2)
{
let i = 60 ;
Min = i * Num1;
Sec = i * Num2 ;

Total = Min * Sec ;
console.log(Total);
return Total;

}
convertToSeconds(2, 30);

//Q3
/*
Use the following data to solve the problems below. */
var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}

  

//access the value of the capacityInGallons key
    console.log(aquarium["capacityInGallons"]);

//add 2 rocks to the numberOfRocks in the aquarium

aquarium.numberOfRocks = 7 ;

//console.log(aquarium);

//access the clown fish and print the object.

console.log(aquarium.fish[2]);

//access the size of the puffer fish.

console.log(aquarium.fish[1].size);


//your goldfish grew! Access the size key of goldfish and reassign it to '4 inches'.

aquarium.fish[0].size = '4 inches';
//console.log(aquarium.fish[0]);

//you bought a new fish! Make a new object for a '5 inch' long, blue starfish and add it to the fish array.
aquarium.fish[3]={ type:'tuna', size: '5 inch' , color: 'blue'};

console.log(aquarium);


