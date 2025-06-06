import { scaleOrdinal } from "d3-scale";
import { arc, pie } from "d3-shape";
import styled from "styled-components";

const defaultColors = [
  "#4e79a7",
  "#f28e2c",
  "#e15759",
  "#76b7b2",
  "#59a14f",
  "#edc949",
  "#af7aa1",
  "#ff9da7",
  "#9c755f",
  "#bab0ab",
];

export function DonutChart({
  data,
  width = 280,
  height = 280,
  colorScheme = defaultColors,
}) {
  const radius = Math.min(width, height) / 2;

  const color = scaleOrdinal(
    data.map((d) => d.category),
    colorScheme,
  );

  const toPie = pie()
    .sort(null)
    .value((d) => d.value);

  const toArc = arc()
    .innerRadius(radius * 0.6)
    .outerRadius(radius);

  return (
    <svg width={width} height={height}>
      <PieGroup transform={`translate(${width / 2},${height / 2})`}>
        {toPie(data).map((d) => (
          <ArcGroup key={d.index} style={{ "--arc-radius": radius }}>
            <clipPath id={`pie-clip-${d.index}`}>
              <circle />
            </clipPath>
            <path
              d={toArc(d)}
              fill={color(d.data.category)}
              clipPath={`url(#pie-clip-${d.index})`}
            />
          </ArcGroup>
        ))}
      </PieGroup>
    </svg>
  );
}

const PieGroup = styled.g`
  stroke: white;
  stroke-width: 1;
  fill-opacity: 0.8;
`;

const ArcGroup = styled.g`
  circle {
    r: calc(var(--arc-radius) * 0.9);
    transition: r 200ms cubic-bezier(0.45, 0, 0.55, 1);
  }

  &:hover circle {
    r: var(--arc-radius);
  }
`;
