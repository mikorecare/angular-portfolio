import { ProfileInfo } from "./interfaces"

export class Profile implements ProfileInfo{
    firstName = "Miko"
    middleName = "Viado"
    lastName = "Recare"
    location = {
        city: "General Trias",
        province: "Cavite",
        country: "Philippines"
    }
    skills = [
      {name:"MongoDB",level:5},
      {name:"Angular",level:5},
      {name:"Express",level:5},
      {name:"NodeJS",level:5},
      {name:"HTML5",level:5},
      {name:"CSS",level:5},
      {name:"Javascript",level:5},
      {name:"AWS",level:3.5}
    ]
    yearsOfExperience = 2;    
}

export { ProfileInfo }

