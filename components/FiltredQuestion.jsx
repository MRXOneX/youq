import Select from 'react-select'
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
                <Select placeholder="Выберите предмет"  />
            </div>

        </div>
    )
}


export default FiltredQuestion