/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here

let car = {
make: 'GMC',
model: 'Denali',
year: '2009',
drive: true,
break: true,
park: true,
get_properties: function(){
console.log('Car properties:  ' + 'make:  '+ this.make + ' , model: '+ this.model + ' , year: ' + this.year );
},
get_priviledge: function(){
console.log('Car priviledge :' + 'drive:  ' + this.drive + ' ,  break:'+ this.break + ' , park: ' + this.park );
}};
car.get_properties();
car.get_priviledge();

// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

var pet_owner ={
name:'Amjad',
address:{
  stNumber:"76743", city:"Riyadh", zipcode:"1111"},
}
console.log('The pet Owner: ' + pet_owner["name"]);
// Answer Starts Here

// Answer Ends Here

// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.

  // Pet
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'pet' has:
  // - a name
  // - a species
  // - a breed
  // - a noise that it can make (e.g. 'bark', 'meow', etc.)
  // Every pet can:
  // - make noise (each pet makes its own unique noise, as specified by `noise`.

let some_pet ={
  name: 'leonardo',
  species: ' kitten ',
  breed: ' ',
  noise: 'meow ',
  make_noise:true,
  introduce: function(){
    console.log(this.name + this.species +this.breed +this.breed + this.noise + this.make_noise) ;
  }
};

console.log('The pet properties :' + some_pet.introduce());
// Answer Starts Here

// Answer Ends Here

// 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
//    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
//    which behaves as described in Q3.

var Pet;
// Answer Starts Here

// Answer Ends Here

module.exports = {
  answerTwo: pet_owner,
  answerThree: some_pet,
  answerFour: Pet
}

/////////////////////////////////////////////////////////////

// You're done! Refer back to README.md.

/////////////////////////////////////////////////////////////
