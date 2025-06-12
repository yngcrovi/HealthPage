import styles from './PopupViewLastTraining.module.css'

export default function PopupViewLastTraining() {
    var training = ['1.08.2024', 1]

    return (
        <>
        <div className={styles.popup}>
            <div className={styles.body}>
                <p className={styles.date}>{training[0]}</p>
                {
                    training.map(() => 
                        <>
                        <p>2</p>
                        </>
                    )
                }
            </div>
        </div>
        </>
    )
}