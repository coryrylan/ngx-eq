import { Directive, ElementRef, HostBinding, OnDestroy, ChangeDetectorRef } from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';

const enum Size {
  Small = 480,
  Medium = 720,
  Large = 960,
  ExtraLarge = 1440
}

@Directive({
  selector: '[ngxEQ]'
})
export class NgxEqDirective implements OnDestroy {
  @HostBinding('class.ngx-eq') ngxEQ = true;
  @HostBinding('class.ngx-eq-sm') small = false;
  @HostBinding('class.ngx-eq-md') medium = false;
  @HostBinding('class.ngx-eq-lg') large = false;
  @HostBinding('class.ngx-eq-xl') extraLarge = false;
  changes: ResizeObserver;

  constructor(private readonly elementRef: ElementRef, private ref: ChangeDetectorRef) {
    const element = this.elementRef.nativeElement;

    this.changes = new ResizeObserver(entries => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        this.reset();

        if (width >= Size.Small) {
          this.small = true;
        }

        if (width >= Size.Medium) {
          this.medium = true;
        }

        if (width >= Size.Large) {
          this.large = true;
        }

        if (width >= Size.ExtraLarge) {
          this.extraLarge = true;
        }

        this.ref.detectChanges();
      }
    });

    this.changes.observe(element);
  }

  ngOnDestroy() {
    this.changes.disconnect();
  }

  private reset() {
    this.small = false;
    this.medium = false;
    this.large = false;
    this.extraLarge = false;
  }
}
