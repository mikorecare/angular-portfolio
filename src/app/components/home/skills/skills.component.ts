import { Component } from '@angular/core';
import { Profile, ionicIcons } from 'src/app/data/data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills:any[] = new Profile().skills;
  finalSkills:any[] = []
  ngOnInit():void{
     this.finalSkills = this.skills.map((e)=>{
      let logoName = `logo-${e.name}`
      if(ionicIcons.includes(e.name.toLocaleLowerCase())) 
        {
          return {...e,"logo":logoName.toLocaleLowerCase(),"type":"ionic"}
        }
      else{
        return {...e,"logo":logoName.toLocaleLowerCase(),"type":"none"}
      }
    })
    console.log(this.finalSkills)
  }
}
