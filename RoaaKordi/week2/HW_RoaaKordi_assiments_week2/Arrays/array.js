
 /* Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

  var q1 = [ '/images1.png', '/image2.png','/image3.png' ];
    var index = 0;

    function listImage() {
        var img = document.createElement('img')
        img.src = q1[index];
        document.getElementById('content').appendChild(img);
      }
   console.log(q1);
 
 /** Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.*/

 let q2 = new Array();
 q2 = q1[0];
 console.log(q2);

/** Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3*/

let q3 = new Array();
q3 = q1.length;
console.log(q3);

/* Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array? */
let q4 = new Array();
 q4 = q1[2];
 console.log(q4);
// Your code here


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach function or a map function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

 var q5 = [1,2,3,4];
var arr5 = [];
for (i=0;i< q5.length;)
 {
q5[i] = q5[i] +1 ;
arr5.push(q5[i]);
i++;
 }
 console.log(q5);
 

/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */

var q6 = 0;
var  sum= q5[0];
for(i=0;i < q5.length-1;){ 
 sum += q5[i]+ 1;
 console.log(sum);
 i++;
}
q6 = (sum )/ (q5.length);
console.log(q6);
