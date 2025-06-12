import styles from './ViewResultTheBestExercise.module.css'
import stylesPopup from './PopupViewResultTheBestExercise/PopupViewResultTheBestExercise.module.css'
import PopupViewResultTheBestExercise from './PopupViewResultTheBestExercise/PopupViewResultTheBestExercise'

export default function ViewResultTheBestExercise() {
    //С цифрами опять в опенПопап, открывается другая карточка
    const openPopup = () => {
        document.getElementsByClassName(`${stylesPopup.popup}`)[0].style.display = 'block'
    }

    return (
        <>
            <div className={styles.body}>
                <div className={styles.image}>
                </div>
                <div className={styles.nameCard}>
                    <p>Лучший результат упражнения</p>
                </div>
                <div className={styles.buttonPosition}>
                    <button className={styles.button} onClick={openPopup}>Открыть</button>
                </div>
            </div>
            <PopupViewResultTheBestExercise />
        </>
    )
}