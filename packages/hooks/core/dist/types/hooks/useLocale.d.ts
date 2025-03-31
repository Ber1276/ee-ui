import { Ref } from 'vue';
import { I18nInstance } from 'vue3-i18n';
import { Language } from '@ee-ui/locale';

export declare function useLocale(localeOverrides?: Ref<Language>): Pick<I18nInstance, "messages" | "t" | "setLocale" | "getLocale">;
export default useLocale;
