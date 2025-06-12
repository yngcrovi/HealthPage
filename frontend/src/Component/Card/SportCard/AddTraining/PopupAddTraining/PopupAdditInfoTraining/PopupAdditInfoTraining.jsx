import styles from './PopupAdditInfoTraining.module.css'
import { useState } from 'react';
import { addTrainingURL } from '../../../../../../URL/URL';
import makeRequest from '../../../../../../Request/makeRequest';

export default function PopupAdditInfoTraining({body, setBody}) {
    const [stateDate, setStateDate] = useState(false)


    const sendTraining = async () => {
        let date_training 
        let calories 
        let time_start
        let time_end
        let comment

        if (stateDate){
            date_training = document.getElementById('date-training').value
        }else{
            let day = new Date().getUTCDate()
            let mounth = new Date().getUTCMonth()
            let year = new Date().getUTCFullYear()
            if (mounth < 10){
                mounth = '0' + mounth
            }
            if (day < 10){
                day = '0' + day
            }
            date_training = year + '-' + mounth + '-' + day
        }
        if (document.getElementById('calories').value){
            calories = document.getElementById('calories').value
        }
        if (document.getElementById('hour-start').value && document.getElementById('minute-start').value){
            let hour = document.getElementById('hour-start').value
            let minute = document.getElementById('minute-start').value
            time_start = hour + ':' + minute
        }
        if (document.getElementById('hour-end').value && document.getElementById('minute-end').value){
            let hour = document.getElementById('hour-end').value
            let minute = document.getElementById('minute-end').value
            time_end = hour + ':' + minute
        }
        if (document.getElementById('comment').value){
            comment = document.getElementById('comment').value
        }
        let body = {
            'date': date_training,
            'calories': calories,
            'time_training_start': time_start,
            'time_training_finish': time_end,
            'comment': comment

        }
        // let body_2 = {
        //     'training_data': obj.body,
        //     'addit_info_training_data': body
        // }
        // console.log(body_2)
        // await makeRequest(addTrainingURL, 'POST', body_2)
        // console.log(obj.body, body)
    }

    return (
        <>
        <div className={styles.popup}>
            <div className={styles.body}>
                <div className={styles.date}>
                    <p className={styles.textDate}>Дата:</p>
                    {
                        stateDate 
                        ?
                        <>
                        <div className={styles.lineSelectDate}>
                            <input
                                className={styles.dateTraining}
                                id='date-training'
                                type='date'
                            />
                            <button onClick={() => {
                                setStateDate(false)
                            }}>Сегодня</button>
                        </div>
                        </>
                        :
                        <>
                        <div className={styles.lineTodayTraining}>
                            <p>Сегодня</p>
                            <button onClick={() => {
                                setStateDate(true)
                            }}>Изменить</button>
                        </div>
                        </>
                    }
                </div>
                <div className={styles.calories}>
                    <p>Потраченные калории:</p>
                    <input
                        id='calories'
                        type='number'
                        className={styles.inputCalories}
                    />
                </div>
                <div className={styles.startTraining}>
                    <p>Начало:</p>
                    <div className={styles.lineStartTraining}>
                        <input
                            id='hour-start'
                            type='number'
                            className={styles.inputStartHour}
                        />
                        <p className={styles.textStartHour}>ч</p>
                        <input
                            id='minute-start'
                            type='number'
                            className={styles.inputStartMinute}
                        />
                        <p className={styles.textStartMinute}>м</p>
                    </div>
                </div>
                <div className={styles.endTraining}>
                    <p>Окончание:</p>
                    <div className={styles.lineEndTraining}>
                        <input
                            id='hour-end'
                            type='number'
                            className={styles.inputEndHour}
                        />
                        <p className={styles.textEndHour}>ч</p>
                        <input
                            id='minute-end'
                            type='number'
                            className={styles.inputEndMinute}
                        />
                        <p className={styles.textEndMinute}>м</p>
                    </div>
                    <div className={styles.comment}>
                        <p>Комментарий:</p>
                        <textarea 
                            id='comment'
                            type='text'
                            className={styles.inputComment}
                        />
                    </div>
                </div>
                <button onClick={sendTraining}>Записать</button>
            </div>
        </div> 
        </>
    )
}