{
    // generic constraint with keyof operator
    type Vehicle = {
        bike:string;
        car : string;
        ship:string
    }
    type Owner = "bike" | "car" | "ship" //manually
    type Owner2 = keyof Vehicle
    
  const getPropartyValue = <X, Y extends keyof X> (obj: X,key:Y) {
  return obj[key];
    }
    const user = {
        name: 'mr. Anis',
        age: 27,
        address: "dhaka"
    }
    const car = {
       model: 'toyota 100',
       year: 200
    }
    
const result = getPropartyValue(user,'name')

    
    // 
}