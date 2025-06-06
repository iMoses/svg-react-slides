import GaugeChartRaw01 from "../examples/GaugeChart.01?raw";
import { GaugeChart as GaugeChart01 } from "../examples/GaugeChart.01";
import GaugeChartRaw02 from "../examples/GaugeChart.02?raw";
import { GaugeChart as GaugeChart02 } from "../examples/GaugeChart.02";
import { NumberGenerator } from "../utils/NumberGenerator";
import { Code } from "../utils/helpers";

export function Chapter07() {
  return (
    <section>
      <section data-transition="concave">
        <h2>GaugeChart: Valve</h2>
        <Code
          className="language-jsx"
          data-line-numbers="1-34|4-7|10-11,31-32|12-18|20-25|27-30"
          data-trim
        >
          {GaugeChartRaw01}
        </Code>
        <output>
          <NumberGenerator end={100} round>
            {(value) => <GaugeChart01 value={value} label="Benchmark" />}
          </NumberGenerator>
        </output>
      </section>

      <section data-transition="concave">
        <h2>GaugeChart: Benchmark</h2>
        <Code
          className="language-jsx"
          data-line-numbers="1-79|20-23|25-28|31,56-59|32-48,54|49|50-53|13-61"
          data-trim
        >
          {GaugeChartRaw02}
        </Code>
        <output>
          <NumberGenerator end={100} round>
            {(value) => <GaugeChart02 value={value} label="Benchmark" />}
          </NumberGenerator>
        </output>
      </section>
    </section>
  );
}
