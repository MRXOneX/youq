import FiltredQuestion from '../components/FiltredQuestion'
import QuestionItem from '../components/QuestionItem'
import SearchQuestion from '../components/SearchQuestion'
import PageContainer from '../layouts/PageContainer'
//
import { PrismaClient } from '@prisma/client'
//
import styles from '../styles/pages/Home.module.css'


const prisma = new PrismaClient()

export async function getServerSideProps(context) {

  const questions = await prisma.question.findMany()
  

  return {
    props: {
      questions
    }, // will be passed to the page component as props
  }
}



export default function Home({ questions }) {
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



