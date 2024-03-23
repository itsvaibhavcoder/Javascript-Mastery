// select a random element from an array
// randomFruit([1, 2]) 👉 2
// randomFruit([1, 2]) 👉 1
const randomFruit = (numbers) => {
  const randomNumber = Math.floor(Math.random() * numbers.length)

  console.log(randomNumber)
  return numbers[randomNumber]
}
console.log(randomFruit(numbers))
