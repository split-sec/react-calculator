import styles from './App.module.css';
import Calculator from "./components/Calculator/Calculator.js";

export default function App() {
  return (
    <div className={styles.flexContainer}>
      <Calculator />
    </div>
  );
}