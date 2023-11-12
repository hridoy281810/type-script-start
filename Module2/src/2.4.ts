{
    //
    //generic interface
    interface Developer <T,X= null> {
        name: string ;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike? : X
    }
    
    type EmilabWatch = {
        brand: string;
        model: string;
        display:string;
    }
    const poorDeveloper : Developer<EmilabWatch> = {
        name: "Anis",
        computer: {
            brand: "hp",
            model: "eletebook g5 ",
            releaseYear: 2021
        },
        smartWatch:{
            brand: "Xiz",
            model: "yze45",
            display: 'Oled'
        }
    }
    interface AppleWatch {
        brand:string;
model:string;
heartTrack:boolean;
sleepTrack:boolean;
    }
    interface R15Bike {
        model: string,
        engineCapacity:string
    }
    const richDeveloper : Developer<AppleWatch,R15Bike> = {
        name: "Rahman",
        computer: {
            brand: "hp",
            model: "eletebook g7 ",
            releaseYear: 2023
        },
        smartWatch:{
            brand: "apple",
            model: "aple 452",
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: "R15",
            engineCapacity: '100cc'
        },
        }

    
    //
}