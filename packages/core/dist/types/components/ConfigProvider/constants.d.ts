import { ConfigProviderProps } from './types';
import { InjectionKey, Ref } from 'vue';

export type ConfigProviderContext = Partial<ConfigProviderProps>;
export declare const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>>;
