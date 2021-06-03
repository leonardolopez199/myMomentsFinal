import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-momento-video',
  templateUrl: './momento-video.page.html',
  styleUrls: ['./momento-video.page.scss'],
})
export class MomentoVideoPage implements OnInit {
  public cards:any=[];

  constructor(public ctrl: NavController) { }

  ngOnInit() {
  }
  
  adicionarMomento(){
    this.cards.push("1");
  }
  finalizarAdicaoMomentos(){
    this.ctrl.pop();
  }
}
