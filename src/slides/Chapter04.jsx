export function Chapter04() {
  return (
    <section>
      <section>
        <h2>What is d3 Good At?</h2>
        <ul>
          <li className="fragment">Data → Geometry</li>
          <li className="fragment">Scales and transforms</li>
          <li className="fragment">
            Shape generators (e.g. <code>line</code>, <code>arc</code>)
          </li>
          <li className="fragment">
            Layout algorithms (e.g. <code>stack</code>, <code>pie</code>)
          </li>
        </ul>
      </section>

      <section>
        <h2>Using d3 in React</h2>
        <p>d3 can do the math — React can render the DOM.</p>
        <ul>
          <li className="fragment">Avoid letting d3 mutate the DOM</li>
          <li className="fragment">Use d3 utilities for calculations only</li>
          <li className="fragment">
            Render everything declaratively with React
          </li>
        </ul>
      </section>

      <section>
        <h2>Core d3 Tools We Use</h2>
        <ul>
          <li className="fragment">
            <code>scaleLinear</code> – map data to pixels
          </li>
          <li className="fragment">
            <code>line</code> – generate SVG paths from points
          </li>
          <li className="fragment">
            <code>arc</code> – generate arcs and sectors
          </li>
          <li className="fragment">
            <code>pie</code> – compute angles for pie charts
          </li>
        </ul>
      </section>

      <section>
        <h2>d3 in This Talk</h2>
        <ul>
          <li className="fragment">
            Line chart: <code>scaleLinear</code> + <code>line</code>
          </li>
          <li className="fragment">
            Pie chart: <code>pie</code> + <code>arc</code>
          </li>
          <li className="fragment">
            Gauge chart: <code>scaleLinear</code> to rotate the needle
          </li>
        </ul>
      </section>
    </section>
  );
}
