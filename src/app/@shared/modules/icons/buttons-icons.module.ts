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
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
      .addSvgIcon('add-r', this.setPath(`${this.path}/add-r.svg`))
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
