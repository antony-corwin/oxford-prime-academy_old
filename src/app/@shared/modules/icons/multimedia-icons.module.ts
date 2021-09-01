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
export class MultimediaIconsModule {
  private path = './assets/icons/multimedia';

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry) {

    this.matIconRegistry
      .addSvgIcon('album', this.setPath(`${this.path}/album.svg`))
      .addSvgIcon('collage', this.setPath(`${this.path}/collage.svg`))
      .addSvgIcon('comment', this.setPath(`${this.path}/comment.svg`))
      .addSvgIcon('credit-card', this.setPath(`${this.path}/credit-card.svg`))
      .addSvgIcon('data', this.setPath(`${this.path}/data.svg`))
      .addSvgIcon('database', this.setPath(`${this.path}/database.svg`))
      .addSvgIcon('disc', this.setPath(`${this.path}/disc.svg`))
      .addSvgIcon('film', this.setPath(`${this.path}/film.svg`))
      .addSvgIcon('games', this.setPath(`${this.path}/games.svg`))
      .addSvgIcon('headset', this.setPath(`${this.path}/headset.svg`))
      .addSvgIcon('image', this.setPath(`${this.path}/image.svg`))
      .addSvgIcon('inpicture', this.setPath(`${this.path}/inpicture.svg`))
      .addSvgIcon('live-photo', this.setPath(`${this.path}/live-photo.svg`))
      .addSvgIcon('media-live', this.setPath(`${this.path}/media-live.svg`))
      .addSvgIcon('media-podcast', this.setPath(`${this.path}/media-podcast.svg`))
      .addSvgIcon('mic', this.setPath(`${this.path}/mic.svg`))
      .addSvgIcon('music-note', this.setPath(`${this.path}/music-note.svg`))
      .addSvgIcon('music', this.setPath(`${this.path}/music.svg`))
      .addSvgIcon('photoscan', this.setPath(`${this.path}/photoscan.svg`))
      .addSvgIcon('play-backwards', this.setPath(`${this.path}/play-backwards.svg`))
      .addSvgIcon('play-button-o', this.setPath(`${this.path}/play-button-o.svg`))
      .addSvgIcon('play-button-r', this.setPath(`${this.path}/play-button-r.svg`))
      .addSvgIcon('play-button', this.setPath(`${this.path}/play-button.svg`))
      .addSvgIcon('play-forwards', this.setPath(`${this.path}/play-forwards.svg`))
      .addSvgIcon('play-list-add', this.setPath(`${this.path}/play-list-add.svg`))
      .addSvgIcon('play-list-check', this.setPath(`${this.path}/play-list-check.svg`))
      .addSvgIcon('play-list-remover', this.setPath(`${this.path}/play-list-remover.svg`))
      .addSvgIcon('play-list-search', this.setPath(`${this.path}/play-list-search.svg`))
      .addSvgIcon('play-list', this.setPath(`${this.path}/play-list.svg`))
      .addSvgIcon('play-track-next-o', this.setPath(`${this.path}/play-track-next-o.svg`))
      .addSvgIcon('play-track-next-r', this.setPath(`${this.path}/play-track-next-r.svg`))
      .addSvgIcon('play-track-next', this.setPath(`${this.path}/play-track-next.svg`))
      .addSvgIcon('play-track-prev-o', this.setPath(`${this.path}/play-track-prev-o.svg`))
      .addSvgIcon('play-track-prev-r', this.setPath(`${this.path}/play-track-prev-r.svg`))
      .addSvgIcon('play-track-prev', this.setPath(`${this.path}/play-track-prev.svg`))
      .addSvgIcon('polaroid', this.setPath(`${this.path}/polaroid.svg`))
      .addSvgIcon('presentation', this.setPath(`${this.path}/presentation.svg`))
      .addSvgIcon('ratio', this.setPath(`${this.path}/ratio.svg`))
      .addSvgIcon('screen-mirror', this.setPath(`${this.path}/screen-mirror.svg`))
      .addSvgIcon('screen-shot', this.setPath(`${this.path}/screen-shot.svg`))
      .addSvgIcon('ui-kit', this.setPath(`${this.path}/ui-kit.svg`))
      .addSvgIcon('usb-c', this.setPath(`${this.path}/usb-c.svg`))
      .addSvgIcon('usb', this.setPath(`${this.path}/usb.svg`))
      .addSvgIcon('voicemail-o', this.setPath(`${this.path}/voicemail-o.svg`))
      .addSvgIcon('voicemail-r', this.setPath(`${this.path}/voicemail-r.svg`))
      .addSvgIcon('voicemail', this.setPath(`${this.path}/voicemail.svg`))
      .addSvgIcon('volume', this.setPath(`${this.path}/volume.svg`));
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
