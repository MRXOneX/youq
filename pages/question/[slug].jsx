import { PrismaClient } from "@prisma/client"
import { useSession } from "next-auth/react"
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
        include: {
            answers: {
                include: {
                    author: true
                }
            },
            comments: {
                include: {
                    author: true
                }
            },
            author: true
        }
    })


    return {
        props: { question },
    }
}





const Question = ({ question }) => {

    const { data } = useSession()

    console.log(question)

    return (
        <PageContainer>
            <div className={styles.left}>
                <QuestionQ question={question} />
                <QuestionQToolbar />
                {question?.answers?.length > 0 && (
                    <>
                        <span className={styles.title_answers}>
                            Ответ или решение: {question.answers.length}
                        </span>
                        {question.answers.map(answer => (
                            <QuestionA user={data?.user} key={answer.id} answer={answer} />
                        ))}
                    </>
                )}
            </div>
            <div className={styles.right}>

            </div>
        </PageContainer>
    )
}
export default Question