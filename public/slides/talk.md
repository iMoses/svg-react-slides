# Drawing Data with React and SVG
React Summit 2025  
Ido Moshe

---

## Why Charts?

- Data is everywhere
- Most teams reach for a library
- But what if you don't need one?

Note: Briefly explain the talk’s motivation. Emphasize approachability.

---

## The Power of D3

```js
import { scaleLinear } from 'd3-scale';

const x = scaleLinear()
  .domain([0, 100])
  .range([0, 400]);
