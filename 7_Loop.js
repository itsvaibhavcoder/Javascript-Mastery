//Loops in Javascripts 

const fruits1 = ["Apple", "Orange", "Pear", "Banana"]
for(let i=0; i<fruits1.length; i++){
 console.log(fruits1[i]);
}

// Another way
 for(const fruit of fruits1){
 console.log(fruit);
}

 let res = []
 const numbers = [1,2,3,4,5,6];
 for(const num of numbers){
  res.push(num*2);
}
 console.log(res);

//Using Arrow Function

const double = (numbers)=>{
 let res = []
  for(const number of numbers){
   res.push(number*2);
 }
  return res;
 }
 console.log(double([1,2,3,4,5,6]))

const howManyLetters =()=>{
  const phrase = 'hey, can you go to grocery store with me?'
  for(letter in phrase){ // in --> index
    console.log(letter)
  }
}
console.log(howManyLetters());

const howManyLetters =()=>{
  const phrase = 'hey, can you go to grocery store with me?'
  for(letter of phrase){ // of --> character
    console.log(letter)
  }
}
console.log(howManyLetters());
