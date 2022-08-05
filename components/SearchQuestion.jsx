//
import { useRouter } from 'next/router'
//
import styles from '../styles/components/SearchQuestion.module.css'




const SearchQuestion = () => {


    const router = useRouter()
    const onAskQuestion = () => {
        router.push('/ask-question')
    }


    return (
        <div className={styles.search_question}>
            <input 
                className={styles.search_input}
                placeholder='Найдите ответ на ваш вопрос...' 
                type="text" 
            />
            <button onClick={onAskQuestion} className={styles.ask_question}>
                Задать вопрос
            </button>
        </div>
    )
}

export default SearchQuestion