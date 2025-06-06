import { dataset1, dataset2 } from "../data";
import { GaugeChart } from "../examples/GaugeChart.01";
import { LineChart } from "../examples/LineChart.02";
import { DonutChart } from "../examples/PieChart.02";
import { AgChartsLogo, AgGridLogo } from "../utils/helpers";

export function Chapter01() {
  return (
    <section>
      <section>
        <h2>Hi, I'm Ido</h2>
        <article>
          <p className="fragment">
            Full-stack developer at <AgGridLogo />
          </p>
          <p className="fragment">
            I work on charting tools <AgChartsLogo />
          </p>
          <p className="fragment">This talk is about simplicity</p>
        </article>
      </section>

      <section data-transition="zoom">
        <h2>
          Data Visualisation
          <br />
          with React and SVG
        </h2>
        <h4>Ido Moshe (iMoses)</h4>
      </section>

      <section>
        <h2>Why Not Use a Library?</h2>
        <ul>
          <li className="fragment">Full control over structure and style</li>
          <li className="fragment">Fits your data model exactly</li>
          <li className="fragment">No integration headaches</li>
        </ul>
      </section>

      <section>
        <h2>Downsides of Using a Library</h2>
        <ul>
          <li className="fragment">Unnecessary weight</li>
          <li className="fragment">Pre-baked assumptions</li>
          <li className="fragment">Debugging friction</li>
          <li className="fragment">Cognitive overhead</li>
          <li className="fragment">Overkill for basic cases</li>
        </ul>
      </section>

      <section>
        <h2>What Are We Building?</h2>
        <output style={{ display: "flex", alignItems: "center" }}>
          <LineChart data={dataset1} />
          <DonutChart data={dataset2} />
          <GaugeChart value="87" label="Benchmark" />
        </output>
        <p className="fragment">Let’s break it down step by step.</p>
        <p className="fragment">No libraries. Just SVG and React.</p>
      </section>
    </section>
  );
}
