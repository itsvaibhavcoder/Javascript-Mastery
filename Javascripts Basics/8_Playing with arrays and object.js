//Sum of Array
const getsum =(nums)=>{
   res = 0;
   for(num of nums){
    res = res+num;
   }
   return res
}
const nums =[3,4,5,6]
console.log(getsum(nums));

//Max in array
const getMax = (nums)=>{
  max = -1;
  for(num of nums){
    if(num>max){
      max = num;
    }
  }
  return max;
}
const nums1 = [5,1,2,7,9,7]
console.log(getMax(nums1));

//Frequency of Letter in give phrase
const letterFrequency =(phrase)=>{
  const frequency = {}
  for(const letter of phrase){
    if(letter in frequency){
      frequency[letter] =  frequency[letter] + 1;
    }
    else {
      frequency[letter] = 1;
    }
  }
  return frequency
}

let phrase = "vaibahv";
console.log(letterFrequency(phrase))

const wordFrequency = (phrase) =>{
  let frequency = {}
  words = phrase.split(' ')
  for(const word of words){
    if(word in frequency){
      frequency[word]+=1;
    }else{
      frequency[word] = 1;
    }
  }
  return frequency
}
let phrase = "Hi dude how are you are you"
console.log(wordFrequency(phrase));
//  Another way 
wordFrequency('lol what lol') 👉 {'lol': 2, 'what': 1}
const wordFrequency = (phrase) => {
  const words = phrase.split(' ')
  return letterFrequency(words)
}
const userInput = prompt("Enter the input");

