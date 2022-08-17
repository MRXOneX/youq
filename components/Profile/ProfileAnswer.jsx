//
import { useRouter } from 'next/router'
import styles from '../../styles/components/Profile/ProfileAnswers/ProfileAnswer.module.css'


const ProfileAnswer = ({ answer }) => {
    
    const router = useRouter()

    return (
        <div className={styles.profile_answer}>
            <div className={styles.header}>
                <span className={styles.time}>
                    time
                </span>
                <span className={styles.item}>
                    item
                </span>
                <span className={styles.class}>
                    class
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