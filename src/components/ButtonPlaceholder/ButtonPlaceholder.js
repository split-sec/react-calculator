import styles from './ButtonPlaceholder.module.css';
import Buttons from '../CalcButtons/CalcButtons.js';

export default function ButtonPlaceholder({value="",setValue=()=>{}}) {
    return (
        <div className={styles.buttonPlaceholder}>
            <div className={styles.buttonRow}>
                <Buttons ans={value} setAns={setValue} value="C"/>
                <Buttons ans={value} setAns={setValue} value="()"/>
                <Buttons ans={value} setAns={setValue} value="%"/>
                <Buttons ans={value} setAns={setValue} value="/"/>
            </div>

            <div className={styles.buttonRow}>
                <Buttons ans={value} setAns={setValue} value="7"/>
                <Buttons ans={value} setAns={setValue} value="8"/>
                <Buttons ans={value} setAns={setValue} value="9"/>
                <Buttons ans={value} setAns={setValue} value="X"/>
            </div>

            <div className={styles.buttonRow}>
                <Buttons ans={value} setAns={setValue} value="4"/>
                <Buttons ans={value} setAns={setValue} value="5"/>
                <Buttons ans={value} setAns={setValue} value="6"/>
                <Buttons ans={value} setAns={setValue} value="-"/>
            </div>

            <div className={styles.buttonRow}>
                <Buttons ans={value} setAns={setValue} value="1"/>
                <Buttons ans={value} setAns={setValue} value="2"/>
                <Buttons ans={value} setAns={setValue} value="3"/>
                <Buttons ans={value} setAns={setValue} value="+"/>
            </div>

            <div className={styles.buttonRow}>
                <Buttons ans={value} setAns={setValue} value="+/-"/>
                <Buttons ans={value} setAns={setValue} value="0"/>
                <Buttons ans={value} setAns={setValue} value="."/>
                <Buttons ans={value} setAns={setValue} value="="/>
            </div>
        </div>
    )
}