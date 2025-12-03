import {Directive, ElementRef, inject, Input, OnDestroy, OnInit} from '@angular/core';

@Directive({
    selector: '[appParallax]',
})
export class ParallaxDirective implements OnInit, OnDestroy {
    private el = inject(ElementRef<HTMLElement>);
    private speed = 0;
    private frameId?: number;

    @Input('appParallax')
    set parallaxSpeed(value: number | string) {
        this.speed = Number(value) || 0;
    }

    ngOnInit() {
        this.animate();
    }

    ngOnDestroy() {
        cancelAnimationFrame(this.frameId!);
    }

    private animate = () => {
        const offset = window.scrollY * this.speed;
        this.el.nativeElement.style.transform = `translateY(${offset}px)`;
        this.frameId = requestAnimationFrame(this.animate);
    };
}
