import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appParallaxHeader]'
})
export class ParallaxHeaderDirective {
  header: any;
  headerHeigth: number;
  moveImage: number;
  scalImage: number;
  constructor(public el: ElementRef, public render: Renderer2,private domCtrl: DomController) { }

  ngOnInit(){
    let content = this.el.nativeElement;
    this.header = content.getElementsByClassName('parallax-image')[0];
    console.log(this.header);
    this.domCtrl.read(()=>{
      this.headerHeigth = this.header.clientHeight;
      console.log('height', this.headerHeigth);
    });
  }
}
