import { Component } from '@angular/core';
import { Profile, ProfileInfo } from 'src/app/data/data';
import { mainPic } from 'src/assets/images/main.pic';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
info:any = new Profile()
imageSrc = mainPic
  constructor(){
  }

  ngOnInit(){
  }
}
