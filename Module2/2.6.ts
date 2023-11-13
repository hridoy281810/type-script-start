{
    //constant 
    const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student:T) =>{
        const course = 'Next Level web Development'
        return {
            ...student, course
        }
      }

      const student3 = addCourseToStudent({id: 1, name: 'Mr Anis', email: 'A@gmail.com',hody: "hody"})
      const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({id: 1, name: 'Mr Anis', email: 'A@gmail.com', devType: "NLWD"})

      const student2 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        hasWacth: string;
    }>({id: 6,name: 'Mr hridoy', email: 'Ab@gmail.com', hasWacth: "apple wacth"})
    // 
}