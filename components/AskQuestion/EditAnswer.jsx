//
import { useState } from 'react'
//
import { trpc } from '../../utils/trpc'
//
import styles from '../../styles/components/AskQuestion/EditAnswer.module.css'



const EditAnswer = ({ authorId, questionId }) => {
    const [answer, setAnswer] = useState('')


    const createAnswer = trpc.useMutation(['question_protected.create_answer'])
    
    console.log(createAnswer)

    const onCreateAnswer = () => {
        createAnswer.mutate({ 
            text: answer,
            authorId,
            questionId
         })
    }

    return (
        <div className={styles.edit_answer}>
            <textarea 
                value={answer}
                onChange={e => setAnswer(e.target.value)}
                placeholder='Добавьте ответ' 
                className={styles.textarea} 
                rows="8" 
            />
            <button onClick={onCreateAnswer} className={styles.btn_add_answer}>
                Добавить ответ
            </button>
        </div>
    )
}


export default EditAnswer