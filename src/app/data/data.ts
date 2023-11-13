export  interface ProfileInfo{
    firstName:string;
    middleName?:string;
    lastName:string;
    location:Location;
    skills:string[];
    yearsOfExperience:number;
    projects?:Projects;
}

export interface Location{
    city:string;
    province:string;
    country:string;
}

export interface Projects{
    name:string,
    language: string[],
    description: string;
}

export class Profile implements ProfileInfo{
    firstName = "Miko"
    middleName = "Viado"
    lastName = "Recare"
    location = {
        city: "General Trias",
        province: "Cavite",
        country: "Philippines"
    }
    skills = ["HTML","CSS","Javascript","React JS","Angular","NodeJS/Express","MongoDB","AWS"]
    yearsOfExperience = 2;    
}

