import {useRef} from 'react';
import {useLanguageActions, useLanguage} from './languageStore';

export const LanguageActions = () => {
  const reRenderCounter = useRef(0);
  const language = useLanguage();
  const actions = useLanguageActions();
  const {addLanguage, removeLanguage, setLanguage} = actions;

  reRenderCounter.current++;

  console.log('Actions --->', reRenderCounter.current);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <input value={language} onChange={(e) => setLanguage(e.target.value)} />
      <button onClick={() => addLanguage(language)}>Add Language</button>
      <button onClick={() => removeLanguage(language)}>Remove Language</button>
    </div>
  );
};
