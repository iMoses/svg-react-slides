import NumberGeneratorRaw from "../utils/NumberGenerator?raw";
import SmoothTransitionRaw from "../utils/useSmoothTransition?raw";
import Chapter11Raw from "./Chapter11?raw";
import { GaugeChart } from "../examples/GaugeChart.02";
import { NumberGenerator } from "../utils/NumberGenerator";
import { Code } from "../utils/helpers";

export function Chapter11() {
  return (
    <section>
      <section data-visibility="uncounted" data-transition="concave">
        <h2>useSmoothTransition Hook</h2>
        <Code
          className="language-jsx"
          data-line-numbers="1-32|9|12|14-15|16-26|17|19-22|24|28|31"
          data-trim
        >
          {SmoothTransitionRaw}
        </Code>
      </section>

      <section data-visibility="uncounted" data-transition="concave">
        <h2>NumberGenerator Component</h2>
        <Code
          className="language-jsx"
          data-line-numbers="1-25|15|17-22|24"
          data-trim
        >
          {NumberGeneratorRaw}
        </Code>
      </section>

      <section data-visibility="uncounted" data-transition="concave">
        <h2>Gauge Slides</h2>
        <Code
          className="language-jsx"
          data-line-numbers="43-45"
          data-trim
        >
          {Chapter11Raw}
        </Code>
        <output>
          <NumberGenerator end={100} round>
            {(value) => <GaugeChart value={value} label="Benchmark" />}
          </NumberGenerator>
        </output>
      </section>
    </section>
  );
}
