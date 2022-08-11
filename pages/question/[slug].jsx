import { useSession } from "next-auth/react"
//
import { useRouter } from "next/router"
//
import { trpc } from '../../utils/trpc'
// components
import QuestionA from "../../components/QuestionA"
import QuestionQ from "../../components/QuestionQ"
import QuestionQToolbar from "../../components/QuestionQToobar"
// layouts
import PageContainer from '../../layouts/PageContainer'

//
import styles from '../../styles/pages/Question.module.css'





const Question = () => {

    const { data } = useSession()

    const router = useRouter()
    console.log(router)

    const { data: question = null } = trpc.useQuery([
        'question.getOne',
        { id: +router?.query?.slug }
    ])

    return (
        <PageContainer>
            {question ? (
                <>
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
                </>
            ) : (
                <span>
                    not question
                </span>
            )}
        </PageContainer>
    )
}
export default Question