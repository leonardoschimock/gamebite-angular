import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overcooked',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './stardew.component.html',
  styleUrl: './stardew.component.css'
})
export class StardewComponent {}