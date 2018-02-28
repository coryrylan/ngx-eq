import { __values } from 'tslib';
import { Directive, ElementRef, HostBinding, ChangeDetectorRef, Inject, NgModule } from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';
import { CommonModule } from '@angular/common';

var NgxEqDirective = /** @class */ (function () {
    function NgxEqDirective(elementRef, ref, config) {
        var _this = this;
        this.elementRef = elementRef;
        this.ref = ref;
        this.config = config;
        this.ngxEQ = true;
        this.small = false;
        this.medium = false;
        this.large = false;
        this.extraLarge = false;
        var element = this.elementRef.nativeElement;
        this.changes = new ResizeObserver(function (entries) {
            try {
                for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                    var entry = entries_1_1.value;
                    var width = entry.contentRect.width;
                    _this.reset();
                    if (width >= config.small) {
                        _this.small = true;
                    }
                    if (width >= config.medium) {
                        _this.medium = true;
                    }
                    if (width >= config.large) {
                        _this.large = true;
                    }
                    if (width >= config.extraLarge) {
                        _this.extraLarge = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.ref.detectChanges();
            var e_1, _a;
        });
        this.changes.observe(element);
    }
    NgxEqDirective.prototype.ngOnDestroy = function () {
        this.changes.disconnect();
    };
    NgxEqDirective.prototype.reset = function () {
        this.small = false;
        this.medium = false;
        this.large = false;
        this.extraLarge = false;
    };
    return NgxEqDirective;
}());
NgxEqDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxEQ]'
            },] },
];
NgxEqDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
    { type: undefined, decorators: [{ type: Inject, args: ['config',] },] },
]; };
NgxEqDirective.propDecorators = {
    "ngxEQ": [{ type: HostBinding, args: ['class.ngx-eq',] },],
    "small": [{ type: HostBinding, args: ['class.ngx-eq-sm',] },],
    "medium": [{ type: HostBinding, args: ['class.ngx-eq-md',] },],
    "large": [{ type: HostBinding, args: ['class.ngx-eq-lg',] },],
    "extraLarge": [{ type: HostBinding, args: ['class.ngx-eq-xl',] },],
};
var defaultConfig = {
    small: 480,
    medium: 720,
    large: 960,
    extraLarge: 1440
};
var NgxEqModule = /** @class */ (function () {
    function NgxEqModule() {
    }
    NgxEqModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NgxEqModule,
            providers: [
                { provide: 'config', useValue: Object.assign({}, defaultConfig, config) }
            ]
        };
    };
    return NgxEqModule;
}());
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
NgxEqModule.ctorParameters = function () { return []; };

export { defaultConfig, NgxEqModule, NgxEqDirective as ɵa };
//# sourceMappingURL=ngx-eq.js.map
