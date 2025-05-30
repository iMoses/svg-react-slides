// No easing
export const linear = (t) => t;

// Quadratic easing
export const easeIn = (t) => t * t;
export const easeOut = (t) => 1 - (1 - t) * (1 - t);
export const easeInOut = (t) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

// Cubic easing
export const easeInCubic = (t) => t * t * t;
export const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
export const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// Quartic easing
export const easeInQuart = (t) => t * t * t * t;
export const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
export const easeInOutQuart = (t) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

// Quintic easing
export const easeInQuint = (t) => t * t * t * t * t;
export const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);
export const easeInOutQuint = (t) =>
  t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
