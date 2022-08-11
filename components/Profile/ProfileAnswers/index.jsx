//  components
import ProfileAnswer from '../ProfileAnswer'
//
import styles from '../../../styles/components/Profile/ProfileAnswers/ProfileAnswers.module.css'


const ProfileAnswers = ({ answers }) => {
    return (
        <div className={styles.wrapper_profile_answers}>
            <div className={styles.profile_answers}>
                {answers?.length > 0 ? answers.map(answer => (
                    <ProfileAnswer key={answer.id} answer={answer} />
                )) : (
                    <span>
                        zero
                    </span>
                )}
            </div>
        </div>
    )
}

export default ProfileAnswers