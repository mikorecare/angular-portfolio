import { ICertificates, ProfileInfo } from "./interfaces"

export const ionicIcons = [
  "alipay",
  "android",
  "angular",
  "apple",
  "css3",
  "discord",
  "docker",
  "facebook",
  "figma",
  "firebase",
  "github",
  "gitlab",
  "google",
  "playstore",
  "html5",
  "instagram",
  "ionic",
  "javascript",
  "laravel",
  "linkedin",
  "microsoft",
  "nodejs",
  "npm",
  "paypal",
  "python",
  "react",
  "sass",
  "skype",
  "slack",
  "stackoverflow",
  "stencil",
  "tableau",
  "tiktok",
  "tumblr",
  "tux",
  "twitch",
  "twitter",
  "venmo",
  "vercel",
  "vue",
  "web-component",
  "wechat",
  "whatsapp",
  "windows",
  "wordpress",
  "yahoo",
  "youtube"
]

export const specialIcons = [
  "mongodb",
  "mongoose",
  "mysql",
  "express",
  "postman",
  "typescript"
]
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
      {name:"CSS3",level:5},
      {name:"Javascript",level:5},
      {name:"Typescript",level:5},
      {name:"Bootstrap",level:5},
      {name:"Github",level:4},
      {name:"AWS",level:3.5},
      {name:"NPM",level:4},
      {name:"Php",level:3},
    ]
    certificates = [
      {
        name: "Learning MEAN Stack by Building Real world Application Specialization",
        description:"Build fully functional web apps using MEAN stack. Acquire comprehensive skills in MongoDB, Express.js, Angular, and Node.js to design, develop, and deploy real-world high-performance web applications. ",
        image: "assets/images/HY6U4NZB6LT3.jpg",
        url:"https://www.coursera.org/account/accomplishments/specialization/certificate/HY6U4NZB6LT3",
        provider:"Coursera",
        date_earned:new Date("11-15-23"),
        expiration:new Date("11-23-23"),
        credential_id:"HY6U4NZB6LT3"
      },
      {
        name: "Building RESTful APIs with Node.js and Express",
        description:"This course is part of the Learning MEAN Stack by Building Real world Application Specialization",
        image: "assets/images/F6PG6WR8LDMS.jpg",
        url:"https://www.coursera.org/account/accomplishments/certificate/F6PG6WR8LDMS",
        provider:"Coursera",
        date_earned:new Date("11-4-23"),
        expiration:new Date("11-23-23"),
        credential_id:"F6PG6WR8LDMS"
      },
      {
        name: "Frontend Development using Angular",
        description:"This course is part of the Learning MEAN Stack by Building Real world Application Specialization",
        image: "assets/images/RBPN4P2E9QRZ.jpg",
        url:"https://www.coursera.org/account/accomplishments/certificate/RBPN4P2E9QRZ",
        provider:"Coursera",
        date_earned:new Date("11-4-23"),
        expiration:new Date("11-23-23"),
        credential_id:"RBPN4P2E9QRZ"
      },
      {
        name: "Building a Complete MEAN Stack Application",
        description:"This course is part of the Learning MEAN Stack by Building Real world Application Specialization",
        image: "assets/images/5ZA85SY9NUWP.jpg",
        url:"https://www.coursera.org/account/accomplishments/certificate/5ZA85SY9NUWP",
        provider:"Coursera",
        date_earned:new Date("11-4-23"),
        expiration:new Date("11-23-23"),
        credential_id:"5ZA85SY9NUWP"
      },
      {
        name: " Angular7 for Advanced Level",
        description:"Hi all, I have successfully completed the \" Angular7 for Advanced Level\" course offered by Great Learning Academy. #GreatLearningAcademy #greatlearning #glacertificate",
        image: "assets/images/ZWGBTPCZ.jpg",
        url:"https://verify.mygreatlearning.com/verify/ZWGBTPCZ",
        provider:"Great Learning",
        date_earned:new Date("10-4-23"),
        expiration:new Date("11-23-23"),
        credential_id:"ZWGBTPCZ"
      },
      {
        name: " Angular7 for Intermediate Level",
        description:"Hi all, I have successfully completed the \" Angular7 for Intermediate Level\" course offered by Great Learning Academy. #GreatLearningAcademy #greatlearning #glacertificate",
        image: "assets/images/AMEQPVSD.jpg",
        url:"https://verify.mygreatlearning.com/verify/AMEQPVSD",
        provider:"Great Learning",
        date_earned:new Date("10-4-23"),
        expiration:new Date("11-23-23"),
        credential_id:"AMEQPVSD"
      },
      {
        name: " Angular7 for Beginners",
        description:"Hi all, I have successfully completed the \" Angular7 for Beginners\" course offered by Great Learning Academy. #GreatLearningAcademy #greatlearning #glacertificate",
        image: "assets/images/IWCUSLNR.jpg",
        url:"https://verify.mygreatlearning.com/verify/IWCUSLNR",
        provider:"Great Learning",
        date_earned:new Date("10-4-23"),
        expiration:new Date("11-23-23"),
        credential_id:"IWCUSLNR"
      },
    ]
    yearsOfExperience = 2;    
}



export { ProfileInfo }

