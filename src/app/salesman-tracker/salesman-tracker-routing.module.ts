import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesmanTrackerPage } from './salesman-tracker.page';

const routes: Routes = [
  {
    path: '',
    component: SalesmanTrackerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesmanTrackerPageRoutingModule {}
