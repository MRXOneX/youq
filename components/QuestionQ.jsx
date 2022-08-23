import { memo } from 'react'
//
import moment from 'moment'
//
import Image from 'next/image'
//
import styles from '../styles/components/QuestionQ.module.css'






const QuestionQ = ({ question }) => {
    console.log(question)
    return (
        <div className={styles.question}>
            <div className={styles.header}>
                <div style={{ display: 'flex' }}>
                    <Image
                        width={35}
                        height={35}
                        className={styles.avatar}
                        src={question?.author?.image}
                        alt="avatar"
                    />
                    <div className={styles.info}>
                        <span className={styles.name}>
                            {question?.author?.name}
                        </span>
                        <span className={styles.hours_item}>
                            {moment(String(question?.createdAt)).fromNow()}
                        </span>
                    </div>
                </div>
                <span className={styles.rating}>
                    {question?.rating}
                </span>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    {question?.textHtml}
                </p>
            </div>
            {question?.comments?.length > 0 && (
                <div className={styles.footer}>
                    {question.comments.map(comment => (
                        <div key={comment.id} className={styles.comment}>
                            <Image
                                width={30}
                                height={30}
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


export default memo(QuestionQ)