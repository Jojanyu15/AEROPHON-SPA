import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  toptracks: any = [];
  artista: any = [];
  loading: boolean;

  constructor(private ss: SpotifyService) {
    this.loading = true;
    this.ss.getTopTracks().then((res) => {
      this.toptracks = res;
      this.ss.getArtist().then((res2) => {
        this.artista = res2;
        this.loading = false;
      });
    });
  }

  ngOnInit(): void {}
}
