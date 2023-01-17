import React from "react";
import { LanguageActions } from "./LanguageActions";
import { LanguageList } from "./LanguageList";

const App: React.FC = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      width: '90%',
      placeItems: "center"
    }}>
      <div>
        <LanguageList />
      </div>
      <div>
        <LanguageActions />
      </div>
    </div>
  );
};

export default App;
