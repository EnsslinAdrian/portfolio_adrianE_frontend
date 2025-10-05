import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[fadeUp]'
})
export class FadeUpDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    gsap.fromTo(this.el.nativeElement,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: this.el.nativeElement,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }
}
