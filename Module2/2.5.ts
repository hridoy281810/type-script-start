{
    // function with generics
    //  const createArray = ()
      const createArray = (param: string) : string[] =>{
  return [param]
}
      const createArrayWithGeneric = <T>(param: T) : T[] =>{
  return [param];
}

  const res1 = createArray('bangladesh')
      const resGeneric = createArrayWithGeneric<string>("Bangladesh")
      const resGenericObj = createArrayWithGeneric<{id: number, name: string}>({id:12, name: 'Mr. Anis'})

    //   -------------------------
      const createArrayWithGenericTuple = <T,Q>(param1: T,param2: Q) : [T,Q]  =>{
  return [param1,param2];
}

  const res10 = createArrayWithGenericTuple<string,number>('bangladesh',45)
      const res11 = createArrayWithGenericTuple<string,{name:string}>("Bangladesh",{name:'ANisur Rahman'})
    
      const addCourseToStudent = <T>(student:T) =>{
        const course = 'Next Level web Development'
        return {
            ...student, course
        }
      }
      const student1 = addCourseToStudent({name: 'Mr Anis', email: 'A@gmail.com', devType: "NLWD"})
      const student2 = addCourseToStudent({name: 'Mr hridoy', email: 'A@gmail.com', hasWacth: "apple wacth"})
    
    //
}