//Higher order functions
// map - loops and returns an array
// filter - loops and returns an array with matching conditions
// reduce

// MAP
[1,2,3,4].map(number => console.log(number))

let result = [1,2,2,4,5].map(number => number*2)
console.log(result)
const numbers =[2,3,4,5]
numbers.map(number => number*2)
console.log(numbers)

const doubleMap = (numbers) => {
  return numbers.map(number => number * 2)
 }

console.log(doubleMap([1, 2, 3]))

//Filter([1,2,3,4,5,6], 3) 👉 [4, 5, 6]
const filter = (numbers, greaterThan) => {
  let result = []
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number)
    }
  }
  return result
}
console.log(filter([1, 2, 3, 4, 5, 6], 2))
console.log(nums.filter(num => num > 2))

const actors = [
  { name: 'johnny', netWorth: 2000000 },
  { name: 'amber', netWorth: 10 },
  { name: 'matt', netWorth: 170000000 },
  { name: 'brad', netWorth: 300000000 },
  { name: 'leonardo', netWorth: 10000000 },
]

let result1 = actors.filter(actor => actor.netWorth > 10)
console.log(result1)

let names = result1.map(actor=> actor.name).join(', ')
console.log(names)

// Reduce
//Higher Order Function --> which take another function as input 
const nums2 = [1,2,3]
const result3 = nums2.reduce(function(prev, curr){
  return prev + curr
})

console.log(result3)

const result4 = nums.reduce((a, b) => a + b, 0)
console.log(result4)
