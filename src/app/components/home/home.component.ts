import { Component } from '@angular/core';
import { Profile, ProfileInfo } from 'src/app/data/data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
info:any = new Profile()

  constructor(){
  }

  ngOnInit(){
    console.log(this.info)
  }
}
