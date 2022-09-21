import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbPICKSPageRoutingModule } from './ub-picks-routing.module';

import { UbPICKSPage } from './ub-picks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbPICKSPageRoutingModule
  ],
  declarations: [UbPICKSPage]
})
export class UbPICKSPageModule {}
