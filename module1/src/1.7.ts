{
// spread operator
// destructruing
const bros1:string[] = ["Mohammad","Anisur","Rahman"];
const bros2: string[] = ["Mohammad","Hridoy","Khan"]
bros1.push(...bros2)

const mentors1 ={
prisma: 'Imroz',
next:'rihad',
React: 'Anis'
}
const mentors2 ={
TypeScript: 'Akash',
Redux:'rihad',
Awas: 'Robbin'
}
const mentorList = {
    ...mentors1,
    ...mentors2,
}
//Learn rest operator
const greetFriend = (friend1:string,friend2:string,friend3:string)=>{
    console.log(`hi ${friend1} ${friend2} ${friend3} `)
}
}


