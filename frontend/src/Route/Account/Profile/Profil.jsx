import { useState, useEffect } from 'react'
import styles from './Profile.module.css'
import Header from '../../../Component/Header/Header'
import { requestGET, requestPOST, requestRefreshAccess } from '../../../Request/makeRequest'
import { requestIfNotAuthLogout } from '../../../Request/someRequest'
import { getParamURL, updateParamURL } from '../../../URL/URL'

export default function Profile() {
    const [params, setParams] = useState({});

    useEffect(async () => {
        let response = await requestIfNotAuthLogout(getParamURL)
        setParams(response)
    }, []);

    let weight = params['weight']
    let height = params['height']

    const removeBlocking = () => {
        let input_weight = document.querySelector(`.${styles.weight}`)
        input_weight.disabled = false;
        let input_height = document.querySelector(`.${styles.height}`)
        input_height.disabled = false;
    }

    const saveChanges = async () => {
        let input_weight = document.querySelector(`.${styles.weight}`) 
        let input_height = document.querySelector(`.${styles.height}`)
        if (input_weight.value  !== '' &&  input_height.value  !== ''){
            let body = {
                'height': input_height.value,
                'weight': input_weight.value
            }
            await requestPOST(updateParamURL, body)
            input_weight.placeholder = input_weight.value
            input_weight.disabled = true
            input_weight.style.border = '3px solid black';
            input_height.placeholder = input_height.value
            input_height.style.border = '3px solid black';
            input_height.disabled = true
        }else{
            input_weight.style.border = '3px solid red';
            input_height.style.border = '3px solid red';
        }
    }

    return (
        <>
        <Header />
        <div className={styles.body}>
            <div className={styles.dataAboutUser}>
                <div>
                    <p>Вес</p>
                    <input id='1' type='number' className={styles.weight} placeholder={weight} disabled/>
                    <button className={styles.buttonChange} onClick={removeBlocking}>Изменить</button>
                </div>
                <div>
                    <p>Рост</p>
                    <input type='number' placeholder={height} className={styles.height} disabled/>
                    <button className={styles.buttonSave} onClick={saveChanges} >Сохранить</button>
                </div>
                <p>Количество тренировок:</p>
                <p>Время тренировкок:</p> 
                <p>Среднее время тренировки:</p> 
                <p>Потрачено каллорий:</p>
                <p>Типы тренировок и их количество:</p>
            </div>
        </div>
        </>
    )
}