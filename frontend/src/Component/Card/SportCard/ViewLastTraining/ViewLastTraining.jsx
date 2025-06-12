import styles from './ViewLastTraining.module.css'
import stylesPopup from './PopupViewLastTraining/PopupViewLastTraining.module.css'
import PopupViewLastTraining from './PopupViewLastTraining/PopupViewLastTraining'

export default function ViewLastTraining() {

    const openPopup = () => {
        document.getElementsByClassName(`${stylesPopup.popup}`)[0].style.display = 'block';
    }

    return (
        <>
            <div className={styles.body}>
                <div className={styles.image}>
                </div>
                <div className={styles.nameCard}>
                    <p>Результат последней тренировки</p>
                </div>
                <div className={styles.buttonPosition}>
                    <button className={styles.button} onClick={openPopup}>Открыть</button>
                </div>
            </div>
            <PopupViewLastTraining />
        </>
    )
}