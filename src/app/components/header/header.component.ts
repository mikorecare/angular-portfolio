import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  status = true;
    addToggle():boolean{
     return this.status = !this.status;       
    }

}
