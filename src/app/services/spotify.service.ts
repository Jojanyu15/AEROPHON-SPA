import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { access } from 'fs';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  public getAccessToken(): Promise<any> {
    return this.http
      .get(
        'https://apn-crew-spootybackend.herokuapp.com/spotify/253fcdc08f8d4e9ba5e100ef7a89cb7d/dd9ce5ca09d447d59f1f394995e09177'
      )
      .toPromise();
  }

  public getArtist(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.getAccessToken().then((at) => {
        const headers = new HttpHeaders({
          // tslint:disable-next-line: no-string-literal
          Authorization: 'Bearer ' + at['access_token'],
        });
        this.http
          .get('https://api.spotify.com/v1/artists/6nfNQvqechLUJaFHYAciep/', {
            headers,
          })
          .subscribe((items) => {
            resolve(items);
          });
      });
    });
  }
  public getTopTracks(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.getAccessToken().then((at) => {
        const headers = new HttpHeaders({
          // tslint:disable-next-line: no-string-literal
          Authorization: 'Bearer ' + at['access_token'],
        });
        this.http
          .get(
            'https://api.spotify.com/v1/artists/6nfNQvqechLUJaFHYAciep/top-tracks?market=CO&limit=6',
            {
              headers,
            }
          )
          .subscribe((r) => {
            // tslint:disable-next-line: no-string-literal
            resolve(r['tracks']);
          });
      });
    });
  }
}
