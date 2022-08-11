import Select from 'react-select'
// utils/options
import { classesOptions, itemsOptions } from '../utils/options'
//
import styles from '../styles/components/FiltredQuestion.module.css'



const FiltredQuestion = () => {
    return (
        <div className={styles.filtred_question}>
            <div className={styles.header}>
                <span className={styles.title}>
                    Фильтрация
                </span>
            </div>
            <div className={styles.content}>
                <Select options={itemsOptions} placeholder="Выберите предмет"  />

                <Select options={classesOptions} className={styles.class} placeholder="Твой класс"  />
            </div>

        </div>
    )
}


export default FiltredQuestion