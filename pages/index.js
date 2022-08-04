import FiltredQuestion from '../components/FiltredQuestion'
import QuestionItem from '../components/QuestionItem'
import SearchQuestion from '../components/SearchQuestion'
import PageContainer from '../layouts/PageContainer'
//
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <PageContainer>
      <div className={styles.home}>
        <div className={styles.left}>
          <SearchQuestion />
          <div className={styles.questions}>
            <QuestionItem />
            <QuestionItem />
            <QuestionItem />
            <QuestionItem />
            <QuestionItem />
            <QuestionItem />
            <QuestionItem />
          </div>
        </div>
        <div className={styles.right}>
          <FiltredQuestion />
        </div>
      </div>
    </PageContainer>
  )
}
