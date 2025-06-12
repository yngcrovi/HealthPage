import { useState } from 'react';
import styles from './AddTraining.module.css'
import stylesPopup from './PopupAddTraining/PopupAddTraining.module.css'
import PopupAddTraining from './PopupAddTraining/PopupAddTraining'
import PopupAdditInfoTraining from './PopupAddTraining/PopupAdditInfoTraining/PopupAdditInfoTraining'

export default function AddTraining() {
    //Добавить после добавления тренировки ввод данных для доп инфы(смотреть пример данных в профиле)
    const openPopup = () => {
        document.getElementById(`${stylesPopup.popup}`).style.display = 'block';
    }
    const [body, setBody] = useState({})

    return (
        <>
            <div className={styles.body}>
                <div className={styles.image}>
                </div>
                <div className={styles.nameCard}>
                    <p>Добавить тренировку</p>
                </div>
                <div className={styles.buttonPosition}>
                    <button className={styles.button} onClick={openPopup}>Открыть</button>
                </div>
            </div>
            <PopupAddTraining body={body} setBody={setBody}/>
            <PopupAdditInfoTraining body={body} setBody={setBody}/>
        </>
    )
}