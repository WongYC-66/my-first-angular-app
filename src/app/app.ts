import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Material } from './material/material';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Material],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-material');
}
