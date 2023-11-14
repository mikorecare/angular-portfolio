import { Component } from '@angular/core';
import { Profile, ProfileInfo } from 'src/app/data/data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
info:ProfileInfo = new Profile()
src:string = "logo-angular"
  constructor(){
  }

  ngOnInit(){
    
  }
}
