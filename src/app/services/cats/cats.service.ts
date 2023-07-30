import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cat } from 'src/app/interfaces/cats';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  constructor(private http: HttpClient, private router: Router) {}

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${environment.apiUrl}/cats`);
  }
  getCatById(id: string): Observable<Cat> {
    return this.http.get<Cat>(`${environment.apiUrl}/cats/${id}`);
  }
  createCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(`${environment.apiUrl}/cats`, cat).pipe(
      tap(() => {
        this.router.navigate(['/module-cats']);
      })
    );
  }
  updateCat(id: string, cat: Cat): Observable<Cat> {
    return this.http.put<Cat>(`${environment.apiUrl}/cats/${id}`, cat).pipe(
      tap(() => {
        this.router.navigate(['/module-cats']);
      })
    );
  }
  deleteCat(id: string): Observable<Cat[]> {
    return this.http
      .delete<Cat>(`${environment.apiUrl}/cats/${id}`)
      .pipe(switchMap(() => this.getCats()));
  }
}
