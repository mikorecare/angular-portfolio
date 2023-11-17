import { Component } from '@angular/core';
import { Profile, ionicIcons, specialIcons } from 'src/app/data/data';
import { ISkills } from 'src/app/data/interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills:any[] = new Profile().skills;
  finalSkills:any[] = []
  ngOnInit():void{
     this.finalSkills = this.skills.map((e:ISkills)=>{
      
      let logoName = `logo-${e.name}`
      if(ionicIcons.includes(e.name.toLocaleLowerCase())) 
        {
          return {...e,"logo":logoName.toLocaleLowerCase(),"type":"ionic","color":this.getRandomColor()}
        }
      else if(specialIcons.includes(e.name.toLocaleLowerCase())){
        return {...e,"logo":'assets/images/'+e.name.toLocaleLowerCase()+'.svg',"type":"special","color":this.getRandomColor()}
      }
      else{
        return {...e,"logo":e.name.toLocaleLowerCase(),"type":"none","color":this.getRandomColor()}
      }
    })
    console.log(this.finalSkills)
  }

  calculateProgressWidth(level: number): number {
    const maxLevel = 5;
    return (level / maxLevel) * 100;
  }

  getProgressBarColor(level: number): string {
    const hue = (1 - level / 5) * 120; // Adjust the hue range (0 to 60) based on the level
    return `hsl(${120 - hue}, 100%, 50%)`;
  }

  getRandomColor(): string {
    const letters = '56789ABCDE';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
  }
}
