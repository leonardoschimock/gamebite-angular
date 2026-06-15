import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-minecraft',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './minecraft.component.html',
  styleUrl: './minecraft.component.css'
})

export class MinecraftComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}