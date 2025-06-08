import styled from "styled-components";
import { Code } from "../utils/helpers";
import SvgShapesRaw from "./svg/shapes.svg?raw";
import SvgShapes from "./svg/shapes.svg?react";

export function Chapter02() {
  return (
    <section>
      <section>
        <h2>What is SVG?</h2>
        <h3>Scalable Vector Graphics</h3>
        <p className="fragment">A markup format for vector-based graphics</p>
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
        <h2>SVG: ViewBox</h2>
        <aside
          style={{
            display: "flex",
            alignItems: "end",
            textAlign: "center",
            width: "fit-content",
            margin: "1em auto",
          }}
        >
          <figure>
            <img
              src="cartesian-coordinates.png"
              alt="Cartesian coordinate system"
              style={{ margin: "0.5em auto" }}
              width={246}
              height={228}
            />
            <figcaption>Cartesian coordinate system</figcaption>
          </figure>
          <figure>
            <img
              src="computer-coordinates.png"
              alt="SVG coordinate system"
              style={{ margin: "0.5em auto" }}
              width={267}
              height={194}
            />
            <figcaption>SVG coordinate system</figcaption>
          </figure>
        </aside>

        <ul>
          <li className="fragment">Sets the visible region of the canvas</li>
          <li className="fragment">
            Top-left is (0, 0) - Y increases downward
          </li>
          <li className="fragment">Use to scale or reposition the origin</li>
        </ul>
      </section>

      <section>
        <h2>Why Not Canvas?</h2>
        <ul>
          <li className="fragment">SVG is declarative and DOM-based</li>
          <li className="fragment">Easier to integrate with CSS and events</li>
          <li className="fragment">Leverages native browser features</li>
        </ul>
      </section>
    </section>
  );
}
