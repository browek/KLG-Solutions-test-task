import { Component, OnInit } from '@angular/core';
import { InvoiceItem } from 'src/app/models/invoice-item.model';
import { CompanyService } from 'src/app/services/company.service';
import { shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-preview-invoice',
  templateUrl: './preview-invoice.component.html',
  styleUrls: ['./preview-invoice.component.scss']
})
export class PreviewInvoiceComponent implements OnInit {

  companyData$ = this.companyService.getCompany().pipe(
    shareReplay(0)
  );
  invoiceData: Array<InvoiceItem> | undefined;

  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    if (history.state.data) {
      this.invoiceData = history.state.data
    }
  }

  getSum(data: InvoiceItem[]): number {
    return data.reduce((prev, curr) => prev + curr.count * curr.price, 0);
  };

}
