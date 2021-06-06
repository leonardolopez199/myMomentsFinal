import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { MediaItemComponent } from '../components/media-item/media-item.component';
import { SelectModeService } from '../services/select-mode.service';

@Component({
  selector: 'app-momento-video',
  templateUrl: './momento-video.page.html',
  styleUrls: ['./momento-video.page.scss'],
})
export class MomentoVideoPage implements OnInit {
  public cards: any[] = [];
  public thumbs: any[] = [];
  public srcv: string;
  private index: number = -1;

  @ViewChildren(MediaItemComponent, { read: MediaItemComponent }) mediaItems: QueryList<MediaItemComponent>;
  private cardArray: MediaItemComponent[];
  private selectMode: boolean;
  private selectedCounter: number;

  constructor(public ctrl: NavController, private router: Router, public toastController: ToastController, private selectModeService: SelectModeService) {
    this.thumbs = JSON.parse(this.router.getCurrentNavigation().extras.state.fotos);
    this.srcv = this.router.getCurrentNavigation().extras.state.srcv;
    this.selectMode = false;
    this.selectedCounter = 0;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.mediaItems.changes.subscribe(() => {
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
    });
  }

  public remove(): void {
    this.selectModeService.removeSelected(this.cardArray);
    const aliveItens: number = this.cardArray.filter(item => item.isActive()).length;
    if (aliveItens == 0) {
      this.ctrl.navigateForward("comprar");
      this.msgError("Sem momentos para revelar neste vídeo.");
    }
  }
  async msgError(msg: string): Promise<void> {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  private getIndex(): number {
    this.index++;
    if (this.index > this.thumbs.length - 1)
      this.index = 0;
    return this.index;
  }
  adicionarMomento() {
    this.cards.push(this.thumbs[this.getIndex()]);
  }
  finalizarAdicaoMomentos() {
    this.ctrl.pop();
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

  public setSelectMode(status: boolean) {
    this.selectMode = status;
  }

  public getSelectCounter(): number {
    return this.selectedCounter;
  }
}
