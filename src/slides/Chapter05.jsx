import { dataset2 } from "../data";
import { Code } from "../utils/helpers";
import PieChartRaw01 from "../examples/PieChart.01?raw";
import { PieChart as PieChart01 } from "../examples/PieChart.01";
import PieChartRaw02 from "../examples/PieChart.02?raw";
import { DonutChart as PieChart02 } from "../examples/PieChart.02";
import PieChartRaw03 from "../examples/PieChart.03?raw";
import { DonutChart as PieChart03 } from "../examples/PieChart.03";

export function Chapter05() {
  return (
    <section>
      <section data-transition="convex">
        <h2>PieChart</h2>
        <Code
          className="language-jsx"
          data-line-numbers="1-59|24|26-29|31-33|35|38-44|39,48-52"
          data-trim
        >
          {PieChartRaw01}
        </Code>
        <output>
          <PieChart01 data={dataset2} />
        </output>
      </section>

      <section data-transition="convex">
        <h2>DonutChart</h2>
        <Code className="language-jsx" data-line-numbers="36" data-trim>
          {PieChartRaw02}
        </Code>
        <output>
          <PieChart02 data={dataset2} />
        </output>
      </section>

      <section data-transition="convex">
        <h2>DonutChart: Interactivity</h2>
        <Code
          className="language-jsx"
          data-line-numbers="43-52|65-74"
          data-trim
        >
          {PieChartRaw03}
        </Code>
        <output>
          <PieChart03 data={dataset2} />
        </output>
      </section>
    </section>
  );
}
