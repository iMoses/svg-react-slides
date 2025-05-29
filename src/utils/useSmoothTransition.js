import { useEffect, useRef, useState } from "react";

export function useSmoothTransition(targetValue, options = {}) {
  const { duration = 200, easing = (t) => t } = options;

  const [currentValue, setCurrentValue] = useState(targetValue);
  const startValueRef = useRef(targetValue);
  const startTimeRef = useRef(performance.now());

  useEffect(() => {
    if (targetValue === currentValue) return;

    startValueRef.current = currentValue;
    startTimeRef.current = performance.now();

    const step = (now) => {
      const elapsed = now - startTimeRef.current;

      if (elapsed >= duration) {
        return setCurrentValue(targetValue);
      }

      const nextValue =
        startValueRef.current +
        (targetValue - startValueRef.current) *
          easing(Math.min(elapsed / duration, 1));

      if (nextValue !== currentValue) {
        setCurrentValue(nextValue);
      }

      rafId = requestAnimationFrame(step);
    };

    let rafId = requestAnimationFrame(step);

    return () => {
      if (rafId != null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [targetValue, duration, easing]);

  return currentValue;
}
