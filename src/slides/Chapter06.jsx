import GaugeChartRaw01 from "../examples/GaugeChart.01?raw";
import { GaugeChart as GaugeChart01 } from "../examples/GaugeChart.01";
import GaugeChartRaw02 from "../examples/GaugeChart.02?raw";
import { GaugeChart as GaugeChart02 } from "../examples/GaugeChart.02";
import { NumberGenerator } from "../utils/NumberGenerator";
import { Code } from "../utils/helpers";

export function Chapter06() {
  return (
    <section>
      <section data-transition="concave">
        <h2>GaugeChart: Valve</h2>
        <Code
          className="language-jsx"
          data-line-numbers="1-32|4-7|10|11-17|19-24|26-29"
          data-trim
        >
          {GaugeChartRaw01}
        </Code>
        <output>
          <NumberGenerator end={100} round>
            {(value) => <GaugeChart01 value={value} />}
          </NumberGenerator>
        </output>
      </section>

      <section data-transition="concave">
        <h2>GaugeChart: Benchmark</h2>
        <Code
          className="language-jsx"
          data-line-numbers="1-82|23-26|28-31|35-51,57|52|53-56|34,59-62|21,38"
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
