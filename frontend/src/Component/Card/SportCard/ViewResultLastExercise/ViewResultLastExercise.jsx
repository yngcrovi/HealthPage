import styles from './ViewResultLastExercise.module.css'
import stylesPopup from './PopupViewResultLastExercise/PopupViewResultLastExercise.module.css'
import PopupViewResultLastExercise from './PopupViewResultLastExercise/PopupViewResultLastExercise'

export default function ViewResultLastExercise() {
    //Если поставить [0], то откроется результат последней тренировки
    const openPopup = () => {
        document.getElementsByClassName(`${stylesPopup.popup}`)[0].style.display = 'block'
    }

    return (
        <>
            <div className={styles.body}>
                <div className={styles.image}>
                </div>
                <div className={styles.nameCard}>
                    <p>Последний результат упражнения</p>
                </div>
                <div className={styles.buttonPosition}>
                    <button className={styles.button} onClick={openPopup}>Открыть</button>
                </div>
            </div>
            <PopupViewResultLastExercise />
        </>
    )
}