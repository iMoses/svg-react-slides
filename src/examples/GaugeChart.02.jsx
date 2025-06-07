import { scaleLinear } from "d3-scale";
import { arc } from "d3-shape";
import { useId } from "react";
import styled from "styled-components";

const defaultGradientSteps = [
  "#D72638", // Very Bad - red
  "#F46036", // Bad - orange-red
  "#FFBD00", // Moderate - amber
  "#A1E44D", // Good - yellow-green
  "#06D6A0", // Very Good - green
];

export function GaugeChart({
  label,
  value = 0,
  start = 0,
  end = 100,
  gradientSteps = defaultGradientSteps,
}) {
  const id = useId();

  const angleScale = scaleLinear()
    .domain([start, end])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true);

  const gaugeArc = arc()
    .innerRadius(0.7)
    .outerRadius(1)
    .startAngle(-Math.PI / 2);

  return (
    <Container>
      <svg width="200" viewBox="-1 -1 2 1">
        <defs>
          <linearGradient
            id={`gauge-gradient-${id}`}
            gradientUnits="userSpaceOnUse"
            x1="-1"
            x2="1"
          >
            {gradientSteps.map((color, index) => (
              <stop
                key={color}
                stopColor={color}
                offset={`${index / (gradientSteps.length - 1)}`}
              />
            ))}
          </linearGradient>
        </defs>
        <path d={gaugeArc({ endAngle: Math.PI / 2 })} fill="#dbdbe7" />
        <path
          d={gaugeArc({ endAngle: angleScale(value) })}
          fill={`url(#gauge-gradient-${id})`}
        />
      </svg>

      <Value>{value}</Value>

      {label != null && <Label>{label}</Label>}
    </Container>
  );
}

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const Value = styled.div`
  font-size: 3em;
  font-weight: 800;
  line-height: 1em;
  margin-top: -1em;
`;

const Label = styled.div`
  color: #8b8ba7;
  font-weight: 300;
  line-height: 1.3em;
`;
