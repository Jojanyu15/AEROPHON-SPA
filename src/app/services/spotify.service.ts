import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  public getArtist(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA_XBrrJWU-nWZmLByse8tfDLGDmLWVOiPHU6ObzdD4hRm_IwUaZ--_yBQAbzgaI9yHNl-Se8SrOc4tOKs',
    });

    return this.http
      .get(
        'https://api.spotify.com/v1/artists/6nfNQvqechLUJaFHYAciep/',
        { headers }
      )
      .pipe(
        map((items) => {
          // tslint:disable-next-line: no-string-literal
          return items;
        })
      );
  }

  public getTopTracks(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA_XBrrJWU-nWZmLByse8tfDLGDmLWVOiPHU6ObzdD4hRm_IwUaZ--_yBQAbzgaI9yHNl-Se8SrOc4tOKs',
    });

    return this.http
      .get(
        'https://api.spotify.com/v1/artists/6nfNQvqechLUJaFHYAciep/top-tracks?market=CO&limit=6',
        { headers }
      )
      .pipe(
        map((items) => {
          // tslint:disable-next-line: no-string-literal
          return items['tracks'];
        })
      );
  }
}
