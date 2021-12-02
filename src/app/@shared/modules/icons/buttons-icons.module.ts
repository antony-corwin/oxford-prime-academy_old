import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ButtonsIconsModule {
  private path = './assets/icons/buttons';

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry,
  ) {
    this.matIconRegistry
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add', this.setPath(`${this.path}/add.svg`))
      .addSvgIcon('assign', this.setPath(`${this.path}/assign.svg`))
      .addSvgIcon('backspace', this.setPath(`${this.path}/backspace.svg`))
      .addSvgIcon('bookmark', this.setPath(`${this.path}/bookmark.svg`))
      .addSvgIcon('captions', this.setPath(`${this.path}/captions.svg`))
      .addSvgIcon('close-o', this.setPath(`${this.path}/close-o.svg`))
      .addSvgIcon('close-r', this.setPath(`${this.path}/close-r.svg`))
      .addSvgIcon('feed', this.setPath(`${this.path}/feed.svg`))
      .addSvgIcon('flag', this.setPath(`${this.path}/flag.svg`))
      .addSvgIcon('inbox', this.setPath(`${this.path}/inbox.svg`))
      .addSvgIcon('lock-unlock', this.setPath(`${this.path}/lock-unlock.svg`))
      .addSvgIcon('lock', this.setPath(`${this.path}/lock.svg`))
      .addSvgIcon('log-in', this.setPath(`${this.path}/log-in.svg`))
      .addSvgIcon('log-off', this.setPath(`${this.path}/log-off.svg`))
      .addSvgIcon('log-out', this.setPath(`${this.path}/log-out.svg`))
      .addSvgIcon('menu-left', this.setPath(`${this.path}/menu-left.svg`))
      .addSvgIcon('menu-right', this.setPath(`${this.path}/menu-right.svg`))
      .addSvgIcon('menu', this.setPath(`${this.path}/menu.svg`))
      .addSvgIcon('more-alt', this.setPath(`${this.path}/more-alt.svg`))
      .addSvgIcon('more-o', this.setPath(`${this.path}/more-o.svg`))
      .addSvgIcon('more-r', this.setPath(`${this.path}/more-r.svg`))
      .addSvgIcon('more-vertical-alt', this.setPath(`${this.path}/more-vertical-alt.svg`))
      .addSvgIcon('more-vertical-o', this.setPath(`${this.path}/more-vertical-o.svg`))
      .addSvgIcon('more-vertical-r', this.setPath(`${this.path}/more-vertical-r.svg`))
      .addSvgIcon('more-vertical', this.setPath(`${this.path}/more-vertical.svg`))
      .addSvgIcon('more', this.setPath(`${this.path}/more.svg`))
      .addSvgIcon('play-pause-o', this.setPath(`${this.path}/play-pause-o.svg`))
      .addSvgIcon('play-pause-r', this.setPath(`${this.path}/play-pause-r.svg`))
      .addSvgIcon('Subtract', this.setPath(`${this.path}/Subtract.svg`))
      .addSvgIcon('play-stop-o', this.setPath(`${this.path}/play-stop-o.svg`))
      .addSvgIcon('play-stop-r', this.setPath(`${this.path}/play-stop-r.svg`))
      .addSvgIcon('play-stop', this.setPath(`${this.path}/play-stop.svg`))
      .addSvgIcon('print', this.setPath(`${this.path}/print.svg`))
      .addSvgIcon('read', this.setPath(`${this.path}/read.svg`))
      .addSvgIcon('share', this.setPath(`${this.path}/share.svg`))
      .addSvgIcon('shortcut', this.setPath(`${this.path}/shortcut.svg`))
      .addSvgIcon('size', this.setPath(`${this.path}/size.svg`))
      .addSvgIcon('software-download', this.setPath(`${this.path}/software-download.svg`))
      .addSvgIcon('software-upload', this.setPath(`${this.path}/software-upload.svg`))
      .addSvgIcon('sort-size', this.setPath(`${this.path}/sort-size.svg`))
      .addSvgIcon('sort-za', this.setPath(`${this.path}/sort-za.svg`))
      .addSvgIcon('toggle-ff', this.setPath(`${this.path}/toggle-ff.svg`))
      .addSvgIcon('toggle-on', this.setPath(`${this.path}/toggle-on.svg`))
      .addSvgIcon('toggle-square-off', this.setPath(`${this.path}/toggle-square-off.svg`))
      .addSvgIcon('toggle-square', this.setPath(`${this.path}/toggle-square.svg`))

  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
