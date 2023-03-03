import styles from './CalcButtons.module.css';

export default function CalcButtons({ans = "", setAns = ()=>{},...props}) {
    function determineValue(value) {
        if(value === "C") {
            setAns("");
        } else if(value === "=") {
            ;
        } else if(value === "+/-") {
            ;  
        } else {
            if(ans === "0" || ans === "") {
                if(value === ".") {
                    setAns(ans + value);
                }
                if(value.match(/\d/)) {
                    setAns(value);
                } else {
                    if(ans[ans.length-1].match(/[+-X//%\d]/)) {
                        console.log(ans[ans.length-1]);
                        setAns(ans + value);
                    }
                }
            }
        }
    }
    
    return (
        <div className={styles.button} onClick={(e) => (determineValue(e.target.innerText))}>
            {props.value}
        </div>
    )
}