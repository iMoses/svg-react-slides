import React, { useMemo } from "react";
import { scaleBand, scaleLinear } from "d3-scale";

export default function BarChart({
  data,
  width = 400,
  height = 200,
  padding = 10,
}) {
  const bars = useMemo(() => {
    const innerWidth = width - padding * 2;
    const innerHeight = height - padding * 2;

    const x = scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, innerWidth])
      .padding(0.2);

    const y = scaleLinear()
      .domain([0, Math.max(...data.map((d) => d.value))])
      .range([innerHeight, 0]);

    return data.map((d) => ({
      x: x(d.label),
      y: y(d.value),
      width: x.bandwidth(),
      height: innerHeight - y(d.value),
    }));
  }, [data, width, height, padding]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${padding},${padding})`}>
        {bars.map((bar, i) => (
          <rect key={i} fill="steelblue" {...bar} />
        ))}
      </g>
    </svg>
  );
}
