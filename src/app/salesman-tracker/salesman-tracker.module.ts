import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesmanTrackerPageRoutingModule } from './salesman-tracker-routing.module';

import { SalesmanTrackerPage } from './salesman-tracker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesmanTrackerPageRoutingModule
  ],
  declarations: [SalesmanTrackerPage]
})
export class SalesmanTrackerPageModule {}
