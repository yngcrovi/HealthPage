import Header from '../../Component/Header/Header.jsx'
import SportCard from '../../Component/Card/SportCard/SportCard.jsx'
import styles from './SportPage.module.css'

export default function SportPage() {

    return (
        <>
        {
            //Проблема с тем, что спорткард прячется за хедером
        }
        <Header /> 
        <div className={styles.body}>
            <SportCard />
        </div>
        </>
    )
}