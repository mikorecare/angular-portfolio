import { Component } from '@angular/core';
import { Profile } from 'src/app/data/data';
import { ICertificates } from 'src/app/data/interfaces';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  certificates:ICertificates[] = new Profile().certificates;


  ngOnInit():void{

  }
}
