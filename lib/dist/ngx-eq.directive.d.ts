import { ElementRef, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Config } from './ngx-eq.module';
export declare class NgxEqDirective implements OnDestroy {
    private readonly elementRef;
    private ref;
    private config;
    ngxEQ: boolean;
    small: boolean;
    medium: boolean;
    large: boolean;
    extraLarge: boolean;
    changes: ResizeObserver;
    constructor(elementRef: ElementRef, ref: ChangeDetectorRef, config: Config);
    ngOnDestroy(): void;
    private reset();
}
