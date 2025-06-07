import { AgChartsLogo } from "../utils/helpers";

export function Chapter10() {
  return (
    <section>
      <h2>Explore the Code</h2>
      <p>github.com/iMoses/svg-react-slides</p>
      <p>
        <img src="qr-code.svg" alt="QR" height={120} />
      </p>
      <p>
        Ido Moshe <br />
        <AgChartsLogo />
      </p>
      <p
        style={{
          fontSize: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
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
