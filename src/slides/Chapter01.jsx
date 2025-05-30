import { dataset1 } from "../data-1";
import { LineChart } from "../examples/LineChart.04";

export function Chapter01() {
  return (
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
        <LineChart data={dataset1} />
        <p className="fragment">Let’s break it down step by step.</p>
      </section>
      <section>
        <h2>Why Build It Yourself?</h2>
        <ul>
          <li className="fragment">Full control over structure and style</li>
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
  );
}
