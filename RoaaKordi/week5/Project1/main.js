//Q4
/* The following JSON object has been provided to you in data.js: 
1. This JSON object contains one key value pair, which holds an array of objects. This array of objects is the data we are after.



2. What to do?

3.Create a `main.js` file and write the following functions

4. Write a function that `console.logs` each character object in the data.

*/ 

let obj = (require('./data')); 

let ArrObj = JSON.parse(obj);

let logData = function() {

console.log(obj);
console.log(ArrObj);
}

logData();

/*
5. Write a function that `console.logs` each character's `name` */

let logNames = function() {
for (let key in ArrObj.people){
    console.log(ArrObj.people[key]["name"]);
}
};

logNames();

/*
6. Write a function that `console.logs` each character's `name` and `eye color` */

let logNameEyes = function() 
{
    for (let i in ArrObj.people){
        console.log('name: ' + ArrObj.people[i].name +'  , '+  'eyes color: ' + ArrObj.people[i].eye_color);
    }
};
logNameEyes();

/*7. Write a function that `console.logs` each character's name whose `mass` is greater than 75 */


let logByMass = function() {
    for (let i in ArrObj.people){
        if (ArrObj.people[i].mass > 75 ){
            console.log(ArrObj.people[i].mass);
        }
        else
    {
        console.log('under obesity');
    }
    }
};

logByMass();