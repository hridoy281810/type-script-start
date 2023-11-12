// destructuring
{
    //object destructuring
    const user = {
        id:23,
        name:{
        firstName: "Aniur",
        middleName: "Abedin",
        lastName: "Rahman",
        },
        contactNumber:+88801724728819,
        address: "shakhua"
        }
        // now destructuring
    const {contactNumber, name: {middleName}} = user
//   array   destructuring
   const myFriend = ["Borhan", "Siam", "Badda", "mahin","Akash"]
    const [,,bestFriend,...rest] = myFriend 
}