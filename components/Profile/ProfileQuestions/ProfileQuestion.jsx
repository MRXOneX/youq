//
import { useRouter } from 'next/router'
import styles from '../../../styles/components/Profile/ProfileQuestions/ProfileQuestion.module.css'


const ProfileQuestion = ({ question }) => {



    const router = useRouter()

    return (
        <div className={styles.profile_question}>
            <div className={styles.header}>
                <span>
                    time
                </span>
                <span>
                    item
                </span>
            </div>
            <div className={styles.content}>
                <p
                    onClick={() => router.push(`/question/${question.id}`)}
                    className={styles.text}
                >
                    {question?.text}
                </p>
            </div>
        </div>
    )
}

export default ProfileQuestion