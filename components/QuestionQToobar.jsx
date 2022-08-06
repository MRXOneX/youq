import styles from '../styles/components/QuestionQToolbar.module.css'



const QuestionQToolbar = () => {
    return (
        <div className={styles.toolbar}>
            <button>
                <span>
                    Дать ответ
                </span>
            </button>
            <button>
                <span>
                    Уточнить
                </span>
            </button>
        </div>
    )
}

export default QuestionQToolbar