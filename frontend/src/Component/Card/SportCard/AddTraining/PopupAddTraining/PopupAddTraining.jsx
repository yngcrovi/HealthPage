import { useState, useEffect } from 'react';
import styles from './PopupAddTraining.module.css'
import stylesPopup from './PopupAdditInfoTraining/PopupAdditInfoTraining.module.css'
import CloseIcon from '@mui/icons-material/Close';
import makeRequest, { requestGET } from '../../../../../Request/makeRequest';
import { getLoadTypeURL } from '../../../../../URL/URL';
// import AddExercise from '../../AddExercise/AddExercise';

export default function PopupAddTraining({body, setBody}) {
    const [quantityExercise, setQuantityxercise] = useState([1])
    const [loadType, setLoadType] = useState('')
    const [partOfBody, setPartOfBody] = useState([])
    const [partOfMuscle, setPartOfMuscle] = useState([  ])
    const [exercise, setExercise] = useState([])
    const [approachNumber, setApproachNumber] = useState([[null]])
    const [weight, setWeight] = useState([])
    const [typeWeight, setTypeWeight] = useState(['kg'])
    let ltFormDb = []
    let pobFromDb = []


    useEffect(() => {
        // console.log("Новое значение:", body);
    }, [body]);

    const getLoadType = async () => {
        console.log('Начинаем')
        pobFromDb = await makeRequest(getLoadTypeURL, 'GET')
        console.log(pobFromDb)
        console.log(1)
    }

    

    const paintWriteField = (event, funcHook, i, boolArr, arr, j = null) => {
        if (boolArr){
            let helpArr = [...arr]
            if (j == null){
                console.log(helpArr)
                helpArr[i] = Number.isInteger(Number(event.target.value)) ? Number(event.target.value) : helpArr[i] = event.target.value
            }else{
                console.log(event.target.getAttribute('class'))
                helpArr[i][j] = Number(event.target.value)
            }
            funcHook(helpArr)
        }else{
            funcHook(event.target.value)
        }
        event.target.style.color = 'black'
        event.target.style.border = '2px solid black';
    }

    const AddDelAppNum = (i, bool) => {
        let helpArr = [...approachNumber]
        bool ? helpArr[i][helpArr[i].length] = 1 : helpArr[i].pop()
        setApproachNumber(helpArr)
    }

    const AddExercise = () => {
        setQuantityxercise([...quantityExercise, 1])
        setApproachNumber([...approachNumber, [null]])
        setTypeWeight([...typeWeight, 'kg'])
        setPartOfMuscle([...partOfMuscle, ''])
    }

    const closePopup = () => {
        document.getElementById(`${styles.popup}`).style.display = 'none';
        setQuantityxercise([1])
        setLoadType('')
        document.getElementById(`${styles.selectLT}`).value = 'Тип нагрузки...'
        setPartOfBody([])
        setPartOfMuscle([])
        setExercise([])
        setApproachNumber([[1]])
        console.log(1)
        setTypeWeight(['kg'])
    }

    const sendTraining = () => {
        var error = false

        setBody({
            'load_type': loadType,
            'part_of_body': partOfBody,
            'part_of_muscle': partOfMuscle,
            'exercise': exercise,
            'weight': weight,
            'type_weight': typeWeight,
            'approach_number': approachNumber
        })

        const arrPOB = Array.from(document.getElementsByClassName(`${styles.selectPOB}`))

        const arrWeight = Array.from(document.getElementsByClassName(`${styles.inputWeight}`))
        const arrAppNum = Array.from(document.getElementsByClassName(`${styles.inputAN}`))

        arrPOB.forEach(cell => {
            console.log(cell.getAttribute('hidden'))
            if (!cell.value){
                cell.style.border = '2px solid red';  
                error = true
            }
        })

        arrWeight.forEach(cell => {
            if (!cell.value){
                cell.style.border = '2px solid red';  
                error = true 
            }
        })

        arrAppNum.forEach((cell, i) => {
            if (!cell.value){
                cell.style.border = '2px solid red';  
                error = true
            }
        });



        


 
        // if(error){
        //     return
        // }
        // //part_of_muscle поменять
        // obj.setBody({
        //     'load_type': loadType,
        //     'exercise': exercise,
        //     'weight': weight,
        //     'type_weight': typeWeight,
        //     'number_of_repetitions': ap,
        // })
        // console.log(error)
        // document.getElementsByClassName(`${styles.popup}`)[0].style.display = 'none';
        // document.getElementsByClassName(`${stylesPopup.popup}`)[0].style.display = 'block';

    }

    return (
        <>
        <div 
            id={styles.popup}
            className={styles.popup}
        >
            <div className={styles.body}>
            <CloseIcon 
                className={styles.closePopup}
                onClick={closePopup}
            />
                <div className={styles.divLT}>
                    <select
                        id={styles.selectLT}
                        className={styles.selectLT}
                        onChange={(event) => {
                            getLoadType()
                            paintWriteField(event, setLoadType)
                        }}
                    >
                        <option selected hidden>Тип нагрузки...</option>
                        <option className={styles.variantSelect} value='Силовая'>Силовые</option>
                        <option className={styles.variantSelect} value={20}>Кардио</option>
                    </select>
                </div>
                {loadType &&
                    quantityExercise.map((el, i) => 
                    <>
                    <p className={styles.numberExercise}>{i+1}.</p>
                    <select
                        className={styles.selectPOB}
                        onChange={(event) => {
                            paintWriteField(event, setPartOfBody, i, true, partOfBody)
                    }}
                    >
                        <option selected hidden>Часть тела...</option>
                        <option className={styles.variantSelect} value='Спина'>Спина</option>
                        <option className={styles.variantSelect} value='Грудь'>Грудь</option>
                    </select>
                    {
                        ['Грудь', 'Плечи', 'Руки'].includes(partOfBody[i]) &&
                        <>
                        <select
                            className={styles.selectPOM}
                            id = {'pom' + `${i}`}
                            onChange={(event) => {
                                paintWriteField(event, setPartOfMuscle, i, true, partOfMuscle)
                        }}
                        >
                            <option selected hidden>Часть мышцы...</option>
                            <option className={styles.variantSelect} value='Верхний сегмент'>Верхний сегмент</option>
                            <option className={styles.variantSelect} value='Средний сегмент'>Средний сегмент</option>
                        </select>
                        </>
                    }
                    {
                        partOfBody[i] !== '' &&
                        <>
                        <div>
                            <select
                                className={styles.selectExercise}
                                id = {'exercise' + `${i}`}
                                onChange={(event) => {
                                    paintWriteField(event, setExercise, i, true, exercise)
                            }}
                            >
                                <option selected hidden>Назавние упражнения...</option>
                                <option className={styles.variantSelect} value='Подтягивания'>Подтягивания</option>
                                <option className={styles.variantSelect} value='Отжимания'>Отжимания</option>
                            </select>
                        </div>
                        </> 
                    }
                    {
                        <>
                        <div className={styles.divWeight}>
                        <input 
                            className={styles.inputWeight} 
                            id={'weight' + `${i+1}`}
                            type='number'
                            onInput={(event) => {
                                paintWriteField(event, setWeight, i, true, weight)
                            }}
                        />
                        <select
                            className={styles.selectTW}
                            onChange={(event) => {
                                paintWriteField(event, setTypeWeight, i, true, typeWeight)
                            }}
                        >
                            <option value='kg'>kg</option>
                            <option value='ibs'>ibs</option>
                        </select>
                        </div>
                        </>
                    }
                    {
                        <>
                        <p className={styles.textAN}>Введите количество повторений:</p>
                        <div className={styles.divAN}>
                        {approachNumber[i].map((el, j) => 
                            <>
                            <input 
                                className={styles.inputAN} 
                                type='number'
                                onInput={(event) => {
                                    paintWriteField(event, setApproachNumber, i, true, approachNumber, j)
                                }}
                            />
                            </>
                        )}
                        <button className={styles.addAN} onClick={() => {
                            AddDelAppNum(i, true)
                        }}>+</button>
                        {approachNumber[i].length > 1 &&
                            <button className={styles.delAN} onClick={() => {
                                AddDelAppNum(i, false)
                            }}>-</button>
                        }
                        </div>
                        </>
                    }
                    {
                        i + 1 == quantityExercise.length &&
                        <>
                        <button className={styles.buttonAddExercise} onClick={AddExercise}>+</button>
                    {
                        i > 0 &&
                        <>
                        <button className={styles.buttonDelExercise} onClick={() => {
                            var helpArr = [...quantityExercise]
                            helpArr.pop()
                            setQuantityxercise(helpArr)
                            helpArr = [...approachNumber]
                            helpArr.pop()
                            setApproachNumber(helpArr)
                            helpArr = [...typeWeight]
                            helpArr.pop()
                            setTypeWeight(helpArr)
                        }}>-</button>
                        </>
                    }
                    {
                        i >= 0 &&
                        <button className={styles.buttonSendTraining} onClick={sendTraining}>Добавить</button>
                    }
                        </>
                    }
                    </> 
                    )
                }
            </div>
        </div>
        </>
    )
}