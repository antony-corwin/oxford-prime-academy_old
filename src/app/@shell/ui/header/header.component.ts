import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_UTILS } from '@app/@core/utils/router.utils';
import { AuthService } from '@app/pages/auth/services/auth.service';
import { MenuItem, SelectItemGroup } from 'primeng/api';
import { PrimengThemeService } from '@core/services/primeng-theme/primeng-theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  path = ROUTER_UTILS.config.base;
  selectedTheme: string;
  themes: SelectItemGroup[];
  items: MenuItem[];
  searchValue: string = '';

  constructor(private router: Router, private authService: AuthService, private primengThemeService: PrimengThemeService) {
    this.selectedTheme = '';

    this.themes = [
      {
        label: 'Fluent', value: 'fluent',
        items: [
          {label: 'Light (default)', value: 'fluent-light'},
        ]
      },
      {
        label: 'Material Design Light', value: 'md-light',
        items: [
          {label: 'DeepPurple', value: 'md-light-deeppurple'},
          {label: 'Indigo', value: 'md-light-indigo'},
          {label: 'DeepPurple Compact', value: 'mdc-light-deeppurple'},
          {label: 'Indigo Compact', value: 'mdc-light-indigo'},
        ]
      },
      {
        label: 'Material Design Dark', value: 'md-dark',
        items: [
          {label: 'DeepPurple', value: 'md-dark-deeppurple'},
          {label: 'Indigo', value: 'md-dark-indigo'},
          {label: 'DeepPurple Compact', value: 'mdc-dark-deeppurple'},
          {label: 'Indigo Compact', value: 'mdc-dark-indigo'},
        ]
      },
      {
        label: 'Bootstrap 4', value: 'bootstrap',
        items: [
          {label: 'Light Blue', value: 'bootstrap4-light-blue'},
          {label: 'Light Purple', value: 'bootstrap4-light-purple'},
          {label: 'Dark Blue', value: 'bootstrap4-dark-blue'},
          {label: 'Dark Purple', value: 'bootstrap4-dark-purple'},
        ]
      },
      {
        label: 'Nova', value: 'nova',
        items: [
          {label: 'Nova', value: 'nova'},
          {label: 'Nova Accent', value: 'nova-accent'},
          {label: 'Nova Alt', value: 'nova-alt'},
        ]
      },
      {
        label: 'Rhea', value: 'rhea',
        items: [
          {label: 'Rhea', value: 'rhea'},
        ]
      },
      {
        label: 'Luna', value: 'luna',
        items: [
          {label: 'Luna Amber', value: 'luna-amber'},
          {label: 'Luna Blue', value: 'luna-blue'},
          {label: 'Luna Green', value: 'luna-green'},
          {label: 'Luna Pink', value: 'luna-pink'},
        ]
      },
      {
        label: 'Arya', value: 'arya',
        items: [
          {label: 'Blue', value: 'arya-blue'},
          {label: 'Green', value: 'arya-green'},
          {label: 'Orange', value: 'arya-orange'},
          {label: 'Purple', value: 'arya-purple'},
        ]
      },
      {
        label: 'Saga', value: 'saga',
        items: [
          {label: 'Blue', value: 'saga-blue'},
          {label: 'Green', value: 'saga-green'},
          {label: 'Orange', value: 'saga-orange'},
          {label: 'Purple', value: 'saga-purple'},
        ]
      },
      {
        label: 'Vela', value: 'vela',
        items: [
          {label: 'Blue', value: 'vela-blue'},
          {label: 'Green', value: 'vela-green'},
          {label: 'Orange', value: 'vela-orange'},
          {label: 'Purple', value: 'vela-purple'},
        ]
      },
    ];

    this.items = [
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user'
      },
      {
        label: 'Log out',
        icon: 'pi pi-fw pi-power-off',
        command: (event) => {
          this.onClickSignOut();
        }
      }
    ];
  }

  changeTheme(event: any): void {
    // console.log(event);
    const theme = event.value;
    this.primengThemeService.switchTheme(theme);
  }

  onClickSignOut(): void {
    this.authService.signOut();

    const { root, signIn } = ROUTER_UTILS.config.auth;
    this.router.navigate(['/', root, signIn]);
  }
}
