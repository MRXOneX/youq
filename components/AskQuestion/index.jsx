//
import styles from '../../styles/components/AskQuestion/AskQuestion.module.css'


const AskQuestion = () => {
    return (
        <div className={styles.ask_question}>
            <div>
                <span className={styles.title}>
                    Задайте вопрос
                </span>
            </div>
            <div className={styles.content}>
                <textarea
                    placeholder='Write question here'
                    rows="8"
                    className={styles.textarea}
                />
                <div className={styles.toolbar}>
                    <div>
                        <button className={styles.toolbar_btn}>
                            formules
                        </button>
                        <button className={styles.toolbar_btn}>
                            files
                        </button>
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <input type="text" />
                <button className={styles.btn_ask_question}>
                    Задать вопрос
                </button>
            </div>
        </div>
    )
}


export default AskQuestion