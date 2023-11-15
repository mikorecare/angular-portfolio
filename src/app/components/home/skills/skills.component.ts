import { Component } from '@angular/core';
import { Profile } from 'src/app/data/data';

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
      return {...e,"logo":logoName.toLocaleLowerCase()}
    })
    console.log(this.finalSkills);
  }
}
