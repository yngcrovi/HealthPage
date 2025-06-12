import styles from './ViewAllExercise.module.css'

export default function ViewAllExercise() {

    const qwe = async () => {
        var body = {
            'id': 1,
            'username': 'yngcrovi'
        }
        let request = await fetch('http://127.0.0.1:5000/', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
        }
        );
        let response = await request.json()
        console.log(response)
    } 
    return (
        <>
            <div className={styles.body}>
                <div className={styles.image}>
                </div>
                <div className={styles.nameCard}>
                    <p>Посмотреть упражнения</p>
                </div>
                <div className={styles.buttonPosition}>
                    <button className={styles.button} onClick={qwe}>Открыть</button>
                </div>
            </div>
        </>
    )
}