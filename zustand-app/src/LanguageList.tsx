import {useRef} from 'react';
import {useLanguages} from './languageStore';

export const LanguageList = () => {
  const reRenderCounter = useRef(0);
  const languages = useLanguages();

  reRenderCounter.current++;

  console.log('Display --->', reRenderCounter.current);

  return (
    <div>
      {languages.map((lang) => {
        return <div key={lang}>{lang}</div>;
      })}
    </div>
  );
};
