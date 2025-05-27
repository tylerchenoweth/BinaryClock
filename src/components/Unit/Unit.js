import styles from './Unit.module.css'

function Unit({isOn}) {
    let color = ""

    let on = "#c26ad5";
    let off = "#5e3567";

    if(isOn === "1") {
        color = on;
    } else {
        color = off;
    }

    return (
        <div className={styles.unit} style={{backgroundColor: color}}></div>
    );
}

export default Unit;