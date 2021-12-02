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
export class ContentIconsModule {
  private path = "./assets/icons/content";

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry ) {

    this.matIconRegistry
      .addSvgIcon("align-bottom", this.setPath(`${this.path}/align-bottom.svg`))
      .addSvgIcon("align-center", this.setPath(`${this.path}/align-center.svg`))
      .addSvgIcon("align-left", this.setPath(`${this.path}/align-left.svg`))
      .addSvgIcon("align-middle", this.setPath(`${this.path}/align-middle.svg`))
      .addSvgIcon("align-right", this.setPath(`${this.path}/align-right.svg`))
      .addSvgIcon("align-top", this.setPath(`${this.path}/align-top.svg`))
      .addSvgIcon("attachment", this.setPath(`${this.path}/attachment.svg`))
      .addSvgIcon("board", this.setPath(`${this.path}/board.svg`))
      .addSvgIcon("clipboard", this.setPath(`${this.path}/clipboard.svg`))
      .addSvgIcon("copy", this.setPath(`${this.path}/copy.svg`))
      .addSvgIcon("crop", this.setPath(`${this.path}/crop.svg`))
      .addSvgIcon("details-less", this.setPath(`${this.path}/details-less.svg`))
      .addSvgIcon("details-more", this.setPath(`${this.path}/details-more.svg`))
      .addSvgIcon("display-flex", this.setPath(`${this.path}/display-flex.svg`))
      .addSvgIcon("display-fullwidth", this.setPath(`${this.path}/display-fullwidth.svg`))
      .addSvgIcon("display-grid", this.setPath(`${this.path}/display-grid.svg`))
      .addSvgIcon("display-spacing", this.setPath(`${this.path}/display-spacing.svg`))
      .addSvgIcon("distribute-horizontal", this.setPath(`${this.path}/distribute-horizontal.svg`))
      .addSvgIcon("duplicate", this.setPath(`${this.path}/duplicate.svg`))
      .addSvgIcon("format-bold", this.setPath(`${this.path}/format-bold.svg`))
      .addSvgIcon("format-center", this.setPath(`${this.path}/format-center.svg`))
      .addSvgIcon("format-color", this.setPath(`${this.path}/format-color.svg`))
      .addSvgIcon("format-heading", this.setPath(`${this.path}/format-heading.svg`))
      .addSvgIcon("format-indent-decrease", this.setPath(`${this.path}/format-indent-decrease.svg`))
      .addSvgIcon("format-indent-increase", this.setPath(`${this.path}/format-indent-increase.svg`))
      .addSvgIcon("format-italic", this.setPath(`${this.path}/format-italic.svg`))
      .addSvgIcon("format-justify", this.setPath(`${this.path}/format-justify.svg`))
      .addSvgIcon("format-left", this.setPath(`${this.path}/format-left.svg`))
      .addSvgIcon("format-line-height", this.setPath(`${this.path}/format-line-height.svg`))
      .addSvgIcon("format-right", this.setPath(`${this.path}/format-right.svg`))
      .addSvgIcon("format-separator", this.setPath(`${this.path}/format-separator.svg`))
      .addSvgIcon("format-slash", this.setPath(`${this.path}/format-slash.svg`))
      .addSvgIcon("format-strike", this.setPath(`${this.path}/format-strike.svg`))
      .addSvgIcon("format-text", this.setPath(`${this.path}/format-text.svg`))
      .addSvgIcon("format-underline", this.setPath(`${this.path}/format-underline.svg`))
      .addSvgIcon("format-uppercase", this.setPath(`${this.path}/format-uppercase.svg`))
      .addSvgIcon("layout-grid-small", this.setPath(`${this.path}/layout-grid-small.svg`))
      .addSvgIcon("layout-grid", this.setPath(`${this.path}/layout-grid.svg`))
      .addSvgIcon("layout-list", this.setPath(`${this.path}/layout-list.svg`))
      .addSvgIcon("layout-pin", this.setPath(`${this.path}/layout-pin.svg`))
      .addSvgIcon("link", this.setPath(`${this.path}/link.svg`))
      .addSvgIcon("list", this.setPath(`${this.path}/list.svg`))
      .addSvgIcon("math-divide", this.setPath(`${this.path}/math-divide.svg`))
      .addSvgIcon("math-equal", this.setPath(`${this.path}/math-equal.svg`))
      .addSvgIcon("math-minus", this.setPath(`${this.path}/math-minus.svg`))
      .addSvgIcon("math-percent", this.setPath(`${this.path}/math-percent.svg`))
      .addSvgIcon("math-plus", this.setPath(`${this.path}/math-plus.svg`))
      .addSvgIcon("menu-boxed", this.setPath(`${this.path}/menu-boxed.svg`))
      .addSvgIcon("menu-left-alt", this.setPath(`${this.path}/menu-left-alt.svg`))
      .addSvgIcon("menu-right-alt", this.setPath(`${this.path}/menu-right-alt.svg`))
      .addSvgIcon("notes", this.setPath(`${this.path}/notes.svg`))
      .addSvgIcon("pin-alt", this.setPath(`${this.path}/pin-alt.svg`))
      .addSvgIcon("pin-bottom", this.setPath(`${this.path}/pin-bottom.svg`))
      .addSvgIcon("pin-top", this.setPath(`${this.path}/pin-top.svg`))
      .addSvgIcon("pin", this.setPath(`${this.path}/pin.svg`))
      .addSvgIcon("quote-o", this.setPath(`${this.path}/quote-o.svg`))
      .addSvgIcon("quote", this.setPath(`${this.path}/quote.svg`))
      .addSvgIcon("ruler", this.setPath(`${this.path}/ruler.svg`))
      .addSvgIcon("smile-mouth-open", this.setPath(`${this.path}/smile-mouth-open.svg`))
      .addSvgIcon("smile-neutral", this.setPath(`${this.path}/smile-neutral.svg`))
      .addSvgIcon("menu-round", this.setPath(`${this.path}/menu-round.svg`))
      .addSvgIcon("smile-no-mouth", this.setPath(`${this.path}/smile-no-mouth.svg`))
      .addSvgIcon("smile-none", this.setPath(`${this.path}/smile-none.svg`))
      .addSvgIcon("smile-sad", this.setPath(`${this.path}/smile-sad.svg`))
      .addSvgIcon("smile-upside", this.setPath(`${this.path}/smile-upside.svg`))
      .addSvgIcon("smile", this.setPath(`${this.path}/smile.svg`))
      .addSvgIcon("stack", this.setPath(`${this.path}/stack.svg`))
      .addSvgIcon("trash-empty", this.setPath(`${this.path}/trash-empty.svg`))
      .addSvgIcon("trash", this.setPath(`${this.path}/trash.svg`))

  }
  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
