import en from './langs/en.json';
import zh from './langs/zh.json';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'zh',
    fallbackLocale: 'zh',
    messages: {
        en: en,
        zh: zh
    }
}))