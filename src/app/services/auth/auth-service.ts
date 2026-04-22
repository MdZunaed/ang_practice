import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  
  private isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUserData(){
    return {
      id: 'g23jhdfku35h6tk',
      name: 'John Doe',
      email: 'john@gmail.com'
    }
  }
}
