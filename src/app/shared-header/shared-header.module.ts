import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RootPage } from './root/root.page';
import { ChildPage } from './child/child.page';
import { SharedHeaderComponent } from './shared-header/shared-header.component';

import { SharedHeaderRoutingModule } from './shared-header-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedHeaderRoutingModule
  ],
  declarations: [RootPage, ChildPage, SharedHeaderComponent]
})
export class SharedHeaderModule {}
