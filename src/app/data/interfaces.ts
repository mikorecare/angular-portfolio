export interface ProfileInfo {
    firstName: string;
    middleName?: string;
    lastName: string;
    location: Location;
    skills: string[];
    yearsOfExperience: number;
    projects?: Projects;
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
