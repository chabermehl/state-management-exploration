import React from "react";
import create from 'zustand'

type State = {
  bears: number;
  increasePopulation: () => any;
}

const useStore = create<State>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

const BearCounter = () => {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}

const Controls = () => {
  const increasePopulation = useStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}

const App: React.FC = () => {
  return (
    <div>
      <BearCounter />
      <Controls />
    </div>
  );
};

export default App;
