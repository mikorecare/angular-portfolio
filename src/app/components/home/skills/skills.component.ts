import { Component } from '@angular/core';
import { Profile, ionicIcons, specialIcons } from 'src/app/data/data';
import { Skills } from 'src/app/data/interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills:any[] = new Profile().skills;
  finalSkills:any[] = []
  ngOnInit():void{
     this.finalSkills = this.skills.map((e:Skills)=>{
      let logoName = `logo-${e.name}`
      if(ionicIcons.includes(e.name.toLocaleLowerCase())) 
        {
          return {...e,"logo":logoName.toLocaleLowerCase(),"type":"ionic"}
        }
      else if(specialIcons.includes(e.name.toLocaleLowerCase())){
        return {...e,"logo":'assets/images/'+e.name.toLocaleLowerCase()+'.svg',"type":"special"}
      }
      else{
        return {...e,"logo":e.name.toLocaleLowerCase(),"type":"none"}
      }
    })
    console.log(this.finalSkills)
  }
}
