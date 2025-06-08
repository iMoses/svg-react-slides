import { extent } from "d3-array";
import { scaleLinear } from "d3-scale";

export function LineChart({ data, width = 450, height = 200, padding = 10 }) {
  const scaleX = scaleLinear()
    .domain(extent(data.map((d) => d.year)))
    .rangeRound([padding, width - padding]);

  const scaleY = scaleLinear()
    .domain(extent(data.map((d) => d.sales)))
    .rangeRound([height - padding, padding]);

  const points = data.map((d) => [scaleX(d.year), scaleY(d.sales)]);

  return (
    <svg width={width} height={height}>
      <polyline
        points={points.join(" ")}
        stroke="steelblue"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
