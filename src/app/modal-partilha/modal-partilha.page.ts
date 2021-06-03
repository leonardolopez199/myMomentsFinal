import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { R3TargetBinder } from '@angular/compiler';


@Component({
  selector: 'app-modal-partilha',
  templateUrl: './modal-partilha.page.html',
  styleUrls: ['./modal-partilha.page.scss'],
})
export class ModalPartilhaPage implements OnInit {

  public searchbar: any;
  public items: any;
  public amigos: any;
public buttonColor: string = "primary";

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.searchbar = document.querySelector('ion-searchbar');
    this.searchbar.addEventListener('ionInput', this.handleInput);

    this.http.get('https://randomuser.me/api/?results=15').subscribe(data=>{
      this.amigos=data['results'];      
    })


  }

  handleInput(event) {
    this.items = Array.from(document.querySelector('ion-list').children);
    const query = event.target.value.toLowerCase();    
    requestAnimationFrame(() => {
      this.items.forEach(item => {        
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        item.style.display = shouldShow ? 'block' : 'none';
      });
    });
  }

  partilhaAmiguinho(event) {
    event.target.setAttribute("disabled", true);
  }
}
