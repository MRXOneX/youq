//
import { useRouter } from 'next/router'
// utils
import { classesOptionsObject, itemsOptionsObject } from '../../utils/options'
//
import styles from '../../styles/components/Profile/ProfileAnswers/ProfileAnswer.module.css'




const ProfileAnswer = ({ answer }) => {
    
    const router = useRouter()

    console.log(answer)

    return (
        <div className={styles.profile_answer}>
            <div className={styles.header}>
                <span className={styles.time}>
                    time
                </span>
                <span className={styles.item}>
                    {itemsOptionsObject[answer.question.item]}
                </span>
                <span className={styles.class}>
                    {classesOptionsObject[answer.question.class]}
                </span>
            </div>
            <div className={styles.content}>
                <p onClick={() => router.push(`/question/${answer.questionId}`)} className={styles.text}>
                    {answer.text}
                </p>
            </div>
        </div>
    )
}

export default ProfileAnswer