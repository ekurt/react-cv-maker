import { Form, Preview } from "./components";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Form />
      <Preview />
    </div>
  );
}

export default App;
