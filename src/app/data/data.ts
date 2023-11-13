export  interface ProfileInfo{
    firstName:string;
    middleName?:string;
    lastName:string;
    location:object;
    skills:string[];
}

export class Profile implements ProfileInfo{
    firstName:string = "Miko"
    middleName?:string = "Viado"
    lastName:string = "Recare"
    location:object = {
        city: "General Trias",
        province: "Cavite",
        country: "Philippines"
    }
    skills:string[] = ["HTML","CSS","Javascript","React JS","Angular","NodeJS/Express","MongoDB","AWS"]    
}

