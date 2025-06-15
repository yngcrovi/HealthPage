import { useState } from 'react';
import styles from "../../CSS/Component/Tag/RoundCheckbox.module.css"

export default function RoundCheckbox(props) {
    
  return (
    <div className={styles.checkboxContainer}>
        <div 
            className={styles.checkbox} 
            onClick={props.onClick ? props.onClick : () => props.setChecked(!props.checked)}
            style={{
                borderColor: props.borderColor
            }} 
        >
            <div 
                className={styles.pointCheckbox}
                style={{
                    display: props.checked ? 'block' : 'none',
                    backgroundColor: props.pointColor
                }}
            />
        </div>
        {props.text && 
        // Предусмотреть выделелние текста как отдельный параметр props
            <p><strong>{props.text}</strong></p>
        }
    </div>
  );
}

