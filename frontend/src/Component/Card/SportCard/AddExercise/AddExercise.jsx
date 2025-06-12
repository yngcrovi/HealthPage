import styles from './AddExercise.module.css'
// import getCookie from '../../../../CookieFunc/CookieFunc';

export default function AddExercise() {

    // const qwe = async () => {
    //     let access = getCookie('test')
    //     console.log(access)
    //     let response = await fetch('http://127.0.0.1:8000/me', {
    //         headers: {
    //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ5bmdjcm92aSIsImV4cCI6MTcyNDMyOTYyNS44NTMzMzE2fQ.YlIOz9JOkedJvPRKFcWzzPMnKebJSzqhOc7_DOgwE10',
    //             ContentType: "application/json",
    //         }
    //     }
    //     );
    //     var result = await response.json()
    //     console.log(result)
    // }
    return (
        <>
            <div className={styles.body}>
                <div className={styles.image}>
                </div>
                <div className={styles.nameCard}>
                    <p>Добавить упражнение</p>
                </div>  
                <div className={styles.buttonPosition}>
                    <button className={styles.button} 
                    // onClick={qwe}
                    >Открыть</button>
                </div>
            </div>
        </>
    )
}