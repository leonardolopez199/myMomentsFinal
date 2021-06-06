import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-detalhe-momento',
  templateUrl: './modal-detalhe-momento.page.html',
  styleUrls: ['./modal-detalhe-momento.page.scss'],
})
export class ModalDetalheMomentoPage implements OnInit {

  public description: string;
  public date: string;
  public details: string;
  public time: string;
  public title: string;
  public tags: string[];

  constructor(private navParan: NavParams) {
  }

  ngOnInit() {
    this.description = this.navParan.data.description;
    this.date = this.navParan.data.date;
    this.details = this.navParan.data.details;
    this.time = this.navParan.data.time;
    this.title = this.navParan.data.title;
    this.tags = this.navParan.data.tags;
  }

}
