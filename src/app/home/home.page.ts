import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { IonRouterOutlet, NavController, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private senha: string = "";
  constructor(private screenOrientation: ScreenOrientation, public platform: Platform, public ctrl: NavController, private routerOutlet: IonRouterOutlet) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      App.exitApp();
    });
  }

  ngOnInit() {
    this.senha = "";
    this.clearAllRadio();
    if (this.platform.is('android'))
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_SECONDARY);
  }


  public onClick(btn): void {
    this.senha += "" + btn;
    let radio1 = document.getElementById('radio1');
    let radio2 = document.getElementById('radio2');
    let radio3 = document.getElementById('radio3');
    let radio4 = document.getElementById('radio4');
    let radio5 = document.getElementById('radio5');
    switch (this.senha.length) {
      case 1:
        radio1.setAttribute("value", "r1");
        break;
      case 2:
        radio2.setAttribute("value", "r2");
        break;
      case 3:
        radio3.setAttribute("value", "r3");
        break;
      case 4:
        radio4.setAttribute("value", "r4");
        break;
      case 5:
        radio5.setAttribute("value", "r5");
        this.ctrl.navigateForward('pagina-inicial');
        this.senha = "";
        this.clearAllRadio();
        break;
    }
  }
  public clearAllRadio(): void {
    let radio1 = document.getElementById('radio1');
    let radio2 = document.getElementById('radio2');
    let radio3 = document.getElementById('radio3');
    let radio4 = document.getElementById('radio4');
    let radio5 = document.getElementById('radio5');
    radio1.removeAttribute("value");
    radio2.removeAttribute("value");
    radio3.removeAttribute("value");
    radio4.removeAttribute("value");
    radio5.removeAttribute("value");
  }
  public backspace(): void {
    this.senha = this.senha.substring(0, this.senha.length - 1);
    let radio1 = document.getElementById('radio1');
    let radio2 = document.getElementById('radio2');
    let radio3 = document.getElementById('radio3');
    let radio4 = document.getElementById('radio4');
    switch (this.senha.length) {
      case 0:
        radio1.setAttribute("value", "");
        radio2.setAttribute("value", "");
        radio3.setAttribute("value", "");
        radio4.setAttribute("value", "");
        break;
      case 1:
        radio2.setAttribute("value", "");
        radio3.setAttribute("value", "");
        radio4.setAttribute("value", "");
        break;
      case 2:
        radio3.setAttribute("value", "");
        radio4.setAttribute("value", "");
        break;
      case 3:
        radio4.setAttribute("value", "");
        break;
    }
  }
  public digital(): void {
    this.clearAllRadio();
    this.ctrl.navigateForward('pagina-inicial');
  }
}
