import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { MediaItemComponent } from '../components/media-item/media-item.component';

import { ModalCompraEfetuadaPage } from '../modal-compra-efetuada/modal-compra-efetuada.page';
import { SelectModeService } from '../services/select-mode.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})
export class ComprarPage implements OnInit {

  @ViewChildren(MediaItemComponent, { read: MediaItemComponent }) mediaItems: QueryList<MediaItemComponent>;
  private cardArray: MediaItemComponent[];
  private selectMode: boolean;
  private selectedCounter: number;

  constructor(private selectModeService: SelectModeService, public ctrl: NavController, public modalController: ModalController, public toastController: ToastController) {
    this.selectMode = false;
    this.selectedCounter = 0;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.cardArray = this.mediaItems.toArray();

    this.cardArray.forEach(item => {
      item.getStatus().subscribe(selectMode => {
        this.selectModeService.enableSelectMode(this.cardArray);
        if (selectMode) {
          this.selectMode = true;

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

  public remove(): void {
    this.selectModeService.removeSelected(this.cardArray);
    const aliveItens: number = this.cardArray.filter(item => item.isActive()).length;
    if (aliveItens == 0) {
      this.ctrl.navigateForward("pagina-inicial");
      this.msgError("Sem momentos para revelar...");
    }
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



  retirarMomentos() {
    this.ctrl.navigateForward('momento-video');
  }

  nextStep() {
    this.ctrl.navigateForward('dados-encomenda');
  }

  async fastCheckOut() {
    const modal = await this.modalController.create({
      component: ModalCompraEfetuadaPage,
      cssClass: 'modal-fim-compra-css'
    });
    return await modal.present();
  }

}
