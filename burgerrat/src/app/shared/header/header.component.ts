import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('mobile-menu', [
      state('open', style({
        transform: 'translateX(0%)',
        visibility: 'visible'
      })),
      state('closed', style({
        transform: 'translateX(100%)',
        visibility: 'hidden'
      })),
      transition('open => closed', [
        animate('0.2s ease-in-out')
      ]),
      transition('closed => open', [
        animate('0.2s ease-in-out')
      ])
    ])
  ]
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    console.log('toggling!')
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
