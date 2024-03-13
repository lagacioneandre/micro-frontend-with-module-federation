import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  private readonly router = inject(Router);

  products() {
    this.router.navigate(['products']);
  }

  users() {
    this.router.navigate(['users']);
  }
}
