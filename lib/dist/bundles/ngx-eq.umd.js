(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('resize-observer-polyfill'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'resize-observer-polyfill', '@angular/common'], factory) :
	(factory((global['ngx-eq'] = {}),global.ng.core,global.ResizeObserver,global.ng.common));
}(this, (function (exports,core,ResizeObserver,common) { 'use strict';

ResizeObserver = ResizeObserver && ResizeObserver.hasOwnProperty('default') ? ResizeObserver['default'] : ResizeObserver;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */









function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

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
    { type: core.Directive, args: [{
                selector: '[ngxEQ]'
            },] },
];
NgxEqDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.ChangeDetectorRef, },
    { type: undefined, decorators: [{ type: core.Inject, args: ['config',] },] },
]; };
NgxEqDirective.propDecorators = {
    "ngxEQ": [{ type: core.HostBinding, args: ['class.ngx-eq',] },],
    "small": [{ type: core.HostBinding, args: ['class.ngx-eq-sm',] },],
    "medium": [{ type: core.HostBinding, args: ['class.ngx-eq-md',] },],
    "large": [{ type: core.HostBinding, args: ['class.ngx-eq-lg',] },],
    "extraLarge": [{ type: core.HostBinding, args: ['class.ngx-eq-xl',] },],
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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

exports.defaultConfig = defaultConfig;
exports.NgxEqModule = NgxEqModule;
exports.ɵa = NgxEqDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-eq.umd.js.map
