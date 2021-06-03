import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaItemComponent } from '../components/media-item/media-item.component';

@Injectable({
  providedIn: 'root'
})
export class SelectModeService implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  public enableSelectMode(items: MediaItemComponent[]) {
    items.forEach(item => item.enableCheckBox());
  }

  public selectAll(items: MediaItemComponent[]): void {
    items.forEach(item => item.checkBoxStatus(true));
  }

  public unSelectAll(items: MediaItemComponent[]): void {
    items.forEach(item => item.checkBoxStatus(false));
  }


  public removeSelected(items: MediaItemComponent[]): void {
    items.forEach(item => {
      if (item.isChecked()) {
        item.inactivate();
        item.checkBoxStatus(false);
      }

    });
  }

  public disableSelectMode(items: MediaItemComponent[]) {
    items.forEach(item => item.disableCheckBox());
  }

}