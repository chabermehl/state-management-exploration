import { useSetAtom } from "jotai";
import { counterAtom } from "./atoms";

export const Incrementer = () => {
  const setCount = useSetAtom(counterAtom);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increment +</button>
    </div>
  );
};
