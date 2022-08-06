import { useState } from 'react'
//
import Select from 'react-select'
//
import { useSession } from 'next-auth/react'
// icons
import Square from '../Icons/Square'
//
import config from '../../config'
//
import styles from '../../styles/components/AskQuestion/AskQuestion.module.css'


const AskQuestion = () => {
    const [value, setValue] = useState('')

    const { status } = useSession()


    const createQuestion = () => {
        config.api_host.post('/question/create', {
            text: value
        })
    }


    return (
        <div className={styles.ask_question}>
            <div>
                <span className={styles.title}>
                    Задайте вопрос
                </span>
            </div>
            <div className={styles.content}>
                <textarea
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder='Write question here'
                    rows="8"
                    className={styles.textarea}
                />
                <div className={styles.toolbar}>
                    <div>
                        <button className={styles.toolbar_btn}>
                            <Square color="#494949" />
                        </button>
                        {/* <button className={styles.toolbar_btn}>
                            files
                        </button> */}
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.selects}>
                    <div>
                        <span className={styles.title_select}>
                            По какому предмету твой вопрос?
                        </span>
                        <Select className={styles.select_item} placeholder="Выбери предмет" />
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <span className={styles.title_select}>
                            В каком ты классе?
                        </span>
                        <Select className={styles.select_class} placeholder="Твой класс" />
                    </div>
                </div>
                <button onClick={createQuestion} className={styles.btn_ask_question}>
                    Задать вопрос
                </button>
            </div>
        </div>
    )
}


export default AskQuestion