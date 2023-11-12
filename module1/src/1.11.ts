{
    //  ternary operator || optional chaining || nullish coalescing operator
    const age : number = 19 ;
    if( age >= 18){
        console.log('adult');
    }else{
        console.log("not adult");
    }
    const isAdult = age >= 18 ? 'adult' : 'not adult'
    console.log({isAdult});
    // nullish coalescing operator
    // null/ undefined  ---> decision making
    const isAuthenticated = '';
    const result1 =  isAuthenticated ?? "Guest"; //nullish coalescing operator default value st korar jonno 
    const result2 = isAuthenticated ? isAuthenticated: "Guest"
    console.log({result1},{result2})

//  optional chaining

type User = {
    name: string;
    address: {
        city: string;
        road: string;
        presentaddress: string;
        permanentAddress?: string;
    }
}
const user: User = {
    name:"Anis",
    address:{
        city: 'ctg',
        road: 'amtoli',
        presentaddress: 'dhaka',

    }
}

const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address"
  console.log({permanentAddress})
}