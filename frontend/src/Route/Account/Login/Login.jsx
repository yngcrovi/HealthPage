import styles from './Login.module.css'
import { Typography } from '@mui/material';
import { requestPOST } from '../../../Request/makeRequest';
import { loginURL, sportURL } from '../../../URL/URL';

export default function LogIn() {

    const sendLogin = async () => {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        let exp_refresh = document.getElementById('check-box-remember-me-login').checked
        let body = {
            'username': username,
            'password': password,
            'exp_refresh': exp_refresh 
        }
        let response = await requestPOST(loginURL, body)
        switch(response.status){
            case 200:
                response = await response.json()
                localStorage.setItem('refresh_token', response['refresh_token'])
                break;
            case 401:
                alert("User not exist");
                return
        }
        window.location.href = sportURL;
    }

    return (
        <>
        <div className={styles.body}>
            <Typography variant='p' className={styles.name}>Вход</Typography>
            <div className={styles.LogInField}>
                <input
                    className={styles.mail}
                    id = 'username'
                    placeholder='Имя пользователя'
                    type='text'
                />
            </div>
            <div className={styles.LogInField}>
                <input
                    className={styles.password}
                    id = 'password'
                    placeholder='Пароль'
                    type='password'
                />
            </div>
            <div className={styles.lineRememberUser}>
                <input type='checkbox' className={styles.checkBox} id='check-box-remember-me-login'/>
                <p className={styles.textRememberMe}>Запомнить меня</p>
                <a className={styles.forgotPasswordLink} href='/forgotPassword'>Забыли пароль?</a>
            </div>
            <button className={styles.buttonLogin} onClick={sendLogin}>Отправить</button>
            <div className={styles.notAuth}>
                <p>
                    Нет аккаунта? 
                    {<a href='/registration' className={styles.registration}>Зарегистрируйтесь!</a>}
                </p>
            </div>
        </div>
        </>
    )
}