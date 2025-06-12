import { useState } from 'react';
import { Typography } from '@mui/material';
import styles from './Registration.module.css'   
import makeRequest from '../../../Request/makeRequest';
import { requestPOST } from '../../../Request/makeRequest';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import { registrationURL, sportURL } from '../../../URL/URL';

export default function Registration() {
    const [sex, setSex] = useState('')

    const changeSex = (event) => {
        setSex(event.target.value)
    }

    const sendRegistration = async () => {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        let email = document.getElementById('email').value
        let dateOfBirthday = document.getElementById('dateOfBirthday').value
        let exp_refresh = document.getElementById('check-box-remember-me-registration').checked
        let body = {
            'username': username,
            'password': password,
            'email': email,
            'date_of_birthday': dateOfBirthday,
            'sex': sex, 
            'exp_refresh': exp_refresh 
        }
        let response = await requestPOST(registrationURL, body)
        switch(response.status){
            case 200:
                response = await response.json()
                localStorage.setItem('refresh_token', response['refresh_token'])
                break;
            case 401:
                alert("User with this param exist");
                return
        }
        window.location.href = sportURL;
    }

    return (
        <>
        <div className={styles.bodyRegistrationField}>
            <Typography variant='p' className={styles.name}>Зарегестрируйтесь</Typography>
            <div className={styles.registrationField}>
                <input
                    className={styles.username}
                    id='username'
                    placeholder='Имя пользователя'
                    type='text'
                />
            </div>
            <div className={styles.registrationField}>
                <input
                    className={styles.password}
                    id='password'
                    placeholder='Пароль'
                    type='password'
                />
            </div>
            <div className={styles.registrationField}>
                <input
                    className={styles.mail}
                    id='email'
                    placeholder='Почта'
                    type='text'
                />
            </div>
            <div className={styles.registrationField}>
                <input
                    className={styles.dateOfBirthday}
                    id='dateOfBirthday'
                    type='date'
                />
            </div>
            <div className={styles.radioButtons}>
            <FormControl>
            <RadioGroup
                row
                value={sex}
                onChange={changeSex}
            >
                <FormControlLabel value="man" control={<Radio />} label="М" />
                <FormControlLabel value="woman" control={<Radio />} label="Ж" />
            </RadioGroup>
            </FormControl>
            </div>
            <div className={styles.lineRememberUser}>
                    <input className={styles.checkBox} type='checkbox' id='check-box-remember-me-registration'/>
                    <p className={styles.textRememberMe}>Запомнить меня</p>
            </div>
            <button className={styles.buttonRegistration} onClick={sendRegistration}>Отправить</button>
        </div>
        </>
    )
}