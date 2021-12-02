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
export class DevicesIconsModule {
  private path = "./assets/icons/devices";

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry ) {

    this.matIconRegistry
      .addSvgIcon("apple-watch", this.setPath(`${this.path}/apple-watch.svg`))
      .addSvgIcon("bot", this.setPath(`${this.path}/bot.svg`))
      .addSvgIcon("browser", this.setPath(`${this.path}/browser.svg`))
      .addSvgIcon("calculator", this.setPath(`${this.path}/calculator.svg`))
      .addSvgIcon("videocamera", this.setPath(`${this.path}/videocamera.svg`))
      .addSvgIcon("cast", this.setPath(`${this.path}/cast.svg`))
      .addSvgIcon("controller", this.setPath(`${this.path}/controller.svg`))
      .addSvgIcon("desktop", this.setPath(`${this.path}/desktop.svg`))
      .addSvgIcon("dialpad", this.setPath(`${this.path}/dialpad.svg`))
      .addSvgIcon("drive", this.setPath(`${this.path}/drive.svg`))
      .addSvgIcon("ereader", this.setPath(`${this.path}/ereader.svg`))
      .addSvgIcon("home-screen", this.setPath(`${this.path}/home-screen.svg`))
      .addSvgIcon("keyboard", this.setPath(`${this.path}/keyboard.svg`))
      .addSvgIcon("laptop", this.setPath(`${this.path}/laptop.svg`))
      .addSvgIcon("mouse", this.setPath(`${this.path}/mouse.svg`))
      .addSvgIcon("music-speaker", this.setPath(`${this.path}/music-speaker.svg`))
      .addSvgIcon("piano", this.setPath(`${this.path}/piano.svg`))
      .addSvgIcon("qr", this.setPath(`${this.path}/qr.svg`))
      .addSvgIcon("screen-wide", this.setPath(`${this.path}/screen-wide.svg`))
      .addSvgIcon("screen", this.setPath(`${this.path}/screen.svg`))
      .addSvgIcon("server", this.setPath(`${this.path}/server.svg`))
      .addSvgIcon("shield", this.setPath(`${this.path}/shield.svg`))
      .addSvgIcon("signal", this.setPath(`${this.path}/signal.svg`))
      .addSvgIcon("smartphone-chip", this.setPath(`${this.path}/smartphone-chip.svg`))
      .addSvgIcon("smartphone-ram", this.setPath(`${this.path}/smartphone-ram.svg`))
      .addSvgIcon("smartphone-shake", this.setPath(`${this.path}/smartphone-shake.svg`))
      .addSvgIcon("smartphone", this.setPath(`${this.path}/smartphone.svg`))
      .addSvgIcon("stopwatch", this.setPath(`${this.path}/stopwatch.svg`))
      .addSvgIcon("thermostat", this.setPath(`${this.path}/thermostat.svg`))
      .addSvgIcon("touchpad", this.setPath(`${this.path}/touchpad.svg`))
      .addSvgIcon("tv", this.setPath(`${this.path}/tv.svg`))
      .addSvgIcon("webcam", this.setPath(`${this.path}/webcam.svg`))
      .addSvgIcon("camera", this.setPath(`${this.path}/camera.svg`))
  }
  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
