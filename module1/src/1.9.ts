{
//  Type Alias 
type Student = {
    name: string,
    age: number,
    gender: string,
    contactNo: string,
    add: string
};
const student1: Student = {
    name: "Anis",
    age: 24,
    gender:"male",
    contactNo: "+880174545231",
    add: "dhaka"
};
const student2:Student = {
    name: "Hridoy",
    age: 26,
    gender:"male",
    contactNo:'',
    add: "mymensingh"
};
const student3: Student = {
    name: "Hridoy",
    age: 26,
    gender:"male",
    contactNo:'',
    add: "mymensingh"
};
type UserName = string;
type IsAdmin = boolean;
const userName: UserName = "Anis";
const isAdmin: IsAdmin = true;
type Add = (num1: number,num2: number) => number;

const add: Add = (num1,num2) => num1 + num2;

}