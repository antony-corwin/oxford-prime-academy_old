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
  private path = './assets/icons/brands';

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry) {

    this.matIconRegistry
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('adidas', this.setPath(`${this.path}/adidas.svg`))
      .addSvgIcon('atlasian', this.setPath(`${this.path}/atlasian.svg`))
      .addSvgIcon('bmw', this.setPath(`${this.path}/bmw.svg`))
      .addSvgIcon('brackets', this.setPath(`${this.path}/brackets.svg`))
      .addSvgIcon('chanel', this.setPath(`${this.path}/chanel.svg`))
      .addSvgIcon('circleci', this.setPath(`${this.path}/circleci.svg`))
      .addSvgIcon('code-climate', this.setPath(`${this.path}/code-climate.svg`))
      .addSvgIcon('comedy-central', this.setPath(`${this.path}/comedy-central.svg`))
      .addSvgIcon('crowdfire', this.setPath(`${this.path}/crowdfire.svg`))
      .addSvgIcon('designmodo', this.setPath(`${this.path}/designmodo.svg`))
      .addSvgIcon('digitalocean', this.setPath(`${this.path}/digitalocean.svg`))
      .addSvgIcon('dolby', this.setPath(`${this.path}/dolby.svg`))
      .addSvgIcon('dribbble', this.setPath(`${this.path}/dribbble.svg`))
      .addSvgIcon('eventbrite', this.setPath(`${this.path}/eventbrite.svg`))
      .addSvgIcon('facebook', this.setPath(`${this.path}/facebook.svg`))
      .addSvgIcon('figma', this.setPath(`${this.path}/figma.svg`))
      .addSvgIcon('framer', this.setPath(`${this.path}/framer.svg`))
      .addSvgIcon('ghost', this.setPath(`${this.path}/ghost.svg`))
      .addSvgIcon('gitter', this.setPath(`${this.path}/gitter.svg`))
      .addSvgIcon('google-tasks', this.setPath(`${this.path}/google-tasks.svg`))
      .addSvgIcon('google', this.setPath(`${this.path}/google.svg`))
      .addSvgIcon('hello', this.setPath(`${this.path}/hello.svg`))
      .addSvgIcon('if-design', this.setPath(`${this.path}/if-design.svg`))
      .addSvgIcon('indie-hackers', this.setPath(`${this.path}/indie-hackers.svg`))
      .addSvgIcon('instagram', this.setPath(`${this.path}/instagram.svg`))
      .addSvgIcon('lastpass', this.setPath(`${this.path}/lastpass.svg`))
      .addSvgIcon('linear', this.setPath(`${this.path}/linear.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
      .addSvgIcon('abstract', this.setPath(`${this.path}/abstract.svg`))
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
