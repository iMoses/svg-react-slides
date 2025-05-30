import { Code } from "../utils/helpers";
import SvgShapesRaw from "../shapes.svg?raw";
import SvgShapes from "../shapes.svg?react";

export function Chapter02() {
  return (
    <section>
      <section>
        <h2>What is SVG?</h2>
        <p>
          Scalable Vector Graphics - a markup format for vector-based graphics
          in the browser.
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
          <li className="fragment">Easier to integrate with CSS and events</li>
          <li className="fragment">More accessible for most charting needs</li>
        </ul>
      </section>
    </section>
  );
}
