import { useState } from 'react'
//
import { trpc } from '../utils/trpc'
// components
import MyEditor from './MyEditor'
import EditComment from './AskQuestion/EditComment'
// icons
import RegularAnswer from './Icons/RegularAnswer'
import QuestionComment from './Icons/QuestionComment'
//
import styles from '../styles/components/QuestionQToolbar.module.css'



const QuestionQToolbar = ({ authorId, questionId }) => {

    const [selectedTab, setSelectedTab] = useState(null)


    const onChangeTab = tab => {
        setSelectedTab(prev => {
            if (prev && tab.name === prev.name) {
                return null
            }

            return tab
        })
    }

    const { mutateAsync: createRating } = trpc.useMutation(['question_protected.rating_question'])


    const onRating = async isRating => {
        await createRating({
            isRating,
            questionId
        })
    }

    return (
        <div className={styles.toolbar}>
            <div className={styles.menu}>
                <button
                    style={{
                        background: selectedTab?.name === 'edit_answer' && '#DEEBFF'
                    }}
                    onClick={() => onChangeTab({
                        name: 'edit_answer',
                        component: <MyEditor setSelectedTab={setSelectedTab} questionId={questionId} />
                    })}
                    className={styles.btn}
                >
                    <RegularAnswer size={20} color="#4971FF" />
                    <span className={styles.btn_name}>
                        Ответить
                    </span>
                </button>
                <button
                    style={{
                        background: selectedTab?.name === 'edit_comment' && '#DEEBFF'
                    }}
                    onClick={() => onChangeTab({
                        name: 'edit_comment',
                        component: <EditComment authorId={authorId} questionId={questionId}  />
                    })}
                    className={styles.btn}
                >
                    <QuestionComment size={20} color="#4971FF" />
                    <span className={styles.btn_name}>
                        Уточнить
                    </span>
                </button>
                <button onClick={() => onRating(true)}>
                    up
                </button>
                <button onClick={() => onRating(false)}>
                    down
                </button>
            </div>
            {selectedTab && selectedTab.component}
        </div>
    )
}

export default QuestionQToolbar