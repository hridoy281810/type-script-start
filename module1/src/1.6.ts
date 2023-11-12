{// Learning function 
// Normal function
// Arrow Function
function add(num1:number,num2: number=10):number{
    return num1 + num2;
}
add(2,'2')
const addArrow = (num1:number,num2:number):number=> num1 + num2
// object --> function --> method
const poorUser = {

    name: 'Anis',
    balance: 0,
    addBalance(balance:number):string{
       return `My new balance is: ${this.balance+ balance }`  
    }
}
// callback function 
const array: number[ ]= [1,4,10]
const newArray:number [] = array.map( (arr:number):number => arr* arr)

}