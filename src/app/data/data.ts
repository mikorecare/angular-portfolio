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
    firstName:string = "Miko"
    middleName?:string = "Viado"
    lastName:string = "Recare"
    location:Location = {
        city: "General Trias",
        province: "Cavite",
        country: "Philippines"
    }
    skills:string[] = ["HTML","CSS","Javascript","React JS","Angular","NodeJS/Express","MongoDB","AWS"]
    yearsOfExperience: number = 2;    
}

