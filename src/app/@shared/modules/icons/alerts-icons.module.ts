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
export class AlertsIconsModule {
  private path = './assets/icons/alerts';

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry) {

    this.matIconRegistry
      .addSvgIcon('alarm', this.setPath(`${this.path}/alarm.svg`))
      .addSvgIcon('battery-empty', this.setPath(`${this.path}/battery-empty.svg`))
      .addSvgIcon('battery-full', this.setPath(`${this.path}/battery-full.svg`))
      .addSvgIcon('battery', this.setPath(`${this.path}/battery.svg`))
      .addSvgIcon('bell', this.setPath(`${this.path}/bell.svg`))
      .addSvgIcon('bolt', this.setPath(`${this.path}/bolt.svg`))
      .addSvgIcon('bulb', this.setPath(`${this.path}/bulb.svg`))
      .addSvgIcon('calendar-dates', this.setPath(`${this.path}/calendar-dates.svg`))
      .addSvgIcon('calendar-due', this.setPath(`${this.path}/calendar-due.svg`))
      .addSvgIcon('calendar-next', this.setPath(`${this.path}/calendar-next.svg`))
      .addSvgIcon('calendar-today', this.setPath(`${this.path}/calendar-today.svg`))
      .addSvgIcon('calendar-two', this.setPath(`${this.path}/calendar-two.svg`))
      .addSvgIcon('calendar', this.setPath(`${this.path}/calendar.svg`))
      .addSvgIcon('danger', this.setPath(`${this.path}/danger.svg`))
      .addSvgIcon('question-help', this.setPath(`${this.path}/question-help.svg`))
      .addSvgIcon('info', this.setPath(`${this.path}/info.svg`))
      .addSvgIcon('phone', this.setPath(`${this.path}/phone.svg`))

  }

  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
