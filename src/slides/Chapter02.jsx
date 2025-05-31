import { Code } from "../utils/helpers";
import SvgShapesRaw from "../shapes.svg?raw";
import SvgShapes from "../shapes.svg?react";

export function Chapter02() {
  return (
    <section>
      <section>
        <h2>What is SVG?</h2>
        <h3>Scalable Vector Graphics</h3>
        <p>A markup format for vector-based graphics</p>
      </section>
      <section>
        <h2>SVG Shapes</h2>
        <Code
          className="language-svg"
          data-line-numbers="1-19|5|7|9|11|13|15|17|3|1"
          data-trim
        >
          {SvgShapesRaw}
        </Code>
        <output>
          <SvgShapes width={180} height={180} />
        </output>
      </section>
      <section>
        <h2>Why Not Canvas?</h2>
        <ul>
          <li className="fragment">SVG is declarative and DOM-based</li>
          <li className="fragment">Easier to integrate with CSS and events</li>
          <li className="fragment">More accessible for most charting needs</li>
        </ul>
      </section>
    </section>
  );
}
