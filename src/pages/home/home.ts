import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  filename: any = "'../../assets/imgs/dragon.jpeg'";
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {

  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  delete(){

  }
}
