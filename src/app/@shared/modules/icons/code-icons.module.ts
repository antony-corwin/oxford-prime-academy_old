import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CodeIconsModule {
  private path = "./assets/icons/code";

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry ) {

    this.matIconRegistry
      .addSvgIcon("c-plus-plus", this.setPath(`${this.path}/c-plus-plus.svg`))
      .addSvgIcon("c-plus-plus", this.setPath(`${this.path}/c-plus-plus.svg`))
      .addSvgIcon("c-plus-plus", this.setPath(`${this.path}/c-plus-plus.svg`))
      .addSvgIcon("c-plus-plus", this.setPath(`${this.path}/c-plus-plus.svg`))
      .addSvgIcon("c-plus-plus", this.setPath(`${this.path}/c-plus-plus.svg`))
      .addSvgIcon("c-plus-plus", this.setPath(`${this.path}/c-plus-plus.svg`))
      .addSvgIcon("c-plus-plus", this.setPath(`${this.path}/c-plus-plus.svg`))
      .addSvgIcon("c-plus-plus", this.setPath(`${this.path}/c-plus-plus.svg`))
      .addSvgIcon("c-plus-plus", this.setPath(`${this.path}/c-plus-plus.svg`))
      .addSvgIcon("c-plus-plus", this.setPath(`${this.path}/c-plus-plus.svg`))
  }
  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
