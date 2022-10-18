import { Form, Preview } from "./components";
import styles from "./App.module.css";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div className={styles.app}>
      <Form handlePrint={handlePrint} />
      <div className={styles.print}>
        <Preview ref={printRef} />
      </div>
    </div>
  );
}

export default App;
