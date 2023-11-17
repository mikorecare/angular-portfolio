export interface ProfileInfo {
    firstName: string;
    middleName?: string;
    lastName?: string;
    location: ILocation;
    skills: ISkills[];
    yearsOfExperience?: number;
    projects?: IProjects;
    certificates:ICertificates[];
  }

  export interface ISkills{
    name:string;
    level: number;
  }
  
  export interface ILocation {
    city: string;
    province: string;
    country: string;
  }
  
  export interface IProjects {
    name: string;
    language: string[];
    description: string;
  }

  export interface ICertificates{
    name: string;
    description:string;
    image: string;
    url:string;
    provider:string;
    date_earned:Date;
    expiration?:Date;
    credential_id?:string;
  }
