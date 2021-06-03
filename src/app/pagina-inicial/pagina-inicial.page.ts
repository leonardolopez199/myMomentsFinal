import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ModalController, NavController, Platform, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { ModalSearchPage } from '../modal-search/modal-search.page';
import { NotificacoesPage } from '../notificacoes/notificacoes.page';
import { ModalVivenciarMomentosPage } from '../modal-vivenciar-momentos/modal-vivenciar-momentos.page';
import { MediaItemComponent } from '../components/media-item/media-item.component';

import { SelectModeService } from '../services/select-mode.service';
import { TabsComponent } from '../components/tabs/tabs.component';
import { Subject } from 'rxjs';

import { Plugins } from '@capacitor/core';
const { App } = Plugins;

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})
export class PaginaInicialPage implements OnInit, AfterViewInit {

  @ViewChildren(MediaItemComponent, { read: MediaItemComponent }) mediaItems: QueryList<MediaItemComponent>;
  @ViewChild(TabsComponent) tabBar: TabsComponent;

  private cardArray: MediaItemComponent[];
  private selectMode: boolean;
  private selectedCounter: number;
  private subjectDelete: Subject<boolean>;
  private toolbarVisibleStatus: any;

  public albuns: any[] = [];

  constructor(private selectModeService: SelectModeService, public modalController: ModalController, public alertController: AlertController, public navRoot: NavController, public toastController: ToastController, public platform: Platform) {
    this.selectMode = false;
    this.selectedCounter = 0;
    this.platform.backButton.subscribeWithPriority(-1, () => {
      App.exitApp();
    });
  }


  ngAfterViewInit(): void {
    this.cardArray = this.mediaItems.toArray();
    this.subjectDelete = new Subject();
    this.toolbarVisibleStatus = document.getElementById("tabP");

    this.subjectDelete.subscribe(obs => {

      this.tabBar.getPresubjectDeleteAction().subscribe(deleteAction => {
        if (this.getSelectCounter() > 0) {
          this.tabBar.apagar();
        } else {
          this.msgError("Selecione pelo menos um momento.");
        }
      });
    });

    this.subjectDelete.subscribe(obs => {

      this.tabBar.getSubjectDeleteAction().subscribe(deleteAction => {
        if (deleteAction) {
          this.selectModeService.removeSelected(this.cardArray);
        }
      });
    });

    this.cardArray.forEach(item => {
      item.getStatus().subscribe(selectMode => {
        if (selectMode) {
          this.selectModeService.enableSelectMode(this.cardArray);
          this.selectMode = true;
          this.toolbarVisibleStatus.removeAttribute("hidden");
          this.subjectDelete.next(true);
        }
      }
      );
      item.getCounterStatus().subscribe(counterStatus => {
        if (counterStatus)
          this.selectedCounter++;
        else
          this.selectedCounter--;
      });
    }
    );
  }


  ngOnInit() {
    this.albuns =
      [
        {
          "hora": "07:54",
          "localizacao": "Viana",
          "src": "../../assets/img/albuns/01.jpg",
          "fotos": {}
        },
        {
          "hora": "18:36",
          "localizacao": "Braga",
          "src": "../../assets/img/albuns/02.jpg",
          "fotos": {}
        },
        {
          "hora": "09:37",
          "localizacao": "Aveiro",
          "src": "../../assets/img/albuns/03.jpg",
          "fotos": {}
        },
        {
          "hora": "15:20",
          "localizacao": "Faro",
          "src": "../../assets/img/albuns/04.jpg",
          "fotos": {}
        },
        {
          "hora": "05:13",
          "localizacao": "Porto",
          "src": "../../assets/img/albuns/05.jpg",
          "fotos": {}
        },
        {
          "hora": "11:48",
          "localizacao": "Lousã",
          "src": "../../assets/img/albuns/06.jpg",
          "fotos": {}
        },
        {
          "hora": "13:56",
          "localizacao": "Sobral",
          "src": "../../assets/img/albuns/07.jpg",
          "fotos": {}
        },
        {
          "hora": "06:05",
          "localizacao": "Oiã",
          "src": "../../assets/img/albuns/08.jpg",
          "fotos": {}
        },
        {
          "hora": "19:18",
          "localizacao": "Rego",
          "src": "../../assets/img/albuns/09.jpg",
          "fotos": {}
        },
        {
          "hora": "22:00",
          "localizacao": "Sosa",
          "src": "../../assets/img/albuns/10.jpg",
          "fotos": {}
        },
        {
          "hora": "21:08",
          "localizacao": "Ouca",
          "src": "../../assets/img/albuns/11.jpg",
          "fotos": {}
        },
        {
          "hora": "23:55",
          "localizacao": "Ereira",
          "src": "../../assets/img/albuns/12.jpg",
          "fotos": {}
        },
        {
          "hora": "14:41",
          "localizacao": "Évora",
          "src": "../../assets/img/albuns/13.jpg",
          "fotos": {}
        },
        {
          "hora": "17:49",
          "localizacao": "Lisboa",
          "src": "../../assets/img/albuns/14.jpg",
          "fotos": {}
        },
        {
          "hora": "20:55",
          "localizacao": "Pombal",
          "src": "../../assets/img/albuns/15.jpg",
          "fotos": {}
        },
        {
          "hora": "07:52",
          "localizacao": "Moita",
          "src": "../../assets/img/albuns/16.jpg",
          "fotos": {}
        }
      ];
  }


  async msgError(msg: string): Promise<void> {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  public isSelectMode(): boolean {
    return this.selectMode;
  }

  public selectAll(): void {
    this.selectModeService.selectAll(this.cardArray);
  }

  public unSelectAll(): void {
    this.selectModeService.unSelectAll(this.cardArray);
  }

  public cancelSelect(): void {
    this.selectModeService.disableSelectMode(this.cardArray);
    this.toolbarVisibleStatus.setAttribute("hidden", true);
    this.setSelectMode(false);
  }

  public setSelectMode(status: boolean) {
    this.selectMode = status;
  }

  public getSelectCounter(): number {
    return this.selectedCounter;
  }

  public getMsgCounter(): string {
    switch (this.getSelectCounter()) {
      case 0:
        return "Selecionar itens";
      case 1:
        return "1 selecionado";
      default:
        return this.getSelectCounter() + " selecionados"
    }
  }

  async presentModalSearch() {
    const modal = await this.modalController.create({
      component: ModalSearchPage,
      cssClass: 'modal-search-css'
    });
    return await modal.present();
  }

  async presentModalNotifica() {
    const modal = await this.modalController.create({
      component: NotificacoesPage,
      cssClass: 'modal-notification-css'
    });
    return await modal.present();
  }

  async presentModalVivenciar() {
    const modal = await this.modalController.create({
      component: ModalVivenciarMomentosPage,
      cssClass: 'modal-vivenciar-css'
    });
    return await modal.present();
  }

  logoff() {
    this.navRoot.navigateRoot('home');
  }

  public getNavRoot(): NavController {
    return this.navRoot;
  }

}