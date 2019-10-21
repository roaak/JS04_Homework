/* Write a script that can generate random addresses
As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
Your script should randomly select one item from each of these arrays and then use them to construct a random address
Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
node random-address.js
=> 34578 Dolphin Street, Wonka NY, 44506 */
//made by Roaa Kordi
//34578 Dolphin Street, Wonka NY, 44506
let Address = ['street number', 'street name','state name' , 'zip code'];
var streetNumber = [30, 250 ,591 , 700 , 677 ,337 , 1775];
var streetName  = ['Memorial Drive', 'Brooksby Village ', 'Hartford Avenue', 'Worcester Rd', 'Massachusetts Ave', 'Fairhaven Commons','Parkhurst Rd' ];
var stateName =['Framingham MA ',' Lynn MA  ','Hudson MA ','Leicester MA ','Halifax MA  ','Gardner MA ',' Danvers MA  '];
var zipCode = [1440,2322,2019,1824,1020,2721,1701];


//random Street Number
var randomStNumber= Math.floor(Math.random()*streetNumber.length);
var address1= streetNumber[randomStNumber];

//random Street Name
var randomStName= Math.floor(Math.random()*streetName.length);
var address2= streetName[randomStName];

//random State Name
var randomState= Math.floor(Math.random()*stateName.length);
var address3 = stateName[randomState];

//random Zip code
var randomZipCode = Math.floor(Math.random()*zipCode.length);
var address4 = zipCode[randomZipCode];

// Printing the result
console.log('This is a Random Address in USA = '+ address1 + ' ' + address2 + ', ' + address3 + ', ' + address4 );



