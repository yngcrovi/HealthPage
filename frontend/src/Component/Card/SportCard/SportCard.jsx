import styles from './SportCard.module.css'
import AddTraining from './AddTraining/AddTraining'
import ViewAllExercise from './ViewAllExercise/ViewAllExercise'
import ViewLastTraining from './ViewLastTraining/ViewLastTraining'
import ViewResultLastExercise from './ViewResultLastExercise/ViewResultLastExercise'
import ViewResultTheBestExercise from './ViewResultTheBestExercise/ViewResultTheBestExercise'
import AddExercise from './AddExercise/AddExercise'

export default function SportCard() {


    return (
        <>
        <div className={styles.test}>
        <div className={styles.line1}>
        <div className=''>
            <AddTraining />
        </div>
        <div className={styles.test1}>
            <ViewAllExercise />
        </div>
        <div className={styles.test1}>
            <ViewLastTraining />
        </div>
        </div>
        <div className={styles.line2}>
        <div className=''>
            <ViewResultLastExercise />
        </div>
        <div className={styles.test1}>
            <ViewResultTheBestExercise />
        </div>
        <div className={styles.test1}>
            <AddExercise />
        </div>
        </div>
        </div>
        </>
    )
}