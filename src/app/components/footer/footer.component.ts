import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public redirect(opt: number) {
    switch (opt) {
      case 0:
        window.location.href = 'https://www.facebook.com/aerophon/';
        break;
      case 1:
        window.location.href = 'https://www.instagram.com/aerophonoficial';
        break;
      case 2:
        window.location.href = 'https://twitter.com/aerophonmusic';
        break;
      case 3:
        window.location.href = 'mailto:aerophonoficial@gmail.com';
        break;
      case 4:
        window.location.href = 'https://api.whatsapp.com/send?phone=57322 8565244';
        break;
      default:
        break;
    }
  }
}
