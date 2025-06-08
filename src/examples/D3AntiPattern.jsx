import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function BarChart({
  data,
  width = 400,
  height = 200,
  padding = 10,
}) {
  const ref = useRef();

  useEffect(() => {
    const innerWidth = width - padding * 2;
    const innerHeight = height - padding * 2;

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, innerWidth])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([innerHeight, 0]);

    d3.select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${padding},${padding})`)
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.label))
      .attr("y", (d) => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", (d) => innerHeight - y(d.value))
      .attr("fill", "steelblue");
  }, []);

  return <svg ref={ref} />;
}
