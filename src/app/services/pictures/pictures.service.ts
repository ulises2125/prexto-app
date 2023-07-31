import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Image } from '../../interfaces/images';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  constructor(private http: HttpClient, private router: Router) {}

  getRandomCatsImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${environment.apiUrl}/images`);
  }

  markImageAsFavorite(id: string): Observable<Image> {
    const body = { id: id };
    return this.http.post<Image>(
      `${environment.apiUrl}/images/favorites`,
      body
    );
  }

  getAllFavoritesImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${environment.apiUrl}/images/favorites`);
  }
}
