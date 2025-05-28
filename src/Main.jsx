import { createRoot } from "react-dom/client";
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";

import LineChartRaw from "./LineChart?raw";
import { LineChart } from "./LineChart";
import dataset1 from "./data-1";

import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";

function Main() {
  const deckRef = useRef(null);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal({
      controls: false,
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
                data-line-numbers="1-55|12-14|16-18|20|23-40|44-55"
                data-trim
              >
                {LineChartRaw}
              </code>
            </pre>
            <LineChart
              className="fragment"
              data={dataset1}
              onClick={(datum, event) => alert(JSON.stringify(datum, null, 2))}
            />
          </section>
          <section>
            <h2>Slide 2</h2>
          </section>
        </section>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
