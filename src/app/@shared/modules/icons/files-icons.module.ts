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
export class FileIconsModule {
  private path = './assets/icons/files';

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry ) {

    this.matIconRegistry
      .addSvgIcon('box', this.setPath(`${this.path}/box.svg`))
      .addSvgIcon('cloud', this.setPath(`${this.path}/cloud.svg`))
      .addSvgIcon('file-add', this.setPath(`${this.path}/file-add.svg`))
      .addSvgIcon('file-document', this.setPath(`${this.path}/file-document.svg`))
      .addSvgIcon('file-remove', this.setPath(`${this.path}/file-remove.svg`))
      .addSvgIcon('file-csv', this.setPath(`${this.path}/file-csv.svg`))
      .addSvgIcon('file', this.setPath(`${this.path}/file.svg`))
      .addSvgIcon('folder-add', this.setPath(`${this.path}/folder-add.svg`))
      .addSvgIcon('folder-remove', this.setPath(`${this.path}/folder-remove.svg`))
      .addSvgIcon('folder', this.setPath(`${this.path}/folder.svg`))
      .addSvgIcon('toolbox', this.setPath(`${this.path}/toolbox.svg`))
      .addSvgIcon('file-pdf', this.setPath(`${this.path}/file-pdf.svg`))
  }
  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
