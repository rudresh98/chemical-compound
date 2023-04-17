import { Injectable } from '@angular/core';
import { env } from '../environment/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ChemicalApiService {
  constructor(private http: HttpClient) {}
  public getChemicalList(): Observable<any> {
    return this.http.get(env.URL + 'chemicalcompunds');
  }
  public getChemicalListDetails(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get(env.URL + 'chemicalcompundsdetails', { params });
  }
  public getChemicalEdit(payload: any): Observable<any> {
    return this.http.patch(env.URL + 'editchecmicalcompounddetails', payload);
  }
}
