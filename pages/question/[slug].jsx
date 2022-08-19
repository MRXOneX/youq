import { useSession } from "next-auth/react"
//
import { useRouter } from "next/router"
//
import Image from "next/image"
//
import { trpc } from '../../utils/trpc'
// components
import QuestionA from "../../components/QuestionA"
import QuestionQ from "../../components/QuestionQ"
import QuestionQToolbar from "../../components/QuestionQToobar"
import StillQuestion from '../../components/StillQuestion'
import QuestionsNew from "../../components/QuestionsNew"
// layouts
import PageContainer from '../../layouts/PageContainer'
// icons
import loading from '../../utils/gifs/loading.gif'
//
import styles from '../../styles/pages/Question.module.css'





const Question = () => {

    const { data } = useSession()

    const router = useRouter()

    const { data: question = null, isLoading } = trpc.useQuery([
        'question.getOne',
        { id: +router?.query?.slug }
    ])


    return (
        <PageContainer title={`${question?.text} - YouQ`}>
            {isLoading ? (
               <Image src={loading} alt="loading" />
            ) : (
                <div className={styles.question}>
                    <div className={styles.left}>
                        <QuestionQ question={question} />
                        {data?.user && (
                            <QuestionQToolbar authorId={data?.user?.id} questionId={question.id} />
                        )}
                        {question?.answers?.length > 0 && (
                            <>
                                <span className={styles.title_answers}>
                                    Ответ или решение: {question.answers.length}
                                </span>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    {question.answers.map(answer => (
                                        <QuestionA user={data?.user} key={answer.id} answer={answer} />
                                    ))}
                                </div>
                                <StillQuestion />
                            </>
                        )}
                    </div>
                    <div className={styles.right}>
                        <QuestionsNew />
                    </div>
                </div>
            )}
        </PageContainer>
    )
}
export default Question