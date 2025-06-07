import { AgChartsLogo } from "../utils/helpers";

export function Chapter10() {
  return (
    <section>
      <h2>Explore the Code</h2>
      <p>github.com/iMoses/svg-react-slides</p>
      <p>
        <img src="qr-code.svg" alt="QR" width={120} />
      </p>
      <p>
        <AgChartsLogo />
      </p>
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          fontSize: 24,
        }}
      >
        This slideshow was created using
        <img
          style={{
            position: "relative",
            top: 2,
          }}
          src="https://revealjs.com/images/logo/reveal-white-text.svg"
          alt="Reveal.js"
          height={38}
        />
      </p>
    </section>
  );
}
