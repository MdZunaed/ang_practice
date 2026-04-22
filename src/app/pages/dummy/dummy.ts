import { NgIf } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dummy',
  imports: [FormsModule, RouterLink],
  templateUrl: './dummy.html',
  styleUrl: './dummy.scss',
})
export class Dummy {
  appName: string = "Kray";
  appVersion: number | string = 1.0;
  randomVariable: any = 10;
  inputName: string = "";
  nameByButton: string = "";
  nameByRef: string = "";
  showContainer = true;
  vegetables = ['Potato', 'Tomato', 'Cucumber', 'Carrot', 'Onion'];
  count = signal(0);
  twoWayName = '';

  constructor(private router: Router) {
    effect(() => {
      console.log("Updated counter:" + this.count);
    });
  }

  setInputName(event: Event) {
    this.inputName = (event.target as HTMLInputElement).value;
  }

  setNameByButton() {
    this.nameByButton = this.inputName;
  }

  setNameByRef(byRef: string) {
    this.nameByRef = byRef;
  }
  toggleContainer() {
    this.showContainer = !this.showContainer;
  }

  incrementCounter() {
    this.count.set(this.count() + 1);
  }
  decrementCounter() {
    this.count.set(this.count() - 1);
  }


  goToProfile() {
    this.router.navigate(['profile'], { queryParams: { id: this.count(), name: this.twoWayName } });
  }
}
