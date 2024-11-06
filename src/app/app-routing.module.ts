import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesmanTrackerPage } from './salesman-tracker/salesman-tracker.page';

const routes: Routes = [
  {
    path: '',
    component: SalesmanTrackerPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }