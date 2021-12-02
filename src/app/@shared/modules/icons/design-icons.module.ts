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
export class DesignIconsModule {
  private path = "./assets/icons/design"

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry ) {

    this.matIconRegistry
      .addSvgIcon("arrange-back", this.setPath(`${this.path}/arrange-back.svg`))
      .addSvgIcon("arrange-front", this.setPath(`${this.path}/arrange-front.svg`))
      .addSvgIcon("asterisk", this.setPath(`${this.path}/asterisk.svg`))
      .addSvgIcon("attribution", this.setPath(`${this.path}/attribution.svg`))
      .addSvgIcon("border-all", this.setPath(`${this.path}/border-all.svg`))
      .addSvgIcon("border-bottom", this.setPath(`${this.path}/border-bottom.svg`))
      .addSvgIcon("border-left", this.setPath(`${this.path}/border-left.svg`))
      .addSvgIcon("border-right", this.setPath(`${this.path}/border-right.svg`))
      .addSvgIcon("border-style-dashed", this.setPath(`${this.path}/border-style-dashed.svg`))
      .addSvgIcon("border-style-dotted", this.setPath(`${this.path}/border-style-dotted.svg`))
      .addSvgIcon("border-style-solid", this.setPath(`${this.path}/border-style-solid.svg`))
      .addSvgIcon("border-top", this.setPath(`${this.path}/border-top.svg`))
      .addSvgIcon("color-bucket", this.setPath(`${this.path}/color-bucket.svg`))
      .addSvgIcon("color-picker", this.setPath(`${this.path}/color-picker.svg`))
      .addSvgIcon("distribute-vertical", this.setPath(`${this.path}/distribute-vertical.svg`))
      .addSvgIcon("drop-invert", this.setPath(`${this.path}/drop-invert.svg`))
      .addSvgIcon("drop-opacity", this.setPath(`${this.path}/drop-opacity.svg`))
      .addSvgIcon("drop", this.setPath(`${this.path}/drop.svg`))
      .addSvgIcon("edit-black-point", this.setPath(`${this.path}/edit-black-point.svg`))
      .addSvgIcon("edit-contrast", this.setPath(`${this.path}/edit-contrast.svg`))
      .addSvgIcon("edit-exposure", this.setPath(`${this.path}/edit-exposure.svg`))
      .addSvgIcon("edit-fade", this.setPath(`${this.path}/edit-fade.svg`))
      .addSvgIcon("edit-flip-h", this.setPath(`${this.path}/edit-flip-h.svg`))
      .addSvgIcon("edit-flip-v", this.setPath(`${this.path}/edit-flip-v.svg`))
      .addSvgIcon("edit-highlight", this.setPath(`${this.path}/edit-highlight.svg`))
      .addSvgIcon("edit-markup", this.setPath(`${this.path}/edit-markup.svg`))
      .addSvgIcon("edit-mask", this.setPath(`${this.path}/edit-mask.svg`))
      .addSvgIcon("edit-noise", this.setPath(`${this.path}/edit-noise.svg`))
      .addSvgIcon("edit-shadows", this.setPath(`${this.path}/edit-shadows.svg`))
      .addSvgIcon("edit-straight", this.setPath(`${this.path}/edit-straight.svg`))
      .addSvgIcon("erase", this.setPath(`${this.path}/erase.svg`))
      .addSvgIcon("font-height", this.setPath(`${this.path}/font-height.svg`))
      .addSvgIcon("font-spacing", this.setPath(`${this.path}/font-spacing.svg`))
      .addSvgIcon("insert-after-o", this.setPath(`${this.path}/insert-after-o.svg`))
      .addSvgIcon("insert-after-r", this.setPath(`${this.path}/insert-after-r.svg`))
      .addSvgIcon("insert-after", this.setPath(`${this.path}/insert-after.svg`))
      .addSvgIcon("insert-before-o", this.setPath(`${this.path}/insert-before-o.svg`))
      .addSvgIcon("insert-before-r", this.setPath(`${this.path}/insert-before-r.svg`))
      .addSvgIcon("insert-before", this.setPath(`${this.path}/insert-before.svg`))
      .addSvgIcon("list-tree", this.setPath(`${this.path}/list-tree.svg`))
      .addSvgIcon("path-back", this.setPath(`${this.path}/path-back.svg`))
      .addSvgIcon("path-crop", this.setPath(`${this.path}/path-crop.svg`))
      .addSvgIcon("path-divide", this.setPath(`${this.path}/path-divide.svg`))
      .addSvgIcon("path-exclude", this.setPath(`${this.path}/path-exclude.svg`))
      .addSvgIcon("path-front", this.setPath(`${this.path}/path-front.svg`))
      .addSvgIcon("path-intersect", this.setPath(`${this.path}/path-intersect.svg`))
      .addSvgIcon("path-outline", this.setPath(`${this.path}/path-outline.svg`))
      .addSvgIcon("path-trim", this.setPath(`${this.path}/path-trim.svg`))
      .addSvgIcon("path-unite", this.setPath(`${this.path}/path-unite.svg`))
      .addSvgIcon("pen", this.setPath(`${this.path}/pen.svg`))
      .addSvgIcon("pentagon-bottom-left", this.setPath(`${this.path}/pentagon-bottom-left.svg`))
      .addSvgIcon("pentagon-bottom-right", this.setPath(`${this.path}/pentagon-bottom-right.svg`))
      .addSvgIcon("pentagon-down", this.setPath(`${this.path}/pentagon-down.svg`))
      .addSvgIcon("pentagon-left", this.setPath(`${this.path}/pentagon-left.svg`))
      .addSvgIcon("pentagon-right", this.setPath(`${this.path}/pentagon-right.svg`))
      .addSvgIcon("pentagon-top-left", this.setPath(`${this.path}/pentagon-top-left.svg`))
      .addSvgIcon("pentagon-top-right", this.setPath(`${this.path}/pentagon-top-right.svg`))
      .addSvgIcon("pentagon-up", this.setPath(`${this.path}/pentagon-up.svg`))
      .addSvgIcon("poll", this.setPath(`${this.path}/poll.svg`))
      .addSvgIcon("rename", this.setPath(`${this.path}/rename.svg`))
      .addSvgIcon("row-first", this.setPath(`${this.path}/row-first.svg`))
      .addSvgIcon("row-last", this.setPath(`${this.path}/row-last.svg`))
      .addSvgIcon("shape-circle", this.setPath(`${this.path}/shape-circle.svg`))
      .addSvgIcon("shape-half-circle", this.setPath(`${this.path}/shape-half-circle.svg`))
      .addSvgIcon("shape-hexagon", this.setPath(`${this.path}/shape-hexagon.svg`))
      .addSvgIcon("shape-rhombus", this.setPath(`${this.path}/shape-rhombus.svg`))
      .addSvgIcon("shape-square", this.setPath(`${this.path}/shape-square.svg`))
      .addSvgIcon("shape-triangle", this.setPath(`${this.path}/shape-triangle.svg`))
      .addSvgIcon("shape-zigzag", this.setPath(`${this.path}/shape-zigzag.svg`))
      .addSvgIcon("stories", this.setPath(`${this.path}/stories.svg`))
      .addSvgIcon("template", this.setPath(`${this.path}/template.svg`))
      .addSvgIcon("tikcode", this.setPath(`${this.path}/tikcode.svg`))
      .addSvgIcon("toolbar-bottom", this.setPath(`${this.path}/toolbar-bottom.svg`))
      .addSvgIcon("toolbar-left", this.setPath(`${this.path}/toolbar-left.svg`))
      .addSvgIcon("toolbar-right", this.setPath(`${this.path}/toolbar-right.svg`))
      .addSvgIcon("toolbar-top", this.setPath(`${this.path}/toolbar-top.svg`))
      .addSvgIcon("website", this.setPath(`${this.path}/website.svg`))
      .addSvgIcon("view-cols", this.setPath(`${this.path}/view-cols.svg`))
      .addSvgIcon("view-comfortable", this.setPath(`${this.path}/view-comfortable.svg`))
      .addSvgIcon("view-day", this.setPath(`${this.path}/view-day.svg`))
      .addSvgIcon("view-grid", this.setPath(`${this.path}/view-grid.svg`))
      .addSvgIcon("view-list", this.setPath(`${this.path}/view-list.svg`))
      .addSvgIcon("view-month", this.setPath(`${this.path}/view-month.svg`))
      .addSvgIcon("view-split", this.setPath(`${this.path}/view-split.svg`))
      .addSvgIcon("edit-unmask", this.setPath(`${this.path}/edit-unmask.svg`))
      .addSvgIcon("shape-circle-filled", this.setPath(`${this.path}/shape-circle-filled.svg`))
  }
  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
