export interface ProfileInfo {
    firstName: string;
    middleName?: string;
    lastName: string;
    location: Location;
    skills: Skills[];
    yearsOfExperience: number;
    projects?: Projects;
  }

  export interface Skills{
    name:string;
    level: number;
  }
  
  export interface Location {
    city: string;
    province: string;
    country: string;
  }
  
  export interface Projects {
    name: string;
    language: string[];
    description: string;
  }
