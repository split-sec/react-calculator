import { useState } from 'react';
import styles from './Screen.module.css';

export default function Screen({ value }) {
    return(
        <div className={styles.screenSection}>
            <p>{value}</p>
        </div>
    )
}