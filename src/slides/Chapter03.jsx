import d3Index from "d3?raw";
import D3AntiPatternRaw from "../examples/D3AntiPattern?raw";
import D3AntiPatternAltRaw from "../examples/D3AntiPattern.alt?raw";
import D3AntiPatternAlt from "../examples/D3AntiPattern.alt";
import { Code } from "../utils/helpers";

export function Chapter03() {
  return (
    <section>
      <section>
        <h2>What is d3 Good At?</h2>
        <ul>
          <li className="fragment">
            A collection of utilities for working with data
          </li>
          <li className="fragment">It helps map values to geometry</li>
          <li className="fragment">the rest is up to you</li>
        </ul>
      </section>

      <section>
        <h3>React and d3</h3>
        <h2>A Common Pitfall</h2>
        <div>
          <Code
            className="language-jsx"
            data-line-numbers="1-43|10|42|12,27-39|13-25"
          >
            {D3AntiPatternRaw}
          </Code>
        </div>
      </section>

      <section data-transition="zoom-in slide-out">
        <h3>React and d3</h3>
        <h2>The Anti-Pattern</h2>
        <p className="fragment">
          Letting d3 take over the DOM means React becomes a wrapper and a
          liability.
        </p>
      </section>

      <section>
        <h3>React and d3</h3>
        <h2>The React Way</h2>
        <Code className="language-jsx" data-line-numbers="10-29|32-38">
          {D3AntiPatternAltRaw}
        </Code>
        <output className="fragment">
          <D3AntiPatternAlt
            data={[
              { label: "Apples", value: 10 },
              { label: "Oranges", value: 15 },
              { label: "Bananas", value: 7 },
              { label: "Kiwis", value: 12 },
              { label: "Pears", value: 9 },
            ]}
          />
        </output>
      </section>

      <section data-transition="concave">
        <h2>What d3 is made of?</h2>
        <Code
          className="language-jsx"
          data-line-numbers="1-30|2,3,9,24,29,30|4,6,7,13,15,16,18,19,25|1,5,8,10,11,12,14,17,20,21,22,23,26,27,28"
        >
          {d3Index}
        </Code>
      </section>

      <section>
        <h2>d3 in This Talk</h2>
        <ul>
          <li className="fragment">
            <code>d3-array</code>: to get our data domain boundaries
          </li>
          <li className="fragment">
            <code>d3-scale</code>: maps data values to visual values
          </li>
          <li className="fragment">
            <code>d3-shape</code>: generates paths for arcs and pies
          </li>
        </ul>
      </section>
    </section>
  );
}
