/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

let Monkey = {
    name: 'Mark',
    species: ' spider monkeys',
   foodsEaten: ' fruits ',
    eatSomething:function()
   {
       return (this.foodsEaten)
   },
   introduce:function(string){
        console.log( 'My name is ' + this.name + ' , my specy is ' +  this.species + ' . I love to eat ' +this.foodsEaten);
   }
}

console.log(Monkey);
console.log(Monkey.introduce(),Monkey.eatSomething());
let monkey1 =  Monkey;
monkey1.name ='Ayham';
monkey1.species= 'Barbary macaque';
monkey1.foodsEaten= 'mixture of plants and insect prey';


console.log(Monkey);
console.log(Monkey.introduce(),Monkey.eatSomething());

let monkey2 =  Monkey;
monkey1.name ='coco';
monkey1.species= 'Common squirrel monkey';
monkey1.foodsEaten= 'fruits , vegetables ,frog, insects';

console.log(Monkey);

console.log(Monkey.introduce(),Monkey.eatSomething());
