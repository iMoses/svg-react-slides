import { dataset1 } from "../data";
import { Code } from "../utils/helpers";
import LineChartRaw01 from "../examples/LineChart.01?raw";
import { LineChart as LineChart01 } from "../examples/LineChart.01";
import LineChartRaw02 from "../examples/LineChart.02?raw";
import { LineChart as LineChart02 } from "../examples/LineChart.02";
import LineChartRaw03 from "../examples/LineChart.03?raw";
import { LineChart as LineChart03 } from "../examples/LineChart.03";
import LineChartRaw04 from "../examples/LineChart.04?raw";
import { LineChart as LineChart04 } from "../examples/LineChart.04";

export function Chapter04() {
  return (
    <section>
      <section data-transition="convex">
        <h2>LineChart: Base</h2>
        <Code
          className="language-jsx"
          data-line-numbers="1-25|5-7|9-11|13|16-23"
          data-trim
        >
          {LineChartRaw01}
        </Code>
        <output className="fragment">
          <LineChart01 data={dataset1} />
        </output>
      </section>

      <section data-transition="convex">
        <h2>LineChart: With Markers</h2>
        <Code className="language-jsx" data-line-numbers="23-27" data-trim>
          {LineChartRaw02}
        </Code>
        <output>
          <LineChart02 data={dataset1} />
        </output>
      </section>

      <section data-transition="convex">
        <h2>LineChart: CSS Animation</h2>
        <Code className="language-jsx" data-line-numbers="25,31-42" data-trim>
          {LineChartRaw03}
        </Code>
        <output>
          <LineChart03 data={dataset1} />
        </output>
      </section>

      <section data-transition="convex">
        <h2>LineChart: Event Handling</h2>
        <Code className="language-jsx" data-line-numbers="31-39" data-trim>
          {LineChartRaw04}
        </Code>
        <output>
          <LineChart04
            data={dataset1}
            onClick={(d) => alert(JSON.stringify(d, null, 2))}
          />
        </output>
      </section>
    </section>
  );
}
