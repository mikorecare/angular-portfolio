import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { aboutPic } from 'src/assets/images/about.pic';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  imgSrc = aboutPic
  @ViewChild('myCanvas') myCanvas!: ElementRef;

  newImage = new Image(); // Create a new image object

  constructor() {
    this.newImage.onload = () => {
      this.drawToFit(); 
    };
  }

  ngAfterViewInit(): void {
    // Set the source of the image (replace 'this.imgSrc' with your image source)
    this.newImage.src = this.imgSrc;
  }

  drawToFit(): void {
    const canvasElement: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvasElement.getContext('2d');

    const scaledWidth = this.newImage.width * 0.5;
    const scaledHeight = this.newImage.height * 0.5;
    // Set the canvas size to max-content
    canvasElement.height = scaledHeight;
    canvasElement.width = scaledWidth;

   


    // Calculate the scaled dimensions


    // Draw the image to fit inside the canvas
    context?.drawImage(this.newImage, 0, 0, scaledWidth, scaledHeight);
  }
}
