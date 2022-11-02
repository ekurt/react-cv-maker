import { Form, Preview } from "./components";
import styles from "./App.module.css";
import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";

function App() {
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const getPageMargins = () => {
    return `@page { margin: 0 0 0 0 !important; }`;
  };

  const { language } = useSelector((state) => state.language);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className={styles.app}>
      <Form handlePrint={handlePrint} />
      <div className={styles.print}>
        <style>{getPageMargins()}</style>
        <Preview ref={printRef} />
      </div>
    </div>
  );
}

export default App;
