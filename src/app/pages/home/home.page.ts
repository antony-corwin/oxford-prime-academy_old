import { Component } from '@angular/core';
import { ThemeList, ThemeService } from '@app/@core/services/theme';
import { ROUTER_UTILS } from '@app/@core/utils/router.utils';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [MessageService]
})
export class HomePage {
  path = ROUTER_UTILS.config;
  theme = ThemeList;

  constructor(private themeService: ThemeService, private messageService: MessageService, private primengConfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

  }

  onClickChangeTheme(theme: ThemeList): void {
    this.themeService.setTheme(theme);
  }

  showSuccess(): void {
    // TODO move to auth service
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logged in successfully' });
  }

  // ngAfterViewInit() {
  //   this.showSuccess();
  // }

}
