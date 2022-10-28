import React from "react";

import { Counter } from "./Counter";
import { Incrementer } from "./Incrementer";
import { Decrementer } from "./Decrementer";

const App: React.FC = () => {
  return (
    <div>
      <Counter />
      <Incrementer />
      <Decrementer />
    </div>
  );
};

export default App;
