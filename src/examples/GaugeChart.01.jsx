import { scaleLinear } from "d3-scale";

export function GaugeChart({ value = 0, width = 200, height = 120 }) {
  const angleScale = scaleLinear()
    .domain([0, 100])
    .range([-90, 90])
    .clamp(true);

  return (
    <svg width={width} height={height} viewBox="0 0 200 120">
      <g transform={`translate(100,100)`}>
        <g stroke="#999" strokeWidth="2">
          {[-75, -50, -25, 0, 25, 50, 75].map((angle, i) => (
            <g key={angle} transform={`rotate(${angle})`}>
              <line x1="0" y1="-80" x2="0" y2={i % 2 ? -60 : -65} />
            </g>
          ))}
        </g>

        <path
          d="M-80,0 A80,80 0 0,1 80,0"
          fill="none"
          stroke="#333"
          strokeWidth="5"
        />

        <g transform={`rotate(${angleScale(value)})`} fill="#464a4f">
          <circle r="5" />
          <path d="M-5,0H5L0,-38Z" />
        </g>
      </g>
    </svg>
  );
}
