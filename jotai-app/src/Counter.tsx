import { useAtom } from "jotai";
import { counterAtom } from "./atoms";

export const Counter = () => {
  const [count] = useAtom(counterAtom);
  return <div>{count}</div>;
};
