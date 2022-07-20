import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable({
    providedIn: 'root',
})
export class CompanyService {
    constructor(private httpClient: HttpClient) {}
    getCompany = (): Observable<Company> => {
        return this.httpClient.get<Company>('assets/company.json');
    };
}
