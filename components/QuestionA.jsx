//
import { useState } from 'react'
//
import Image from 'next/image'
//
import { trpc } from '../utils/trpc'
//
import styles from '../styles/components/QuestionA.module.css'



const QuestionA = ({ user, answer }) => {
    const [comment, setComment] = useState('')



    const answerMutate = trpc.useMutation(['question_protected.create_comment_to_answer'])


    const handleKeyDown = (event) => {

        if (event.key === 'Enter') {
            answerMutate.mutate({
                text: comment,
                answerId: answer.id,
                authorId: user.id
            })

            
            setComment('')
        }
    }

    return (
        <div className={styles.question_a}>
            <div className={styles.header}>
                <div style={{ display: 'flex' }}>
                    <Image
                        width={35}
                        height={35}
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
                            <div key={comment.id} className={styles.comment}>
                                <Image
                                    width={30}
                                    height={30}
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
                    <Image
                        width={30}
                        height={30}
                        className={styles.input_avatar}
                        src={user?.image}
                        alt="avatar_comment_input"
                    />
                    <input
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        onKeyDown={handleKeyDown}
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