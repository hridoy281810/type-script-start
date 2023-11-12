{
    // generic type
    type GenericArray<T> =  Array<T>
    // const rollNumber: number[] = [3,6,1,5];
    const rollNumber: GenericArray<number>= [3,6,1,5];
    // const mentors : string[] = ['mr. x', 'mr. y', 'mr. z']
    const mentors : GenericArray<string>= ['mr. x', 'mr. y', 'mr. z']

    // const boolArray : boolean[] = [true,false,true];
    const boolArray : GenericArray<boolean>= [true,false,true];
 
const user:GenericArray<{name:string, age: number}>  = [{

    name: 'Anis',
    age: 45,
},
{
    name: 'Rahman',
    age: 24
}
]

    const add = (x: number, y: number) => x+y;
    add(10,20)
 console.log(add)
    //generic tuple

    type GenericTuple<X,Y> = [X,Y] 
     const Human: GenericTuple<string,string> = ["mr. x", "mr. y"]
     const UserWithId: GenericTuple<number,{name:string,email:string}> = [1234,{name:'Anis hoda', email: "anis@gmail.com"}]

    // 
}