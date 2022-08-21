import ProfileQuestion from './ProfileQuestion'
//
import styles from '../../../styles/components/Profile/ProfileQuestions/ProfileQuestions.module.css'


const ProfileQuestions = ({ questions }) => {
    return (
        <div className={styles.wrapper_profile_questions}>
            <div className={styles.profile_questions}>
                {questions?.length > 0 ? questions.map(question => (
                    <ProfileQuestion 
                        key={question.id}
                        question={question}
                    />
                )) : (
                    <span>
                        zero
                    </span>
                )}
            </div>
        </div>
    )
}


export default ProfileQuestions