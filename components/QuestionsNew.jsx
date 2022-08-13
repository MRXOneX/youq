import { trpc } from '../utils/trpc'
// components
import QuestionNew from './QuestionNew'
//
import styles from '../styles/components/QuestionsNew.module.css'



const QuestionsNew = () => {

    const { data: questions = [] } = trpc.useQuery([
        'question.getAll',
        { limit: 4 }
      ])


    return (
        <div className={styles.questions_new}>
            <h3>
                Новые вопросы
            </h3>
            <div className={styles.content}>
                {questions.map(question => (
                    <QuestionNew key={question.id} question={question} />  
                ))}              
            </div>
        </div>
    )
}


export default QuestionsNew