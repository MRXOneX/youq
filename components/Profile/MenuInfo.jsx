import { memo } from 'react'
// components
import ProfileAnswers from './ProfileAnswers'
import ProfileQuestions from './ProfileQuestions'
import ProfileComments from './ProfileComments'
//
import styles from '../../styles/components/Profile/MenuInfo.module.css'



const MenuInfo = ({
    comments,
    questions,
    answers,

    menuActive,
    setMenuActive
}) => {




    const checkIsName = name => menuActive?.name === name
    return (
        <div className={styles.menu_info}>
            <div style={{ position: 'relative' }}>
                {checkIsName('answers') && <div className={styles.active} />}
                <button
                    style={{ backgroundColor: checkIsName('answers') && '#E8F1FF' }}
                    onClick={() => setMenuActive({
                        name: 'answers',
                        component: <ProfileAnswers answers={answers} />
                    })}
                    className={styles.element}
                >
                    Ответы {answers.length}
                </button>
            </div>
            <div style={{ position: 'relative' }}>
                {checkIsName('questions') && <div className={styles.active} />}
                <button
                    style={{ backgroundColor: checkIsName('questions') && '#E8F1FF' }}
                    onClick={() => setMenuActive({
                        name: 'questions',
                        component: <ProfileQuestions questions={questions} />
                    })}
                    className={styles.element}
                >
                    Вопросы {questions.length}
                </button>
            </div>
            <div style={{ position: 'relative' }}>
                {checkIsName('comments') && <div className={styles.active} />}
                <button
                    style={{ backgroundColor: checkIsName('comments') && '#E8F1FF' }}
                    onClick={() => setMenuActive({
                        name: 'comments',
                        component: <ProfileComments comments={comments} />
                    })}
                    className={styles.element}
                >
                    Комментарии {comments.length}
                </button>
            </div>
        </div>
    )
}


export default memo(MenuInfo)