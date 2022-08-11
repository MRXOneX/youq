
import { useState } from 'react'
//
import { useRouter } from 'next/router'
//
import { trpc } from '../utils/trpc'
//
import styles from '../styles/components/SearchQuestion.module.css'




const SearchQuestion = () => {

    const [searchs, setSearch] = useState('')

    const mutation = trpc.useMutation(['question.getSearch']);

    console.log(mutation)

    const onChange = value => {
        setSearch(value)
        mutation.mutate({ search: 'a' })
    }


    const router = useRouter()


    const onAskQuestion = () => {
        router.push('/ask-question')
    }


    return (
        <div className={styles.search_question}>
            <input 
                value={searchs}
                onChange={e => onChange(e.target.value)}
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