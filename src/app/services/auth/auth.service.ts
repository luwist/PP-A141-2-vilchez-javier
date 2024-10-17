import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: any = null;

  login(account: any) {
    this.currentUser = account;
  }
}
