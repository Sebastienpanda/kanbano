import { Component, signal, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Card {
  id: number;
  title: string;
  column: number;
  color: string;
}

@Component({
  selector: 'app-demo',
  imports: [CommonModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Demo implements OnInit, OnDestroy {
  protected isPlaying = signal(true);
  protected currentCardIndex = signal(0);

  protected columns = [
    { id: 0, name: 'À faire', color: 'from-blue-500/20 to-blue-600/20' },
    { id: 1, name: 'En cours', color: 'from-yellow-500/20 to-yellow-600/20' },
    { id: 2, name: 'Terminé', color: 'from-green-500/20 to-green-600/20' },
  ];

  protected cards = signal<Card[]>([
    { id: 1, title: 'Design système', column: 0, color: 'primary' },
    { id: 2, title: 'API REST', column: 0, color: 'secondary' },
    { id: 3, title: 'Tests unitaires', column: 1, color: 'accent' },
    { id: 4, title: 'Documentation', column: 2, color: 'success' },
  ]);

  private animationInterval?: number;

  ngOnInit() {
    this.startAnimation();
  }

  ngOnDestroy() {
    this.stopAnimation();
  }

  togglePlayPause() {
    if (this.isPlaying()) {
      this.stopAnimation();
    } else {
      this.startAnimation();
    }
    this.isPlaying.update(v => !v);
  }

  getCardsInColumn(columnId: number): Card[] {
    return this.cards().filter(card => card.column === columnId);
  }

  private startAnimation() {
    this.animationInterval = window.setInterval(() => {
      this.moveNextCard();
    }, 2500);
  }

  private stopAnimation() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
      this.animationInterval = undefined;
    }
  }

  private moveNextCard() {
    const currentCards = this.cards();
    const cardsToMove = currentCards.filter(card => card.column < 2);

    if (cardsToMove.length === 0) {
      // Reset all cards to first column
      this.cards.update(cards =>
        cards.map(card => ({ ...card, column: 0 }))
      );
      this.currentCardIndex.set(0);
      return;
    }

    // Move the next card to the right
    const cardIndex = this.currentCardIndex() % cardsToMove.length;
    const cardToMove = cardsToMove[cardIndex];

    this.cards.update(cards =>
      cards.map(card =>
        card.id === cardToMove.id
          ? { ...card, column: card.column + 1 }
          : card
      )
    );

    this.currentCardIndex.update(i => i + 1);
  }
}
