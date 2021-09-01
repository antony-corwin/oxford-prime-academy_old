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
export class OtherIconsModule {
  private path = './assets/icons/other';

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry) {

    this.matIconRegistry
      .addSvgIcon('dollar', this.setPath(`${this.path}/dollar.svg`))
      .addSvgIcon('graduation-hat', this.setPath(`${this.path}/graduation-hat.svg`))
      .addSvgIcon('user-list', this.setPath(`${this.path}/user-list.svg`));
  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
