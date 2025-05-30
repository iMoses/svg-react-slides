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

export function PieChart({
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
          <path
            key={d.index}
            d={toArc(d)}
            r={radius}
            fill={color(d.data.category)}
          />
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
