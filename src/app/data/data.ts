import { ProfileInfo } from "./interfaces"

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
  "postman"
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
      {name:"AWS",level:3.5},
      {name:"NPM",level:4},
      {name:"php",level:3}
    ]
    yearsOfExperience = 2;    
}

export { ProfileInfo }

