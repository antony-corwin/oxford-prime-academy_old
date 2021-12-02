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
      .addSvgIcon('maze', this.setPath(`${this.path}/maze.svg`))
      .addSvgIcon('microbit', this.setPath(`${this.path}/microbit.svg`))
      .addSvgIcon('microsoft', this.setPath(`${this.path}/microsoft.svg`))
      .addSvgIcon('monday', this.setPath(`${this.path}/monday.svg`))
      .addSvgIcon('npm', this.setPath(`${this.path}/npm.svg`))
      .addSvgIcon('oculus', this.setPath(`${this.path}/oculus.svg`))
      .addSvgIcon('overflow', this.setPath(`${this.path}/overflow.svg`))
      .addSvgIcon('pacman', this.setPath(`${this.path}/pacman.svg`))
      .addSvgIcon('patreon', this.setPath(`${this.path}/patreon.svg`))
      .addSvgIcon('paypal', this.setPath(`${this.path}/paypal.svg`))
      .addSvgIcon('pexels', this.setPath(`${this.path}/pexels.svg`))
      .addSvgIcon('pocket', this.setPath(`${this.path}/pocket.svg`))
      .addSvgIcon('pokemon', this.setPath(`${this.path}/pokemon.svg`))
      .addSvgIcon('product-hunt', this.setPath(`${this.path}/product-hunt.svg`))
      .addSvgIcon('serverless', this.setPath(`${this.path}/serverless.svg`))
      .addSvgIcon('shutterstock', this.setPath(`${this.path}/shutterstock.svg`))
      .addSvgIcon('sketch', this.setPath(`${this.path}/sketch.svg`))
      .addSvgIcon('slack', this.setPath(`${this.path}/slack.svg`))
      .addSvgIcon('spectrum', this.setPath(`${this.path}/spectrum.svg`))
      .addSvgIcon('square', this.setPath(`${this.path}/square.svg`))
      .addSvgIcon('stark', this.setPath(`${this.path}/stark.svg`))
      .addSvgIcon('studio', this.setPath(`${this.path}/studio.svg`))
      .addSvgIcon('sweden', this.setPath(`${this.path}/sweden.svg`))
      .addSvgIcon('swiss', this.setPath(`${this.path}/swiss.svg`))
      .addSvgIcon('tally', this.setPath(`${this.path}/tally.svg`))
      .addSvgIcon('trello', this.setPath(`${this.path}/trello.svg`))
      .addSvgIcon('twilio', this.setPath(`${this.path}/twilio.svg`))
      .addSvgIcon('twitter', this.setPath(`${this.path}/twitter.svg`))
      .addSvgIcon('unfold', this.setPath(`${this.path}/unfold.svg`))
      .addSvgIcon('unsplash', this.setPath(`${this.path}/unsplash.svg`))
      .addSvgIcon('userlane', this.setPath(`${this.path}/userlane.svg`))
      .addSvgIcon('windows', this.setPath(`${this.path}/windows.svg`))
      .addSvgIcon('youtube', this.setPath(`${this.path}/youtube.svg`))
      .addSvgIcon('zeit', this.setPath(`${this.path}/zeit.svg`))
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
