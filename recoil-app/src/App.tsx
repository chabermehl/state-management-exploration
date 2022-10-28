import React from "react";
import {atom, RecoilRoot, selector, useRecoilState, useRecoilValue} from 'recoil'

const textState = atom({
  key: 'textState',
  default: '',
});

const charCountState = selector({
  key: 'charCountState', 
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});

const TextInput: React.FC = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

const CharacterCount: React.FC = () => {
  const count = useRecoilValue(charCountState);

  return <React.Fragment>Character Count: {count}</React.Fragment>;
}

const CharacterCounter: React.FC = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}



const App: React.FC = () => {
  return (
   <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
};

export default App;
