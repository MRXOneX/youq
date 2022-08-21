import { useState } from 'react'
//
import { useRouter } from 'next/router'
//
import Select from 'react-select'
//
import { trpc } from '../utils/trpc'
import { classesOptions, itemsOptions } from '../utils/options'
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
            <div className={styles.search}>
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
            <div className={styles.filtred}>
                <Select 
                    options={itemsOptions}
                    placeholder="Выберите предмет" 
                    className={styles.filtred_item} 
                />

                <Select 
                    options={classesOptions}
                    placeholder="Твой класс" 
                    className={styles.filtred_class} 
                />
            </div>
        </div>
    )
}

export default SearchQuestion