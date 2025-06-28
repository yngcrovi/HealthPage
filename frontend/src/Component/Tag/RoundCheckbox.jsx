import { useState, useEffect, useRef, useCallback, forwardRef } from 'react';
import styles from "../../CSS/Component/Tag/RoundCheckbox.module.css"

const RoundCheckbox = forwardRef((props, ref) => {
    

    return (
        <div className={styles.checkboxContainer} ref={ref}>
            <div 
                className={styles.checkbox} onClick={props.onClick}
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
});

export default RoundCheckbox;


