import { dataset2 } from "../data-1";
import { Code } from "../utils/helpers";
import PieChartRaw01 from "../examples/PieChart.01?raw";
import { PieChart as PieChart01 } from "../examples/PieChart.01";
import PieChartRaw02 from "../examples/PieChart.02?raw";
import { PieChart as PieChart02 } from "../examples/PieChart.02";
import PieChartRaw03 from "../examples/PieChart.03?raw";
import { PieChart as PieChart03 } from "../examples/PieChart.03";

export function Chapter06() {
  return (
    <section>
      <section>
        <h2>PieChart: Base</h2>
        <Code className="language-jsx" data-line-numbers data-trim>
          {PieChartRaw01}
        </Code>
        <output className="fragment">
          <PieChart01 data={dataset2} />
        </output>
      </section>
      <section>
        <h2>PieChart: Labels</h2>
        <Code className="language-jsx" data-line-numbers="36" data-trim>
          {PieChartRaw02}
        </Code>
        <output>
          <PieChart02 data={dataset2} />
        </output>
      </section>
      <section>
        <h2>PieChart: Interactivity</h2>
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
