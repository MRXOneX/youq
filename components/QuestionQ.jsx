import moment from 'moment'
//
import styles from '../styles/components/QuestionQ.module.css'






const QuestionQ = ({ question }) => {
    return (
        <div className={styles.question}>
            <div className={styles.header}>
                <div style={{ display: 'flex' }}>
                    <img
                        className={styles.avatar}
                        src={question?.author?.image}
                        alt=""
                    />
                    <div className={styles.info}>
                        <span className={styles.name}>
                            {question?.author?.name}
                        </span>
                        <span className={styles.hours_item}>
                            {moment(String(question.createdAt)).fromNow()}
                        </span>
                    </div>
                </div>
                <span className={styles.rating}>
                    {question.rating}
                </span>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    {question?.text}
                </p>
            </div>
            {question?.comments?.length > 0 && (
                <div className={styles.footer}>
                    {question.comments.map(comment => (
                        <div key={comment.id} className={styles.comment}>
                            <img
                                className={styles.comment_avatar}
                                src={comment?.author?.image}
                                alt="avatar"
                            />
                            <p className={styles.comment_text}>
                                {comment.text}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}


export default QuestionQ