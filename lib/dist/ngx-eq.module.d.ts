import { ModuleWithProviders } from '@angular/core';
export interface Config {
    small?: number;
    medium?: number;
    large?: number;
    extraLarge?: number;
}
export declare const defaultConfig: Config;
export declare class NgxEqModule {
    static forRoot(config?: {}): ModuleWithProviders;
}
