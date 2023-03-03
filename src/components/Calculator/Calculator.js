import styles from './Calculator.module.css';
import Screen from '../Screen/Screen.js';
import ButtonPlaceholder from '../ButtonPlaceholder/ButtonPlaceholder.js';
import { useState } from 'react';

export default function Calculator() {
    const [value, setValue] = useState("0");

    return (
        <div className={styles.mainSection}>
            <Screen value={value}/>
            <ButtonPlaceholder value={value} setValue={setValue}/>
        </div>
    )
} 