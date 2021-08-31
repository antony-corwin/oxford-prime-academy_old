import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss'],
})

export class DashboardNavComponent {
  @Input() path = {
    root: '',
  };
  @Input() navItems: Array<any> = [];
  @Output() changeRouteEvent = new EventEmitter<boolean>();

  emitChangeRoute(value: boolean) {
    this.changeRouteEvent.emit(value);
  }
}
