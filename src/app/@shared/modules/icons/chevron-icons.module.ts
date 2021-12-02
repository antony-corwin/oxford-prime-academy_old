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
export class ChevronIconsModule {
  private path = "./assets/icons/chevron"

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry ) {

    this.matIconRegistry
      .addSvgIcon("chevron-double-down-o", this.setPath(`${this.path}/chevron-double-down-o.svg`))
      .addSvgIcon("chevron-double-down-r", this.setPath(`${this.path}/chevron-double-down-r.svg`))
      .addSvgIcon("chevron-double-down", this.setPath(`${this.path}/chevron-double-down.svg`))
      .addSvgIcon("chevron-double-left-o", this.setPath(`${this.path}/chevron-double-left-o.svg`))
      .addSvgIcon("chevron-double-left-r", this.setPath(`${this.path}/chevron-double-left-r.svg`))
      .addSvgIcon("chevron-double-left", this.setPath(`${this.path}/chevron-double-left.svg`))
      .addSvgIcon("chevron-double-right-o", this.setPath(`${this.path}/chevron-double-right-o.svg`))
      .addSvgIcon("chevron-double-right-r", this.setPath(`${this.path}/chevron-double-right-r.svg`))
      .addSvgIcon("chevron-double-right", this.setPath(`${this.path}/chevron-double-right.svg`))
      .addSvgIcon("chevron-double-up-o", this.setPath(`${this.path}/chevron-double-up-o.svg`))
      .addSvgIcon("chevron-double-up-r", this.setPath(`${this.path}/chevron-double-up-r.svg`))
      .addSvgIcon("chevron-double-up", this.setPath(`${this.path}/chevron-double-up.svg`))
      .addSvgIcon("chevron-down-o", this.setPath(`${this.path}/chevron-down-o.svg`))
      .addSvgIcon("chevron-down-r", this.setPath(`${this.path}/chevron-down-r.svg`))
      .addSvgIcon("chevron-down", this.setPath(`${this.path}/chevron-down.svg`))
      .addSvgIcon("chevron-left-o", this.setPath(`${this.path}/chevron-left-o.svg`))
      .addSvgIcon("chevron-left-r", this.setPath(`${this.path}/chevron-left-r.svg`))
      .addSvgIcon("chevron-left", this.setPath(`${this.path}/chevron-left.svg`))
      .addSvgIcon("chevron-right-o", this.setPath(`${this.path}/chevron-right-o.svg`))
      .addSvgIcon("chevron-right-r", this.setPath(`${this.path}/chevron-right-r.svg`))
      .addSvgIcon("chevron-right", this.setPath(`${this.path}/chevron-right.svg`))
      .addSvgIcon("chevron-up-o", this.setPath(`${this.path}/chevron-up-o.svg`))
      .addSvgIcon("chevron-up-r", this.setPath(`${this.path}/chevron-up-r.svg`))
      .addSvgIcon("chevron-up", this.setPath(`${this.path}/chevron-up.svg`))
      .addSvgIcon("push-chevron-down-o", this.setPath(`${this.path}/push-chevron-down-o.svg`))
      .addSvgIcon("push-chevron-down-r", this.setPath(`${this.path}/push-chevron-down-r.svg`))
      .addSvgIcon("push-chevron-down", this.setPath(`${this.path}/push-chevron-down.svg`))
      .addSvgIcon("push-chevron-left-o", this.setPath(`${this.path}/push-chevron-left-o.svg`))
      .addSvgIcon("push-chevron-left-r", this.setPath(`${this.path}/push-chevron-left-r.svg`))
      .addSvgIcon("push-chevron-left", this.setPath(`${this.path}/push-chevron-left.svg`))
      .addSvgIcon("push-chevron-right-o", this.setPath(`${this.path}/push-chevron-right-o.svg`))
      .addSvgIcon("push-chevron-right-r", this.setPath(`${this.path}/push-chevron-right-r.svg`))
      .addSvgIcon("push-chevron-right", this.setPath(`${this.path}/push-chevron-right.svg`))
      .addSvgIcon("push-chevron-up-o", this.setPath(`${this.path}/push-chevron-up-o.svg`))
      .addSvgIcon("push-chevron-up-r", this.setPath(`${this.path}/push-chevron-up-r.svg`))
      .addSvgIcon("push-chevron-up", this.setPath(`${this.path}/push-chevron-up.svg`))
      .addSvgIcon("push-chevron-down-r", this.setPath(`${this.path}/push-chevron-down-r.svg`))
  }
  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
