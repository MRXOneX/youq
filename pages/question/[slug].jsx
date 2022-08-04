import { useRouter } from "next/router"
// components
import QuestionQ from "../../components/QuestionQ"
// layouts
import PageContainer from '../../layouts/PageContainer'
//
import styles from '../../styles/pages/Question.module.css'


const Question = () => {

    const router = useRouter()

    return (
        <PageContainer>
            <div className={styles.left}>
                <QuestionQ />
            </div>
            <div className={styles.right}>

            </div>
        </PageContainer>
    )
}
export default Question