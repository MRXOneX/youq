import { useState } from 'react'
//
import { trpc } from '../../utils/trpc'
//
import styles from '../../styles/components/AskQuestion/EditComment.module.css'




const EditComment = ({ authorId, questionId }) => {
    const [comment, setComment] = useState('')


    const question = trpc.useMutation(['question_protected.create_comment'])


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            question.mutate({
                text: comment,
                questionId,
                authorId
            })

            
            setComment('')
        }
    }

    return (
        <input
            value={comment}
            onChange={e => setComment(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Уточните вопрос'
            className={styles.edit_comment}
            type="text"
        />
    )
}

export default EditComment