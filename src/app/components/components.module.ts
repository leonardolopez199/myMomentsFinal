import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ MediaItemComponent } from './media-item/media-item.component';
import{ TabsComponent } from './tabs/tabs.component';

@NgModule({
    declarations:[MediaItemComponent, TabsComponent],
    exports:[MediaItemComponent, TabsComponent],
    imports: [ CommonModule ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    
})
export class ComponentsModule{}