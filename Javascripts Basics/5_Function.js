//Functions

 function sayMyname(){
    console.log("Vaibhav");
}

 we must call function for its execution

 sayMyname();
dynamic function

 function sayMyname(name){
   console.log(name);

}
let name = "Vaibhav";
sayMyname(name);

 function  greeting(Name){
   greet = 'Hi ' + Name + ' nice to meet you !';
   console.log(greet);
 }

greeting('Vaibhav');

// Using template literals'

function  greeting(Name){
    greet = `Hi ${Name} nice to meet you !`
    console.log(greet);
}
 greeting('Vaibhav');
 
 function sum(a,b){
    return a+b;
}

res = sum(5,6);
console.log(res);

function sum(a,b){
   console.log(a+b);
}
res = sum(5,6);
console.log(res);  // Undefined bz res cant store console.log(a+b)

function total_amount(food, tip){
tip_percentage = tip/100;
 total_tip = tip_percentage*food;
 total = food + total_tip;
 return total;
 }

 res = total_amount(500, 100);
console.log(res)


// Arrow function with explicit return

const sum =(a,b)=>{
    return a+b;
}
num2 = sum(5,6);
console.log(num2);

//Arrow Function with implicit return
const sum2 = (a,b)=> a+b;
