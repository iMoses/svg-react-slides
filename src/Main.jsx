import { createRoot } from "react-dom/client";
import { useEffect, useRef, useState } from "react";
import Reveal from "reveal.js";
import { NumberGenerator } from "./utils/NumberGenerator";

import LineChartRaw01 from "./examples/LineChart.01?raw";
import { LineChart as LineChart01 } from "./examples/LineChart.01";
import LineChart02Raw from "./examples/LineChart.02?raw";
import { LineChart as LineChart02 } from "./examples/LineChart.02";
import LineChart03Raw from "./examples/LineChart.03?raw";
import { LineChart as LineChart03 } from "./examples/LineChart.03";
import LineChart04Raw from "./examples/LineChart.04?raw";
import { LineChart as LineChart04 } from "./examples/LineChart.04";
import GaugeChartRaw from "./examples/GaugeChart?raw";
import { GaugeChart } from "./examples/GaugeChart";
import dataset1 from "./data-1";

import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import "tippy.js/dist/tippy.css";

function Main() {
  const deckRef = useRef(null);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal({
      controls: false,
      history: true,
      plugins: [RevealMarkdown, RevealHighlight],
    });

    deckRef.current.initialize().then(() => {});

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        <section>
          <section>
            <h2>LineChart Component</h2>
            <pre>
              <code
                className="language-jsx"
                data-line-numbers="1-25|5-7|9-11|13|16-23"
                data-trim
              >
                {LineChartRaw01}
              </code>
            </pre>
            <output className="fragment">
              <LineChart01 data={dataset1} />
            </output>
          </section>

          <section>
            <h2>LineChart Component</h2>
            <pre>
              <code
                className="language-jsx"
                data-line-numbers="23-27"
                data-trim
              >
                {LineChart02Raw}
              </code>
            </pre>
            <output>
              <LineChart02 data={dataset1} />
            </output>
          </section>

          <section>
            <h2>LineChart Component</h2>
            <pre>
              <code
                className="language-jsx"
                data-line-numbers="25,31-42"
                data-trim
              >
                {LineChart03Raw}
              </code>
            </pre>
            <output>
              <LineChart03 data={dataset1} />
            </output>
          </section>

          <section>
            <h2>LineChart Component</h2>
            <pre>
              <code
                className="language-jsx"
                data-line-numbers="31-39"
                data-trim
              >
                {LineChart04Raw}
              </code>
            </pre>
            <output>
              <LineChart04
                data={dataset1}
                onClick={(datum) => alert(JSON.stringify(datum, null, 2))}
              />
            </output>
          </section>
        </section>

        <section>
          <h2>GaugeChart Component</h2>
          <pre>
            <code
              className="language-jsx"
              data-line-numbers="1-79|20-23|25-28|31,56-59|32-48,54|49|50-53|13-61"
              data-trim
            >
              {GaugeChartRaw}
            </code>
          </pre>
          <output className="fragment">
            <NumberGenerator end={100} round>
              {(value) => <GaugeChart value={value} label="Benchmark" />}
            </NumberGenerator>
          </output>
        </section>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
