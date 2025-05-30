// No easing
export const linear = (t) => t;

// Quadratic easing
export const easeIn = (t) => t ** 2;
export const easeOut = (t) => 1 - (1 - t) ** 2;
export const easeInOut = (t) =>
  t < 0.5 ? 2 * t ** 2 : 1 - (-2 * t + 2) ** 2 / 2;

// Cubic easing
export const easeInCubic = (t) => t ** 3;
export const easeOutCubic = (t) => 1 - (1 - t) ** 3;
export const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2;

// Quartic easing
export const easeInQuart = (t) => t ** 4;
export const easeOutQuart = (t) => 1 - (1 - t) ** 4;
export const easeInOutQuart = (t) =>
  t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2;

// Quintic easing
export const easeInQuint = (t) => t ** 5;
export const easeOutQuint = (t) => 1 - (1 - t) ** 5;
export const easeInOutQuint = (t) =>
  t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2;

// Bounce easing
export const easeInBounce = (t) => 1 - easeOutBounce(1 - t);
export const easeOutBounce = (t) => {
  const n1 = 7.5625;
  const d1 = 2.75;

  return t < 1 / d1
    ? n1 * t * t
    : t < 2 / d1
      ? n1 * (t -= 1.5 / d1) * t + 0.75
      : t < 2.5 / d1
        ? n1 * (t -= 2.25 / d1) * t + 0.9375
        : n1 * (t -= 2.625 / d1) * t + 0.984375;
};
export const easeInOutBounce = (t) =>
  t < 0.5
    ? (1 - easeOutBounce(1 - 2 * t)) / 2
    : (1 + easeOutBounce(2 * t - 1)) / 2;
