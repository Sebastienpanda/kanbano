import { Component, input, ChangeDetectionStrategy } from '@angular/core';

export type SkeletonVariant = 'text' | 'circle' | 'rectangle' | 'card';

@Component({
  selector: 'app-skeleton',
  imports: [],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skeleton {
  variant = input<SkeletonVariant>('text');
  width = input<string>('100%');
  height = input<string>('1rem');
  count = input<number>(1);
  animation = input<boolean>(true);

  getClasses(): string {
    const classes = ['skeleton-base'];

    if (this.animation()) {
      classes.push('skeleton-animate');
    }

    switch (this.variant()) {
      case 'circle':
        classes.push('skeleton-circle');
        break;
      case 'rectangle':
        classes.push('skeleton-rectangle');
        break;
      case 'card':
        classes.push('skeleton-card');
        break;
      default:
        classes.push('skeleton-text');
    }

    return classes.join(' ');
  }

  getStyle(): Record<string, string> {
    const style: Record<string, string> = {
      width: this.width(),
      height: this.height(),
    };

    if (this.variant() === 'circle') {
      style['border-radius'] = '50%';
      style['aspect-ratio'] = '1';
    }

    return style;
  }

  getItems(): number[] {
    return Array.from({ length: this.count() }, (_, i) => i);
  }
}
