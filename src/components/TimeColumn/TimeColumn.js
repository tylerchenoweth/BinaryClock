
import styles from './TimeColumn.module.css'
import Unit from '../../components/Unit/Unit.js'

function TimeColumn({numUnits, binary}) {
    return (
        <div className={styles.timeColumn}>
            
            {binary && [...Array(numUnits)].map((_, index) => (
                <Unit key={index} isOn={binary[index]} />        
            ))}
        </div>
    );
}

export default TimeColumn;