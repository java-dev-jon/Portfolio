import { AfterViewInit, Directive, ElementRef, Inject, Input, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input() appScrollRevealDelay = 0;

  private observer?: IntersectionObserver;

  constructor(
    private readonly element: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {}

  ngAfterViewInit(): void {
    const target = this.element.nativeElement;
    target.classList.add('scroll-reveal');
    target.style.setProperty('--reveal-delay', `${this.appScrollRevealDelay}ms`);

    if (!isPlatformBrowser(this.platformId) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      target.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        target.classList.toggle('is-visible', entry.isIntersecting);
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px' }
    );

    this.observer.observe(target);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
