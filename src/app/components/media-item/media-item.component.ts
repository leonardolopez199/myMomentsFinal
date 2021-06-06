import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss'],
})
export class MediaItemComponent implements OnInit {

  private active: boolean;
  private longPressActive: boolean;
  private checkBoxVisible: boolean;
  private startTime: number;
  private endTime: number;
  private durationLongPress: number;
  private subject: Subject<boolean>;
  private subjectChecked: Subject<boolean>;
  private event: any;
  public checked: boolean;
  @Input('route') route: string;
  @Input('image') image: string;
  @Input('place') place: string;
  @Input('time') time: string;
  @Input('fotos') fotos: string;
  @Input('titulo') titulo: string;
  @Input('data') data: string;
  @Input('descricao') descricao: string;
  @Input('detalhes') detalhes: string;
  @Input('tags') tags: string;
  @Input('videoItem') video: string;
  @Input('srcv') srcv: string;

  public id: number;
  private checkbox: any;
  public checkExist: any;
  public gamby: any;
  public self: any;

  constructor(private navRoot: NavController, private router: Router) {
    this.longPressActive = false;
    this.checkBoxVisible = false;
    this.active = true;
    this.checked = false;
    this.durationLongPress = 500;
    this.subject = new Subject();
    this.subjectChecked = new Subject();
    this.id = Math.random();
  }

  ngOnInit() {
    // check every 100ms
  }

  ngAfterViewInit(): void {
    //this.checkbox = document.getElementById(this.id.toString());
  }


  public isCheckBoxVisible(): boolean {
    return this.checkBoxVisible;
  }
  public isLongPressActive(): boolean {
    return this.longPressActive;
  }

  public isChecked(): boolean {
    return this.checked;
  }

  public enableCheckBox(): void {
    //  if (!this.checkBoxVisible)
    this.checkBoxVisible = true;
  }

  public checkBoxStatus(status: boolean) {
    this.longPressActive = false;
    if (status != this.checked) {
      this.checked = status;

      // if (this.event != null)
      this.subjectChecked.next(status);
    }

  }

  public disableCheckBox() {
    this.checkBoxVisible = false;
    this.longPressActive = false;
    this.checkBoxStatus(false);
  }

  public startPress(): void {
    this.startTime = Date.now();
  }

  public endPress(): void {
    this.endTime = Date.now();
    this.verifyLongPress();
  }

  public onClick(event?): void {

    if (this.checkBoxVisible) {
      if (this.checked) {
        this.checkBoxStatus(false);
        document.getElementById(this.id.toString()).removeAttribute("checked");
      }
      else {
        this.checkBoxStatus(true);
        document.getElementById(this.id.toString()).setAttribute("checked", "true");
      }
    } else {
      let navigationExtras: NavigationExtras;

      navigationExtras = {
        state: {
          albumName: this.place,
          imageSrc: this.image,
          time: this.time,
          fotos: this.fotos,
          titulo: this.titulo,
          data: this.data,
          descricao: this.descricao,
          detalhes: this.detalhes,
          tags: this.tags,
          video: this.video,
          srcv: this.srcv
        }
      };
      if (this.route)
        this.router.navigate([this.route], navigationExtras);
    }
  }

  public getCounterStatus(): Subject<boolean> {
    return this.subjectChecked;
  }

  public getStatus(): Subject<boolean> {
    return this.subject;
  }

  public inactivate(): void {
    this.active = false;
  }

  public isActive(): boolean {
    return this.active;
  }



  private verifyLongPress(): void {
    if ((this.endTime - this.startTime) >= this.durationLongPress) {
      this.longPressActive = true;
      this.enableCheckBox();
      this.checkBoxStatus(true);
      this.subject.next(true);
    }
  }

}