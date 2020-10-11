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
    this.ss.getTopTracks().subscribe((response) => {
      this.toptracks = response;
      this.ss.getArtist().subscribe((artist) => {
        console.log(artist);
        console.log(response);
        this.artista = artist;
        this.loading = false;
      });
    });
  }

  ngOnInit(): void {}
}
