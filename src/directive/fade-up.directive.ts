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
    const element = this.el.nativeElement;

    // Falls das Element Bilder enthält
    const images = element.querySelectorAll('img');
    let imagesLoaded = 0;

    const initAnimation = () => {
      gsap.fromTo(
        element,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    };

    // Warten bis alle Bilder geladen sind
    if (images.length > 0) {
      images.forEach((img: HTMLImageElement) => {
        if (img.complete) {
          imagesLoaded++;
          if (imagesLoaded === images.length) initAnimation();
        } else {
          img.addEventListener('load', () => {
            imagesLoaded++;
            if (imagesLoaded === images.length) initAnimation();
          });
        }
      });
    } else {
      initAnimation();
    }
  }
}
