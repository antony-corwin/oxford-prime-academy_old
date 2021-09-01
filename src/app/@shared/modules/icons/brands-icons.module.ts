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
export class BrandsIconsModule {
  private path = {
    base: './assets/icons',
    alerts: './assets/icons/alerts',
    arrows: './assets/icons/arrows',
    brands: './assets/icons/brands',
    buttons: './assets/icons/buttons',
    chevron: './assets/icons/chevron',
    code: './assets/icons/code',
    content: './assets/icons/content',
    dashboardMenu: './assets/icons/dashboard-menu',
    design: './assets/icons/design',
    devices: './assets/icons/devices',
    files: './assets/icons/files',
    multimedia: './assets/icons/multimedia',
    other: './assets/icons/other',
  };

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry) {
    // BASE

    // ALERTS

    // ARROWS

    // BRANDS

    // BUTTONS

    // CHEVRON

    // CODE

    // CONTENT

    // DASHBOARD-MENU


    this.matIconRegistry
      .addSvgIcon('home-alt', this.setPath(`${this.path.other}/home-alt.svg`))
      .addSvgIcon('cloud', this.setPath(`${this.path.files}/cloud.svg`))
      .addSvgIcon('film', this.setPath(`${this.path.multimedia}/film.svg`))
      .addSvgIcon('film', this.setPath(`${this.path.multimedia}/film.svg`))
      .addSvgIcon('film', this.setPath(`${this.path.multimedia}/film.svg`))
      .addSvgIcon('film', this.setPath(`${this.path.multimedia}/film.svg`))
      .addSvgIcon('film', this.setPath(`${this.path.multimedia}/film.svg`))
      .addSvgIcon('film', this.setPath(`${this.path.multimedia}/film.svg`))
      .addSvgIcon('film', this.setPath(`${this.path.multimedia}/film.svg`))
      .addSvgIcon('film', this.setPath(`${this.path.multimedia}/film.svg`))
      .addSvgIcon('film', this.setPath(`${this.path.multimedia}/film.svg`))
      .addSvgIcon('film', this.setPath(`${this.path.multimedia}/film.svg`));
    this.matIconRegistry
      .addSvgIcon('film', this.setPath(`${this.path.multimedia}/film.svg`));
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
