import { useState } from 'react';
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

export default function Registration() {
    //Сделать выбор пола
    const [sex, setSex] = useState(false);
    const [sexMan, setSexMan] = useState(false);
    const [sexWomen, setSexWomen] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const styleRoundCheckbox = {
        pointColor: "black", 
        borderColor: "black"
    }

    const changeSex = (event) => {
        
    }

    return (
        <>
        <form className={styles.formRegistration}>
            <h2>Зарегестрируйтесь</h2>
            <div className={styles.fieldsContainer}>
                <Input placeholder="Имя" type="text" style={{height: "40px"}}/>
                <Input placeholder="Фамилия" type="password" />
                <Input placeholder="Имя пользователя" type="text" style={{height: "40px"}}/>
                <Input placeholder="Пароль" type="password" />
                <Input placeholder="Почта" type="text" style={{height: "40px"}}/>
                <Input placeholder="Дата рождения" type="date" /> 
            </div> 
            <div className={styles.sexAndRememberMeContainer}>
                <div className={styles.sexContainer}>
                    <RoundCheckbox
                        style={styleRoundCheckbox} text="М" onClick={changeSex} 
                    />
                    <RoundCheckbox
                        style={styleRoundCheckbox} text="Ж" onClick={changeSex}
                    />
                </div>
                <RoundCheckbox 
                    className={styles.checkBox} type='checkbox' text="Запомнить меня?" 
                    checked={rememberMe} setChecked={setRememberMe}
                />
            </div>
            <div className={styles.buttonRegistrationContainer}>
                <button className={styles.buttonRegistration}>Отправить</button>
            </div>
        </form>
        </>
    )
}