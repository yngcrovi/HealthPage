import { useState } from 'react';
import styles from './PopupViewResultLastExercise.module.css'

export default function PopupViewResultLastExercise() {
    const [loadType, setLoadType] = useState('')
    const [partOfBody, setPartOfBody] = useState('')
    const [partOfMuscle, setPartOfMuscle] = useState('')
    const [exercise, setExercise] = useState('')
    const [dataExercise, setDataExercise] = useState([])

    const openLastExercise = () => {
        console.log(loadType)
        console.log(partOfBody)
        if(['Грудь', 'Плечи', 'Руки'].includes(partOfBody)){
            console.log(partOfMuscle)
        }
        console.log(exercise)
        document.getElementsByClassName(`${styles.body}`)[0].style.display = 'none';
        document.getElementsByClassName(`${styles.body2}`)[0].style.display = 'block';
        setDataExercise([])
    }
    return (
        <>
        <div className={styles.popup}>
            <div className={styles.body}>
                <select
                    className={styles.selectLT}
                    onChange={(event) => {
                        setLoadType(event.target.value)
                    }}
                >
                    <option selected hidden>Тип нагрузки...</option>
                    <option className={styles.variantSelect} value='Силовые'>Силовые</option>
                    <option className={styles.variantSelect} value='Кардио'>Кардио</option>
                </select>
                <select
                    className={styles.selectPOB}
                    onChange={(event) => {
                        setPartOfBody(event.target.value)
                    }}
                >
                    <option selected hidden>Часть тела...</option>
                    <option className={styles.variantSelect} value='Спина'>Спина</option>
                    <option className={styles.variantSelect} value='Грудь'>Грудь</option>
                </select>
                {
                    ['Грудь', 'Плечи', 'Руки'].includes(partOfBody) &&
                    <select
                        className={styles.selectPOM}
                        onChange={(event) => {
                            setPartOfMuscle(event.target.value)
                        }}
                    >
                        <option selected hidden>Часть мышцы...</option>
                        <option className={styles.variantSelect} value='Верхний сегмент'>Верхний сегмент</option>
                        <option className={styles.variantSelect} value='Нижний сегмент'>Нижний сегмент</option>
                    </select>
                }
                <select
                    className={styles.selectExercise}
                    onChange={(event) => {
                        setExercise(event.target.value)
                    }}
                >
                    <option selected hidden>Упражнение..</option>
                    <option className={styles.variantSelect} value='Подтягивания'>Подтягивания</option>
                    <option className={styles.variantSelect} value='Отжимания'>Отжимания</option>
                </select>
                <div className={styles.divDate}>
                    <input 
                        className={styles.date}
                        type='date'
                    />
                </div>
                <div className={styles.divButtonAddDate}>
                    <button onClick={() => {
                        document.getElementsByClassName(`${styles.divDate}`)[0].style.display = 'block'
                        document.getElementsByClassName(`${styles.divButtonAddDate}`)[0].style.display = 'none'
                    }}>Указать дату</button> 
                </div>
                <button onClick={openLastExercise}>Последняя</button>
                <button onClick={openLastExercise}>Показать</button>
            </div>

            
            <div className={styles.body2}>
                {dataExercise.map(() => {
                    <p>dasf</p>
                })}
            </div>
        </div>
        </>
    )
}