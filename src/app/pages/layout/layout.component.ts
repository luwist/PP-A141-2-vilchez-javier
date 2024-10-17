import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '@app/services';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  currentUser: any = null;

  constructor(authService: AuthService) {
    this.currentUser = authService.currentUser;
  }

  onLogout(): void {
    this.currentUser = null;
  }
}
