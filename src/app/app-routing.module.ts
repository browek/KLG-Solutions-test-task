import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewInvoiceComponent } from './components/new-invoice/new-invoice.component';
import { PreviewInvoiceComponent } from './components/preview-invoice/preview-invoice.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: NewInvoiceComponent },
      { path: 'preview', component: PreviewInvoiceComponent }
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
