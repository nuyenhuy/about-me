import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Album} from '../common/interface';



@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private dbPath = 'assets/db/db.json';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<{ albums: Album[] }>(this.dbPath).pipe(
      map(response => response.albums)
    );
  }
}
