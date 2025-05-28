import { extent, scaleLinear } from "d3";
import styled from "styled-components";

export function LineChart({
  data,
  width = 450,
  height = 200,
  padding = 10,
  onClick,
  ...props
}) {
  const scaleX = scaleLinear()
    .domain(extent(data.map((d) => d.year)))
    .rangeRound([padding, width - padding]);

  const scaleY = scaleLinear()
    .domain(extent(data.map((d) => d.sales)))
    .rangeRound([height - padding, padding]);

  const points = data.map((d) => [scaleX(d.year), scaleY(d.sales)]);

  return (
    <svg width={width} height={height} {...props}>
      <polyline
        points={points.join(" ")}
        fill="none"
        stroke="steelblue"
        strokeWidth="2"
      />
      {points.map(([cx, cy], i) => (
        <Marker
          key={i}
          cx={cx}
          cy={cy}
          onClick={(event) => {
            onClick?.(data[i], event);
          }}
        />
      ))}
    </svg>
  );
}

const Marker = styled.circle`
  transition:
    fill 400ms,
    r 400ms;
  fill: maroon;
  r: 3;

  &:hover {
    fill: magenta;
    r: 6;
  }
`;
