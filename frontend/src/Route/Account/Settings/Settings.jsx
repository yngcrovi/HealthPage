import styles from './Settings.module.css'
import Header from '../../../Component/Header/Header'

export default function Settings() {

    return (
        <>
        <Header />
        <div className={styles}>
            <p>Перенести добавление и удаление упражненией и похожий функционал</p>
            <p>Изменять данные тренировки, которые были по ошибки введены неккоректно</p>
        </div>
        </>
    )
}