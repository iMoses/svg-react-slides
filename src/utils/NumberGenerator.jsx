import { useEffect, useState } from "react";
import { useSmoothTransition } from "./useSmoothTransition";

export function NumberGenerator({
  start = 0,
  end = 1,
  round = false,
  interval = 2000,
  children,
}) {
  const [value, setValue] = useState(start);
  const animatedValue = useSmoothTransition(value);

  useEffect(() => {
    const rand = () => Math.random() * (end - start) + start;
    const timerId = setInterval(() => setValue(rand()), interval);
    setValue(rand());
    return () => clearInterval(timerId);
  }, [start, end, interval]);

  return children(round ? Math.round(animatedValue) : animatedValue);
}
