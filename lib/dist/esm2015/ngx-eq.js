import { Directive, ElementRef, HostBinding, ChangeDetectorRef, Inject, NgModule } from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxEqDirective {
    /**
     * @param {?} elementRef
     * @param {?} ref
     * @param {?} config
     */
    constructor(elementRef, ref, config) {
        this.elementRef = elementRef;
        this.ref = ref;
        this.config = config;
        this.ngxEQ = true;
        this.small = false;
        this.medium = false;
        this.large = false;
        this.extraLarge = false;
        const /** @type {?} */ element = this.elementRef.nativeElement;
        this.changes = new ResizeObserver(entries => {
            for (const /** @type {?} */ entry of entries) {
                const /** @type {?} */ width = entry.contentRect.width;
                this.reset();
                if (width >= config.small) {
                    this.small = true;
                }
                if (width >= config.medium) {
                    this.medium = true;
                }
                if (width >= config.large) {
                    this.large = true;
                }
                if (width >= config.extraLarge) {
                    this.extraLarge = true;
                }
            }
            this.ref.detectChanges();
        });
        this.changes.observe(element);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.changes.disconnect();
    }
    /**
     * @return {?}
     */
    reset() {
        this.small = false;
        this.medium = false;
        this.large = false;
        this.extraLarge = false;
    }
}
NgxEqDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxEQ]'
            },] },
];
/** @nocollapse */
NgxEqDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
    { type: undefined, decorators: [{ type: Inject, args: ['config',] },] },
];
NgxEqDirective.propDecorators = {
    "ngxEQ": [{ type: HostBinding, args: ['class.ngx-eq',] },],
    "small": [{ type: HostBinding, args: ['class.ngx-eq-sm',] },],
    "medium": [{ type: HostBinding, args: ['class.ngx-eq-md',] },],
    "large": [{ type: HostBinding, args: ['class.ngx-eq-lg',] },],
    "extraLarge": [{ type: HostBinding, args: ['class.ngx-eq-xl',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

const defaultConfig = {
    small: 480,
    medium: 720,
    large: 960,
    extraLarge: 1440
};
class NgxEqModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: NgxEqModule,
            providers: [
                { provide: 'config', useValue: Object.assign({}, defaultConfig, config) }
            ]
        };
    }
}
NgxEqModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    NgxEqDirective
                ],
                exports: [
                    NgxEqDirective
                ]
            },] },
];
/** @nocollapse */
NgxEqModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { defaultConfig, NgxEqModule, NgxEqDirective as ɵa };
//# sourceMappingURL=ngx-eq.js.map
