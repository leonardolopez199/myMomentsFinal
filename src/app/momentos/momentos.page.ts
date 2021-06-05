import { Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { MediaItemComponent } from '../components/media-item/media-item.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectModeService } from '../services/select-mode.service';
import { TabsComponent } from '../components/tabs/tabs.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
})
export class MomentosPage implements OnInit {

  @ViewChildren(MediaItemComponent, { read: MediaItemComponent }) mediaItems: QueryList<MediaItemComponent>;
  @ViewChild(TabsComponent) tabBar: TabsComponent;



  private cardArray: MediaItemComponent[];
  private selectMode: boolean;
  private selectedCounter: number;
  private subjectDelete: Subject<boolean>;
  public toolbarVisibleStatus: any;
  public albumName: string;
  public sliceStart: number;
  public sliceEnd: number;
  public pictures: any[] = [];
  public albuns: any[] = [];


  constructor(private selectModeService: SelectModeService, public navRoot: NavController, public toastController: ToastController, private route: ActivatedRoute, private router: Router) {
    this.selectMode = false;
    this.selectedCounter = 0;
    if (this.router.getCurrentNavigation().extras.state) {
      this.albumName = this.router.getCurrentNavigation().extras.state.albumName;
      this.sliceStart = this.router.getCurrentNavigation().extras.state.sliceStart;
      this.sliceEnd = this.router.getCurrentNavigation().extras.state.sliceEnd;
      this.albuns = JSON.parse(this.router.getCurrentNavigation().extras.state.fotos);
    }
  }

  ngOnInit() {


  }

  async msgError(msg: string): Promise<void> {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  ngAfterViewInit(): void {
    this.cardArray = this.mediaItems.toArray();
    this.subjectDelete = new Subject();
    this.toolbarVisibleStatus = document.getElementById("tab");


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
          if (this.getTotalActive() == 0)
            this.navRoot.navigateForward("pagina-inicial");
        }
      });
    });

    this.cardArray.forEach(item => {
      item.getStatus().subscribe(selectMode => {
        this.selectModeService.enableSelectMode(this.cardArray);
        this.selectMode = true;
        this.toolbarVisibleStatus.removeAttribute("hidden");
        this.subjectDelete.next(true);
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

  private getTotalActive(): number {
    return this.cardArray.filter(iten => iten.isActive()).length;
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
  public getNavRoot(): NavController {
    return this.navRoot;
  }


}