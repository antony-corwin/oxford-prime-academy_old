import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PrimengThemeService {
  defaultTheme: string = 'fluent-light'

  constructor(@Inject(DOCUMENT) private document: Document) { }

  init(): void {
    this.switchTheme(this.defaultTheme);
  }

  switchTheme(theme: string): void {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
  }
}
