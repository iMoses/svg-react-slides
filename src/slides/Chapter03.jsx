export function Chapter03() {
  return (
    <section>
      <section>
        <h2>Intro to d3</h2>
        <p>
          d3 is a collection of small utilities for working with data. It helps
          map values to geometry — the rest is up to you.
        </p>
      </section>
      <section>
        <h2>React and d3: The Anti-Pattern</h2>
        <p>
          Letting d3 take over the DOM means React becomes a wrapper and a
          liability.
        </p>
        <ul>
          <li className="fragment">Hard to test</li>
          <li className="fragment">Breaks React assumptions</li>
          <li className="fragment">Leads to magic side effects</li>
        </ul>
      </section>
    </section>
  );
}
