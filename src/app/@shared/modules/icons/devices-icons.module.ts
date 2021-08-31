import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
})
export class DevicesIconsModule {
  private path = './assets/icons/devices';

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry) {

    this.matIconRegistry
      .addSvgIcon('calculator', this.setPath(`${this.path}/calculator.svg`));
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
