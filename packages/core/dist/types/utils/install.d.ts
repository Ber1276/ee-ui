import { Plugin, Directive } from 'vue';

type SFCWithInstall<T> = T & Plugin;
export declare const withInstall: <T>(component: T) => SFCWithInstall<T>;
export declare const withInstallFunction: <T>(fn: T, name: string) => SFCWithInstall<T>;
export declare const withInstallDirective: <T extends Directive>(directive: T, name: string) => SFCWithInstall<T>;
export declare const withNoopInstall: <T>(component: T) => SFCWithInstall<T>;
export {};
