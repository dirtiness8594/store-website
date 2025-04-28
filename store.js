import { create } from 'zustand';
import i18n from './i18n';

const useAppStore = create((set) => ({
    language: 'en',
    setLanguage: (lang) => {
        i18n.changeLanguage(lang);
        set({ language: lang });
    },
}));

export default useAppStore;
