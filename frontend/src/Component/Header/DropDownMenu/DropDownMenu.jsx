import styles from './DropDownMenu.module.css'
import makeRequest from '../../../Request/makeRequest'
import { logoutURL, sportURL } from '../../../URL/URL'

export default function DropDownMenu() {
    
    const logoutUser = async () => {
        await makeRequest(logoutURL, 'POST')
        localStorage.clear()
        window.location.href = sportURL;
    }

    return (
        <>
        <div className={styles.body}>
            <div>
                <a href='/profile'><button className={styles.buttonProfile}>Профиль</button></a>
            </div>
            <div>
                <a href='/settings'><button className={styles.buttonSettings}>Настройки</button></a>
            </div>
            {
                localStorage.getItem('refresh_token') &&
                <div>
                    <button className={styles.buttonSettings} onClick={logoutUser}>Выйти</button>
                </div>
            }
        </div>
        </>
    )
}