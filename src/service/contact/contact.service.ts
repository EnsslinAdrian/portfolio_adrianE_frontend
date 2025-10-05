import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendContactForm(formData: any) {
    return this.http.post('https://portfolio.adrianensslin.de/api/send_email/', formData).pipe(
      map(response => response),
      catchError(error => { throw error; })
    );
  }

}
