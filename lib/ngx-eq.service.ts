import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import ResizeObserver from 'resize-observer-polyfill';

@Injectable()
export class NgxEqService {
  elements = { };
  resizeObserver: ResizeObserver;

  constructor() {
    this.resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
      }
    });
  }

  getChanges(el) {
    this.elements[el] = element;
    this.resizeObserver.observe(this.elements[el]);
  }

  stopChanges(el) {
    this.resizeObserver.unobserve(this.elements[el]);
  }
}
