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

  destacarSecao(id: string, event: Event): void {
  event.preventDefault();
  const elemento = document.getElementById(id);
  if (!elemento) return;
  elemento.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
  });
  elemento.classList.remove('highlight');
  setTimeout(() => {
      elemento.classList.add('highlight');
      setTimeout(() => {
          elemento.classList.remove('highlight');
      }, 2000);
  }, 500);
  }
}