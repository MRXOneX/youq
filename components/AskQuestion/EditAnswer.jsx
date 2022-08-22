//
import { useState } from 'react'
//
import { trpc } from '../../utils/trpc'
//
import styles from '../../styles/components/AskQuestion/EditAnswer.module.css'



const EditAnswer = ({ authorId, questionId }) => {
    const [answer, setAnswer] = useState('')
    const [test, setTest] = useState([])
    console.log(test)


    const { mutateAsync: createAnswer } = trpc.useMutation(['question_protected.create_answer'])
    
    console.log(createAnswer)

    const onCreateAnswer = () => {
        createAnswer({ 
            text: answer,
            authorId,
            questionId
         })
    }

    // trpc.useSubscription(['question_protected.onCreateAnswer'], {
    //     onNext: (data) => {
    //         setTest(prev => {
    //             return [...prev, data]
    //         })
    //     }
    // })

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