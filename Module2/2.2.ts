{
    // interface
    type User1 = {
        name:string;
        age:number
    };
    interface User2 {
        name:string;
        age:number;
    }
    type UserWithRole1 = User1 & {role: string};
    interface UserWithRole2 extends User1 {
        role: string
    }
   const user1 : UserWithRole2={
    name: "anis",
    age: 55,
    role: "It Executive"
   } 

   type rollNumber = number;
//    js --> object, array -> object function -> object
type Roll = number[];
interface Roll2 {

}
const rollNumber1: Roll= [1,2,4,5,7];
    type Add =(num1: number, num2: number)=> number
    interface Add2 {
        (num1: number,num2: number) : number
    }
    const add: Add2 = (num1, num2) => num1 + num2
    //
}