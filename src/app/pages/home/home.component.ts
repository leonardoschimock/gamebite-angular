import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { signal } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        RouterLink
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
    currentSlide = signal(0);
    intervalId: any;
    busca = '';
    nome = '';
    email = '';
    jogo = '';
    mensagem = '';
    mensagemFormulario = '';
    corMensagem = 'red';
    slides = [
        {
            src: '/assets/images/overcookedBanner.jpg',
            alt: 'Overcooked'
        },
        {
            src: '/assets/images/minecraftBanner.jpg',
            alt: 'Minecraft'
        },
        {
            src: '/assets/images/stardewBanner.jpg',
            alt: 'Stardew Valley'
        }
    ];
    jogos = [
        {
            nome: 'Minecraft',
            rota: '/minecraft',
            imagem: '/assets/images/cardMine.jpg',
            descricao:
                'Jogo de sandbox criativo onde jogadores exploram mundos infinitos, constroem estruturas, sobrevivem a perigos e liberam imaginação em aventuras únicas.'
        },
        {
            nome: 'OverCooked',
            rota: '/overcooked',
            imagem: '/assets/images/cardOvercooked.jpg',
            descricao:
                'Jogo cooperativo caótico de culinária onde equipes preparam pratos rapidamente, coordenando tarefas sob pressão crescente em cozinhas malucas e desafiadoras.'
        },
        {
            nome: 'Stardew Valley',
            rota: '/stardew',
            imagem: '/assets/menuReceitas/StardewValley/stardewvalleyIcon.jpg',
            descricao:
                'Simulador relaxante de fazenda onde jogador cultiva plantações, cria animais, faz amizades, explora cavernas e desenvolve vida tranquila no campo.'
        }
    ];
    ngOnInit(): void {
        window.scrollTo(0, 0);
        this.intervalId = setInterval(() => {
            this.nextSlide();
        }, 3000);
    }
    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }
    nextSlide(): void {
    this.currentSlide.update(
        value => (value + 1) % this.slides.length
    );
    }
    prevSlide(): void {
    this.currentSlide.update(
        current => current === 0
        ? this.slides.length - 1
        : current - 1
    );
    }

    get jogosFiltrados() {
        return this.jogos.filter(jogo =>
            (
                jogo.nome +
                jogo.descricao
            )
                .toLowerCase()
                .includes(this.busca.toLowerCase())
        );
    }

    enviarFormulario(): void {
        if (
            !this.nome.trim() ||
            !this.email.trim() ||
            !this.jogo.trim() ||
            !this.mensagem.trim()
        ) {
            this.corMensagem = 'red';
            this.mensagemFormulario =
                'Preencha todos os campos!';
            return;
        }
        if (
            !this.email.includes('@') ||
            !this.email.includes('.')
        ) {
            this.corMensagem = 'red';
            this.mensagemFormulario =
                'Email inválido!';
            return;
        }
        this.corMensagem = 'lightgreen'
        this.mensagemFormulario =
            'Sugestão enviada com sucesso! 🎉';
        this.nome = '';
        this.email = '';
        this.jogo = '';
        this.mensagem = '';
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