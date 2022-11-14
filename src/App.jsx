import { Form, Preview } from "./components";
import styles from "./App.module.css";
import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

function App() {
  const { language } = useSelector((state) => state.language);
  const { top, right, bottom, left } = useSelector(
    (state) => state.site.margins
  );

  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const getPageMargins = () => {
    return `@page { margin: ${top}px ${right}px ${bottom}px ${left}px !important; }`;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className={styles.app}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CV Maker App</title>
        <meta
          name="description"
          content="Easy, Customizable, Responsive, Free CV Maker App."
        />
        <link rel="canonical" href="https://cv-maker.ekurt.dev/" />

        <meta property="og:url" content="https://cv-maker.ekurt.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CV Maker App" />
        <meta
          property="og:description"
          content="Easy, Customizable, Responsive, Free CV Maker App."
        />
        <meta
          property="og:image"
          content="https://cv-maker.ekurt.dev/assets/images/cv-maker-app.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://cv-maker.ekurt.dev/" />
        <meta name="twitter:creator" content="@ekurtdev" />
        <meta name="twitter:title" content="CV Maker App" />
        <meta
          name="twitter:description"
          content="Easy, Customizable, Responsive, Free CV Maker App."
        />
        <meta
          name="twitter:image"
          content="https://cv-maker.ekurt.dev/assets/images/cv-maker-app.png"
        />
      </Helmet>
      <Form handlePrint={handlePrint} />
      <div className={styles.print}>
        <style>{getPageMargins()}</style>
        <Preview ref={printRef} />
      </div>
    </div>
  );
}

export default App;
