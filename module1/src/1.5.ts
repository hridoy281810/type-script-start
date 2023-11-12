// reference type --> object 
const user: {
    readonly companyName: string,// readonly not update this data 
    firstName: string,
    middleName?: string, // optional info 
    lastName:  string,
    isMarried: boolean
} = {
    companyName: 'Aftab Group',
    firstName : 'Mohammad',
    middleName: 'Anisur',
    lastName: 'Rahman',
    isMarried: false
}
// user.companyName= ('ans')