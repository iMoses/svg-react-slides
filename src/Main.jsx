import { createRoot } from "react-dom/client";
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";

import { NumberGenerator } from "./utils/NumberGenerator";
import SvgShapesRaw from "./shapes.svg?raw";
import SvgShapes from "./shapes.svg?react";

import PieChartRaw01 from "./examples/PieChart.01?raw";
import { PieChart as PieChart01 } from "./examples/PieChart.01";
import PieChartRaw02 from "./examples/PieChart.02?raw";
import { PieChart as PieChart02 } from "./examples/PieChart.02";
import PieChartRaw03 from "./examples/PieChart.03?raw";
import { PieChart as PieChart03 } from "./examples/PieChart.03";

import LineChartRaw01 from "./examples/LineChart.01?raw";
import { LineChart as LineChart01 } from "./examples/LineChart.01";
import LineChartRaw02 from "./examples/LineChart.02?raw";
import { LineChart as LineChart02 } from "./examples/LineChart.02";
import LineChartRaw03 from "./examples/LineChart.03?raw";
import { LineChart as LineChart03 } from "./examples/LineChart.03";
import LineChartRaw04 from "./examples/LineChart.04?raw";
import { LineChart as LineChart04 } from "./examples/LineChart.04";

import GaugeChartRaw01 from "./examples/GaugeChart.01?raw";
import { GaugeChart as GaugeChart01 } from "./examples/GaugeChart.01";
import GaugeChartRaw02 from "./examples/GaugeChart.02?raw";
import { GaugeChart as GaugeChart02 } from "./examples/GaugeChart.02";

import { dataset1, dataset2 } from "./data-1";

function Code(props) {
  return (
    <pre>
      <code {...props} />
    </pre>
  );
}

function Main() {
  const deckRef = useRef(null);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal({
      controls: false,
      history: true,
      plugins: [RevealMarkdown, RevealHighlight],
    });

    deckRef.current.initialize();

    return () => {
      try {
        deckRef.current?.destroy();
        deckRef.current = null;
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        {/* Intro Section */}
        <section>
          <section>
            <h2>Hi, I'm Ido</h2>
            <ul>
              <li className="fragment">Frontend developer at AG Grid</li>
              <li className="fragment">I work on charting tools</li>
              <li className="fragment">This talk is about simplicity</li>
            </ul>
          </section>
          <section>
            <h2>
              Data Visualisation
              <br />
              with React and SVG
            </h2>
            <h4>Ido Moshe</h4>
          </section>
          <section>
            <h2>What Are We Building?</h2>
            <LineChart04 data={dataset1} />
            <p className="fragment">Let’s break it down step by step.</p>
          </section>
          <section>
            <h2>Why Build It Yourself?</h2>
            <ul>
              <li className="fragment">
                Full control over structure and style
              </li>
              <li className="fragment">Fits your data model exactly</li>
              <li className="fragment">
                No framework mismatch or abstraction leaks
              </li>
            </ul>
          </section>
          <section>
            <h2>Downsides of Using a Library</h2>
            <ul>
              <li className="fragment">Bundle size</li>
              <li className="fragment">Cognitive complexity</li>
              <li className="fragment">Bureaucracy</li>
            </ul>
          </section>
        </section>

        {/* SVG Basics */}
        <section>
          <section>
            <h2>What is SVG?</h2>
            <p>
              Scalable Vector Graphics - a markup format for vector-based
              graphics in the browser.
            </p>
          </section>
          <section>
            <h2>SVG Shapes</h2>
            <Code className="language-svg" data-trim>
              {SvgShapesRaw}
            </Code>
            <output className="fragment">
              <SvgShapes width={180} height={180} />
            </output>
          </section>
          <section>
            <h2>Why Not Canvas?</h2>
            <ul>
              <li className="fragment">SVG is declarative and DOM-based</li>
              <li className="fragment">
                Easier to integrate with CSS and events
              </li>
              <li className="fragment">
                More accessible for most charting needs
              </li>
            </ul>
          </section>
        </section>

        {/* d3 Overview */}
        <section>
          <h2>Understanding d3</h2>
          <p>
            d3 provides utilities like <code>scaleLinear</code>,{" "}
            <code>arc</code>, and <code>line</code> to build shapes from data —
            no DOM manipulation needed.
          </p>
        </section>

        {/* React + d3: The Anti-Pattern */}
        <section>
          <h2>React and d3: The Anti-Pattern</h2>
          <p>
            Letting d3 take over DOM means React becomes a wrapper — and a
            liability.
          </p>
          <ul>
            <li className="fragment">Hard to test</li>
            <li className="fragment">Breaks React assumptions</li>
            <li className="fragment">Leads to “magic” side effects</li>
          </ul>
        </section>

        {/* LineChart Progression */}
        <section>
          <section>
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
          <section>
            <h2>LineChart: With Markers</h2>
            <Code className="language-jsx" data-line-numbers="23-27" data-trim>
              {LineChartRaw02}
            </Code>
            <output>
              <LineChart02 data={dataset1} />
            </output>
          </section>
          <section>
            <h2>LineChart: CSS Animation</h2>
            <Code
              className="language-jsx"
              data-line-numbers="25,31-42"
              data-trim
            >
              {LineChartRaw03}
            </Code>
            <output>
              <LineChart03 data={dataset1} />
            </output>
          </section>
          <section>
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

        {/* PieChart Progression */}
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

        {/* Bonus: Gauge Chart */}
        <section>
          <section>
            <h2>Gauge Chart</h2>
            <Code
              className="language-jsx"
              data-line-numbers="1-34|4-7|10-11,31-32|12-18|20-25|27-30"
              data-trim
            >
              {GaugeChartRaw01}
            </Code>
            <output className="fragment">
              <NumberGenerator end={100} round>
                {(value) => <GaugeChart01 value={value} label="Benchmark" />}
              </NumberGenerator>
            </output>
          </section>

          <section>
            <h2>Gauge Chart</h2>
            <Code
              className="language-jsx"
              data-line-numbers="1-79|20-23|25-28|31,56-59|32-48,54|49|50-53|13-61"
              data-trim
            >
              {GaugeChartRaw02}
            </Code>
            <output className="fragment">
              <NumberGenerator end={100} round>
                {(value) => <GaugeChart02 value={value} label="Benchmark" />}
              </NumberGenerator>
            </output>
          </section>
        </section>

        {/* Limitations Section */}
        <section>
          <h2>When Simplicity Isn't Enough</h2>
          <ul>
            <li className="fragment">Very large datasets</li>
            <li className="fragment">High interactivity or animation needs</li>
            <li className="fragment">Accessibility and i18n</li>
            <li className="fragment">Time and team scale</li>
          </ul>
        </section>

        {/* ag-Charts Mention */}
        <section>
          <h2>Need More Power?</h2>
          <p className="fragment">
            When things get serious — performance, flexibility, or team scale —
            use a battle-tested tool like <strong>ag-Charts</strong>.
          </p>
          <p className="fragment">It's what I work on, and it's open-source.</p>
        </section>

        {/* Closing */}
        <section>
          <h2>Closing Thoughts</h2>
          <ul>
            <li className="fragment">
              Charting is a great way to learn React + SVG
            </li>
            <li className="fragment">Simple solutions go a long way</li>
            <li className="fragment">
              Reach for a library only when you need to
            </li>
          </ul>
        </section>

        {/* Final Slide: Follow Up */}
        <section>
          <h2>Explore the Code</h2>
          <p className="fragment">github.com/your-handle/react-svg-charts</p>
          <p className="fragment">
            Try it live in CodeSandbox or your favorite stack
          </p>
        </section>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
