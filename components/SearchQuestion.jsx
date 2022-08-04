//
import styles from '../styles/components/SearchQuestion.module.css'



const SearchQuestion = () => {
    return (
        <div className={styles.search_question}>
            <input 
                className={styles.search_input}
                placeholder='Найдите ответ на ваш вопрос...' 
                type="text" 
            />
            <button className={styles.ask_question}>
                Задать вопрос
            </button>
        </div>
    )
}

export default SearchQuestion