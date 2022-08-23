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

    const { data: question = null, status } = trpc.useQuery([
        'question.getOne',
        { id: +router?.query?.slug }
    ])


    return (
        <PageContainer title={`${question?.text} - YouQ`}>
            <div className={styles.question}>
                <div className={styles.left}>
                    {status === 'loading' && (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                            <Image height={150} objectFit="contain" src={loading} />
                        </div>
                    )}
                    {status === 'success' && question && (
                        <>
                            <QuestionQ question={question} />
                            {data?.user && (
                                <QuestionQToolbar authorId={data?.user?.id} questionId={question?.id} />
                            )}
                            {question?.answers?.length > 0 && (
                                <>
                                    <span className={styles.title_answers}>
                                        Ответ или решение: {question.answers.length}
                                    </span>
                                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                        {question.answers.map(answer => (
                                            <QuestionA 
                                                user={data?.user} 
                                                key={answer.id} 
                                                answer={answer} 
                                            />
                                        ))}
                                    </div>
                                    <StillQuestion />
                                </>
                            )}
                        </>
                    )}
                    <div style={{ paddingTop: '80px', width: '100%' }} />
                </div>
                {status === 'success' && (
                    <div className={styles.right}>
                        <QuestionsNew />
                    </div>
                )}
            </div>
        </PageContainer>
    )
}
export default Question