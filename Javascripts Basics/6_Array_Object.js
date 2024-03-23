//Array 
const fruits = ["Banana", "Apple", "Mango", "pear"]
console.log(fruits);
Accesing in array
console.log(fruits[0]);  // Only log Banana in console

// Array Method 
//1) Push Method ----> Adding new element in array
fruits.push("Orange");
console.log(fruits);

//2) Pop Method ----> Removing last element from array
fruits.pop();
console.log(fruits);

//3) Slice() Method ----> Accesing element from certain range
console.log(fruits.slice(0,3)); //----> 0 Index inclusive and 3 index exclusive [0,2]

//4) Indexof Method 
console.log(fruits.indexOf("Apple"));

//5) Lenght of array
console.log(fruits.length);

// Object in Javascrips
const person = {
    name : 'Vaibhav',
    profession : 'Developer'
}
console.log(person);
//Dot access vs Bracket access
console.log(person.name);
console.log(person.profession);

console.log(person['name']);
console.log(person['profession']);

//Object with function 
// Goal --> print Hi , My name is vaibhav and my shirt color is red

const intro =(name, shirt)=>{
    const person1 ={
        name : "Vaibhav",
        shirt : "Red"
    }
    //Template literals
    const string = `Hi, My name is ${person1.name} and my shirt color is ${person1.shirt}`;
    return string; 
}
console.log(intro("vaibhav", "Red"));

const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liabilities: 50000,
    netWorth: function() {
      return this.assets - this.liabilities
    }
  }
  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $${person.netWorth()} USD`
  return intro
}

console.log(introducer("Vaibhav","Red"))
