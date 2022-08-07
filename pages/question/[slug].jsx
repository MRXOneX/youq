import { PrismaClient } from "@prisma/client"
// components
import QuestionA from "../../components/QuestionA"
import QuestionQ from "../../components/QuestionQ"
import QuestionQToolbar from "../../components/QuestionQToobar"
// layouts
import PageContainer from '../../layouts/PageContainer'
//
import styles from '../../styles/pages/Question.module.css'


const prisma = new PrismaClient()

export async function getServerSideProps({ params }) {

    const question = await prisma.question.findUnique({
        where: {
          id: +params.slug,
        },
      })


    return {
        props: { question },
    }
}





const Question = ({ question }) => {


    return (
        <PageContainer>
            <div className={styles.left}>
                <QuestionQ question={question} />
                <QuestionQToolbar />
                <span className={styles.title_answers}>
                    Ответ или решение: 1
                </span>
                <QuestionA />
            </div>
            <div className={styles.right}>

            </div>
        </PageContainer>
    )
}
export default Question