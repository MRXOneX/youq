//
import styles from '../../styles/components/Profile/ProfileAnswers/ProfileAnswer.module.css'


const ProfileAnswer = ({ answer }) => {
    return (
        <div className={styles.profile_answer}>
            <div className={styles.header}>

            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    {answer.text}
                </p>
            </div>
        </div>
    )
}

export default ProfileAnswer