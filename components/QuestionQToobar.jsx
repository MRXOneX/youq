// icons
import Answer from './Icons/Answer'
//
import styles from '../styles/components/QuestionQToolbar.module.css'



const QuestionQToolbar = () => {
    return (
        <div className={styles.toolbar}>
            <div className={styles.menu}>
                <button className={styles.btn}>
                    <Answer size={22} color="#4971FF" />
                    <span className={styles.btn_name}>
                        Ответить
                    </span>
                </button>
                <button className={styles.btn}>
                    <span className={styles.btn_name}>
                        Уточнить
                    </span>
                </button>
            </div>
            <textarea placeholder='Добавьте ответ' className={styles.edit_answer} rows="8" />
        </div>
    )
}

export default QuestionQToolbar