import create from 'zustand';
import shallow from 'zustand/shallow';

type Language = string;
type Languages = Array<Language>;

interface IActions {
  addLanguage: (language: Language) => void;
  removeLanguage: (language: Language) => void;
  setLanguage: (language: Language) => void;
}

interface ILanguageStore {
  languages: Languages;
  language: Language;
  actions: IActions;
}

const useLanguageStore = create<ILanguageStore>((set) => ({
  languages: ['Rust', 'TypeScript', 'C#', 'CoffeeScript', 'Julia'],
  language: '',
  actions: {
    addLanguage: (language: Language) => {
      set((state) => {
        return {languages: [...state.languages, language]};
      });
    },
    removeLanguage: (language: Language) => {
      set((state) => {
        return {languages: state.languages.filter((lang) => lang !== language)};
      });
    },
    setLanguage: (language: Language) => {
      set(() => {
        return {language};
      });
    },
  },
}));

export const useLanguages = () => useLanguageStore((state) => state.languages, shallow);
export const useLanguage = () => useLanguageStore((state) => state.language, shallow);
export const useLanguageActions = () => useLanguageStore((state) => state.actions);
