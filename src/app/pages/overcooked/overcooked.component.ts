import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overcooked',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './overcooked.component.html',
  styleUrl: './overcooked.component.css'
})

export class OvercookedComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}