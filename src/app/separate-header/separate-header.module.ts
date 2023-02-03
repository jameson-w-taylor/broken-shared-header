import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RootPage } from './root/root.page';
import { ChildPage } from './child/child.page';

import { SeparateHeaderRoutingModule } from './separate-header-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeparateHeaderRoutingModule
  ],
  declarations: [RootPage, ChildPage]
})
export class SeparateHeaderModule {}
