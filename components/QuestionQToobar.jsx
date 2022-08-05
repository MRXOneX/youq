import styles from '../styles/components/QuestionQToolbar.module.css'



const QuestionQToolbar = () => {
    return (
        <div className={styles.toolbar}>
            <button>
                <span>
                    Add Answer
                </span>
            </button>
            <button>
                <span>
                    Add comment
                </span>
            </button>
        </div>
    )
}

export default QuestionQToolbar