import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
    currentSlide = 0;

    intervalId: any;

    slides = [
        {
        src: '/assets/images/overcookedBanner.jpg',
        alt: 'Overcooked',
        },
        {
        src: '/assets/images/minecraftBanner.jpg',
        alt: 'Minecraft',
        },
        {
        src: '/assets/images/stardewBanner.jpg',
        alt: 'Stardew Valley',
        },
    ];

    ngOnInit(): void {
        this.intervalId = setInterval(() => {
        this.nextSlide();
        }, 5000);

        this.configurarBusca();
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }

    nextSlide(): void {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }

    prevSlide(): void {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    }

    configurarBusca(): void {
        setTimeout(() => {
        const input = document.getElementById('searchInput') as HTMLInputElement;

        const cards = document.querySelectorAll('.card-link');

        if (!input) return;

        input.addEventListener('input', () => {
            const termo = input.value.toLowerCase();

            cards.forEach((card) => {
            const titulo = card.querySelector('h3')?.textContent?.toLowerCase() || '';

            (card as HTMLElement).style.display = titulo.includes(termo) ? 'block' : 'none';
            });
        });
        });
    }
}
