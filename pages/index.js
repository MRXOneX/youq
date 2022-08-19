import Image from 'next/image'
//
import FiltredQuestion from '../components/FiltredQuestion'
import QuestionItem from '../components/QuestionItem'
import SearchQuestion from '../components/SearchQuestion'
// components/Skeleton
import QuetionItemSkeleton from '../components/Skeletons/QuetionItemSkeleton'
// layouts
import PageContainer from '../layouts/PageContainer'
//
import { trpc } from '../utils/trpc'
//
import loading from '../utils/gifs/loading.gif'
//
import styles from '../styles/pages/Home.module.css'



export default function Home() {

  const { data: questions = [], status } = trpc.useQuery([
    'question.getAll',
    { limit: 30 }
  ])



  return (
    <PageContainer>
      <div className={styles.home}>
        <div className={styles.left}>
          <SearchQuestion />
          <div className={styles.questions}>
            {status === 'loading' && (
              <>
                <div className={styles.question_skeleton_loading}>
                  <QuetionItemSkeleton />
                  <QuetionItemSkeleton />
                  <QuetionItemSkeleton />
                  <QuetionItemSkeleton />
                </div>
                <div className={styles.question_loading}>
                  <Image 
                    objectFit='contain' 
                    height={150} 
                    src={loading} 
                    alt="loading"
                  />
                </div>
              </>
            )}
            {status === 'success' &&
              questions.map(question => (
                <QuestionItem key={question.id} question={question} />
              ))}
            <div style={{ paddingTop: '80px' }} />
          </div>
        </div>
        <div className={styles.right}>
          <FiltredQuestion />
        </div>
      </div>
    </PageContainer>
  )
}



