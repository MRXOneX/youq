import FiltredQuestion from '../components/FiltredQuestion'
import QuestionItem from '../components/QuestionItem'
import SearchQuestion from '../components/SearchQuestion'
import PageContainer from '../layouts/PageContainer'
//
import { trpc } from '../utils/trpc'
//
import styles from '../styles/pages/Home.module.css'



export default function Home() {

  const { data: questions = [] } = trpc.useQuery([
    'question.getAll'
  ])

  console.log(questions)


  return (
    <PageContainer>
      <div className={styles.home}>
        <div className={styles.left}>
          <SearchQuestion />
          <div className={styles.questions}>
            {questions.map(question => (
              <QuestionItem key={question.id} question={question} />
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <FiltredQuestion />
        </div>
      </div>
    </PageContainer>
  )
}



