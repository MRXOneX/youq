
//
import styles from '../styles/components/QuestionA.module.css'



const QuestionA = ({ user, answer }) => {
    console.log(answer)
    return (
        <div className={styles.question_a}>
            <div className={styles.header}>
                <div style={{ display: 'flex' }}>
                    <img
                        className={styles.avatar}
                        src={answer?.author?.image}
                        alt="avatar"
                    />
                    <div className={styles.info}>
                        <span className={styles.name}>
                            {answer?.author?.name}
                        </span>
                        <span className={styles.level_info}>
                            Hard
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    {answer?.text}
                </p>
            </div>
            <div className={styles.footer}>
                {answer?.comments?.length > 0 && (
                    <div className={styles.comments}>
                        {answer?.comments?.map(comment => (
                            <div className={styles.comment}>
                                <img
                                    className={styles.comment_avatar}
                                    src={comment?.author?.image}
                                    alt="comment_avatar"
                                />
                                <p className={styles.comment_text}>
                                    {comment?.text}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
                <div className={styles.input_add_comment}>
                    <img
                        className={styles.input_avatar}
                        src={user?.image}
                        alt="avatar_comment_input"
                    />
                    <input
                        placeholder='Уточните вопрос'
                        className={styles.input_comment}
                        type="text"
                    />
                </div>
            </div>
        </div>
    )
}

export default QuestionA