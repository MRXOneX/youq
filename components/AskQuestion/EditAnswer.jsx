//
import styles from '../../styles/components/AskQuestion/EditAnswer.module.css'


const EditAnswer = () => {
    return (
        <div className={styles.edit_answer}>
            <textarea placeholder='Добавьте ответ' className={styles.textarea} rows="8" />
        </div>
    )
}


export default EditAnswer