import { useState } from 'react'
//
import { useSession } from 'next-auth/react'
//
import { useRouter } from 'next/router'
//
import { trpc } from '../../utils/trpc'
//
import styles from '../../styles/components/AskQuestion/EditComment.module.css'




const EditComment = ({ questionId }) => {
    const [comment, setComment] = useState('')

    const { data } = useSession()

    const router = useRouter()

    const question = trpc.useMutation(['question.comment'])


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // config.api_host.post('/question/update/comment', {
            //     text: comment,
            //     questionId: +router.query?.slug,
            //     author: {
            //         email: data?.user?.email
            //     }
            // })
            question.mutate({
                text: comment,
                questionId: questionId,
                authorId: data.user.id
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