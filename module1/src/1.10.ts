{
    // union types
//     type FrontendDeveloper = 'fakibazDeveloper' | 'joniorDeveloper'
//    type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

//    type Developer = FrontendDeveloper | FullstackDeveloper

 
//        const newDeveloper : FrontendDeveloper = 'joniorDeveloper'

//        type User = {
//         name: string;
//         email?: string;
//         gender: "male" | "femake";
//         bloodGroup: "O+" | "A+" | "AB+"
//        }
//        const user1 = {
//           name:'Anis',
//           gender: 'male',
//           bloodGroup: 'A+' 
//        }
type FrontendDeveloper = {
    skills: string[],
    designation1: "Frontend Developer"
}
type BackendDeveloper= {
    skills: string[],
    designation2: "Backend Developer"
}
type FullstackDeveloper = FrontendDeveloper & BackendDeveloper
const fullstackDeveloper : FullstackDeveloper = {
    skills: ["React","Node","mongodb"],
    designation1:"Frontend Developer",
    designation2: "Backend Developer"
}


}   