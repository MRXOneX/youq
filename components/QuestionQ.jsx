//
import styles from '../styles/components/QuestionQ.module.css'






const QuestionQ = ({ question }) => {
    console.log(question)
    return (
        <div className={styles.question}>
            <div className={styles.header}>
                <div style={{ display: 'flex' }}>
                    <img
                        className={styles.avatar}
                        src="https://i.imgur.com/67syzoU.png"
                        alt=""
                    />
                    <div className={styles.info}>
                        <span className={styles.name}>
                            Misha Полещенков
                        </span>
                        <span className={styles.hours_item}>
                            2 часа назад
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    {question.text}
                </p>
            </div>
        </div>
    )
}


export default QuestionQ