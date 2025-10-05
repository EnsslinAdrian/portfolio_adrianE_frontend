import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MetaService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const route = this.getDeepestChild(this.activatedRoute);
      const data = route.snapshot.data;

      if (data['title']) {
        this.titleService.setTitle(data['title']);
        this.metaService.updateTag({ name: 'description', content: data['description'] || '' });

        this.metaService.updateTag({ property: 'og:title', content: data['title'] });
        this.metaService.updateTag({ property: 'og:description', content: data['description'] || '' });
        this.metaService.updateTag({ property: 'og:url', content: window.location.href });

        this.metaService.updateTag({ name: 'twitter:title', content: data['title'] });
        this.metaService.updateTag({ name: 'twitter:description', content: data['description'] || '' });
      }
    });
  }

  private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
