import { Language, TranslatePair } from '@ee-ui/locale';

export interface ConfigProviderProps {
    locale?: Language;
    extendsI18nMsg?: TranslatePair;
}
