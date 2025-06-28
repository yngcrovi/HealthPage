import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Registration.module.css'   
import makeRequest from '../../../Request/makeRequest';
import { requestPOST } from '../../../Request/makeRequest';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import { registrationURL, sportURL } from '../../../URL/URL';
import RoundCheckbox from '../../../Component/Tag/RoundCheckbox';
import Input from '../../../Component/Tag/Input';
import OpenPassword from '../../../Component/Icon/OpenPassword';
import HiddenPassword from '../../../Component/Icon/HiddenPassword';

export default function Registration() {
    //Сделать выбор пола
    const wSexRef = useRef(null);
    const mSexRef = useRef(null);
    const rememberMeRef = useRef(null);

    const [sex, setSex] =useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const styleRoundCheckbox = {
        pointColor: "black", 
        borderColor: "black"
    }

    const openPassword = useCallback((event) => {
        const passwordField = event.target.closest(`.${styles.passwordContainer}`).querySelector('[type="password"]');
        passwordField.type = 'text';
        setShowPassword(true);
        // Ваш код запуска действия
        }, []);

    //Изучить, когда он работает и как его использовать
    const hiddenPassword = useCallback((event) => {
        if (showPassword) {
            const passwordField = event.target.closest(`.${styles.passwordContainer}`).querySelector('[type="text"]');
            passwordField.type = 'password';
            setShowPassword(false);
            console.log('отработало')
        }
        // Ваш код остановки действия
    }, [showPassword]);

    useEffect(() => {
    // Навешиваем обработчик mouseup на документ
    document.addEventListener('mouseup', hiddenPassword);

    return () => {
        // Чистим обработчик при размонтировании
        document.removeEventListener('mouseup', hiddenPassword);
    };
    }, [showPassword]);


    const changeSex = (event) => {
        if (sex) {
            switch (sex){
                case "М":
                    if (mSexRef.current.contains(event.target)) setSex('');
                    else setSex('Ж');
                break;
                case "Ж":
                    if (wSexRef.current.contains(event.target)) setSex('');
                    else setSex('М');
                break;
                default:
                    setSex('');
            }
        }else{
            if (mSexRef.current.contains(event.target)) setSex('М');
            if (wSexRef.current.contains(event.target)) setSex('Ж');
        }
    } 

    const checkValidUsername = (event) => {
        const pattern = /[A-Za-z]/;
        if (!pattern.test(event.target.value.slice(-1))) event.target.value = event.target.value.slice(0, -1);
    }

    const sendData = () => {
        console.log(document.querySelector(`.${styles.formRegistration}`).querySelectorAll('input'));
    }

    // const testFunc = (event) => {
    //     let tg
    //     console.log(window.Telegram)
    //     console.log(window.Telegram.WebApp)
    //     if (window.Telegram && window.Telegram.WebApp) {
    //         tg = window.Telegram.WebApp;
            
    //     // Расширяем приложение на весь экран (опционально)
    //     tg.expand();
        
    //     // Получаем данные пользователя
    //     const userData = tg.initDataUnsafe?.user;

    //     const user = {
    //         id: userData.id,
    //         firstName: userData.first_name,
    //         lastName: userData.last_name,
    //         username: userData.username,
    //         languageCode: userData.language_code,
    //         isPremium: userData.is_premium,
    //     }

    //     fetch('/registration', {
    //         credentials: 'include',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         method: 'POST',
    //         body: JSON.stringify(user)
    //     });
    // }}

    return (
        <>
        <div className={styles.formRegistration}>
            <h2>Зарегестрируйтесь</h2>
            <div className={styles.fieldsContainer}>
                <Input placeholder="Имя" type="text" style={{height: "40px"}} />
                <Input placeholder="Фамилия" type="text" />
                <Input placeholder="Имя пользователя" type="text" style={{height: "40px"}} onInput={checkValidUsername} />
                <div className={styles.passwordContainer}>
                <Input placeholder="Пароль" type="password" 
                    icon={showPassword ? <HiddenPassword style={{
                        position: 'absolute', cursor: 'pointer', right: '10px', top: '50%',
                        transform: 'translateY(-50%)' 
                        }} onMouseLeave={hiddenPassword}/> 
                        : 
                        <OpenPassword style={{
                        position: 'absolute', cursor: 'pointer', right: '10px', top: '50%',
                        transform: 'translateY(-50%)'
                    }} onMouseDown={openPassword}/>} 
                />
                </div>
                <Input placeholder="Почта" type="text" style={{height: "40px"}} />
                <Input placeholder="Дата рождения" type="date" /> 
            </div> 
            <div className={styles.sexAndRememberMeContainer}>
                <div className={styles.sexContainer}>
                    <RoundCheckbox
                        style={styleRoundCheckbox} text="М" ref={mSexRef} onClick={changeSex} checked={sex == "М" ? true : false}
                    />
                    <RoundCheckbox
                        style={styleRoundCheckbox} text="Ж" ref={wSexRef} onClick={changeSex} checked={sex == "Ж" ? true : false}
                    />
                </div>
                <RoundCheckbox 
                    className={styles.checkBox} text="Запомнить меня?" 
                    ref={rememberMeRef} checked={rememberMe} onClick={() => {setRememberMe(!rememberMe)}}
                />
            </div>
            <div className={styles.buttonRegistrationContainer}>
                <button className={styles.buttonRegistration} onClick={sendData}>Отправить</button>
            </div>
        </div>
        </>
    )
}