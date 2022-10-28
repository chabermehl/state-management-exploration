import { useSetAtom } from "jotai";
import { counterAtom } from "./atoms";

export const Decrementer = () => {
  const setCount = useSetAtom(counterAtom);

  return (
    <div>
      <button onClick={() => setCount((c) => c - 1)}>Decrementer +</button>
    </div>
  );
};
