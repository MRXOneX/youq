//
import { useRouter } from 'next/router'
//
import styles from '../styles/components/QuestionItem.module.css'






const QuestionItem = ({ question }) => {

    const router = useRouter()


    return (
        <div className={styles.question_item}>
            <div className={styles.header}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        className={styles.avatar}
                        src="https://i.imgur.com/67syzoU.png"
                        alt=""
                    />
                    <div className={styles.info}>
                        <span className={styles.name}>
                            Misha Poleshchenkov
                        </span>
                        <span className={styles.hours_item}>
                            hours and item
                        </span>
                    </div>
                </div>
                <div>
                    0
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text} onClick={() => router.push(`/question/${question.id}`)}>
                    {question.text}
                </p>
            </div>
            <div className={styles.footer}>
                <div>
                    info
                </div>
                <div>
                    <button className={styles.answer}>
                        Ответить
                    </button>
                </div>
            </div>
        </div>
    )
}


export default QuestionItem