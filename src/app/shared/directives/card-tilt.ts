import { Directive, ElementRef, inject, OnInit, OnDestroy, input } from '@angular/core';

@Directive({
  selector: '[appCardTilt]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mousemove)': 'onMouseMove($event)',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class CardTilt implements OnInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);

  // Configuration inputs
  maxTilt = input<number>(15);
  scale = input<number>(1.05);
  perspective = input<number>(1000);
  speed = input<number>(400);
  glare = input<boolean>(true);

  private isHovering = false;

  ngOnInit() {
    // Set initial styles
    const element = this.el.nativeElement;
    element.style.transition = `transform ${this.speed()}ms ease-out`;
    element.style.transformStyle = 'preserve-3d';
  }

  ngOnDestroy() {
    // Cleanup
  }

  onMouseEnter() {
    this.isHovering = true;
    const element = this.el.nativeElement;
    element.style.transition = `transform ${this.speed()}ms ease-out`;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isHovering) return;

    const element = this.el.nativeElement;
    const rect = element.getBoundingClientRect();

    // Calculate mouse position relative to element center
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation based on mouse position (-1 to 1)
    const rotateX = ((y - centerY) / centerY) * this.maxTilt();
    const rotateY = ((centerX - x) / centerX) * this.maxTilt();

    // Apply 3D transform
    element.style.transform = `
      perspective(${this.perspective()}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(${this.scale()}, ${this.scale()}, ${this.scale()})
    `;

    // Add glare effect
    if (this.glare()) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;

      element.style.background = `
        radial-gradient(
          circle at ${glareX}% ${glareY}%,
          rgba(255,255,255,0.1) 0%,
          transparent 50%
        )
      `;
      element.style.backgroundBlendMode = 'overlay';
    }
  }

  onMouseLeave() {
    this.isHovering = false;
    const element = this.el.nativeElement;

    // Reset transform with smooth transition
    element.style.transition = `transform ${this.speed()}ms ease-out`;
    element.style.transform = `
      perspective(${this.perspective()}px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `;

    // Remove glare
    if (this.glare()) {
      element.style.background = '';
    }
  }
}
