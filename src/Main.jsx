import { createRoot } from "react-dom/client";
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import "tippy.js/dist/tippy.css";

import { Chapter01 } from "./slides/Chapter01";
import { Chapter02 } from "./slides/Chapter02";
import { Chapter03 } from "./slides/Chapter03";
import { Chapter04 } from "./slides/Chapter04";
import { Chapter05 } from "./slides/Chapter05";
import { Chapter06 } from "./slides/Chapter06";
import { Chapter07 } from "./slides/Chapter07";
import { Chapter08 } from "./slides/Chapter08";
import { Chapter09 } from "./slides/Chapter09";
import { Chapter10 } from "./slides/Chapter10";
import { Chapter11 } from "./slides/Chapter11";
import { Chapter12 } from "./slides/Chapter12";

function Main() {
  const deckRef = useRef(null);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal({
      controls: false,
      history: true,
      navigationMode: "linear",
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
        <Chapter01 />
        {/* SVG Basics */}
        <Chapter02 />
        {/* d3 Overview and Anti-Pattern */}
        <Chapter03 />
        {/* d3 Section */}
        <Chapter04 />
        {/* LineChart Progression */}
        <Chapter05 />
        {/* PieChart Progression */}
        <Chapter06 />
        {/* Bonus: Gauge Chart */}
        <Chapter07 />
        {/* Limitations Section */}
        <Chapter08 />
        {/* ag-Charts Mention */}
        <Chapter09 />
        {/* Closing */}
        <Chapter10 />
        {/* Final Slide: Follow Up */}
        <Chapter11 />
        {/* Bonus Slide */}
        <Chapter12 />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
