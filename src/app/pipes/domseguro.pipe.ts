import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro',
})
export class DomseguroPipe implements PipeTransform {
  constructor(private domS: DomSanitizer) {}
  transform(value: string) {
    const url = 'https://open.spotify.com/embed?uri=';
    return this.domS.bypassSecurityTrustResourceUrl(url + value);
  }
}
