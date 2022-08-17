import { memo } from 'react'
// components
import ProfileAnswers from './ProfileAnswers'
import ProfileQuestions from './ProfileQuestions'
//
import styles from '../../styles/components/Profile/MenuInfo.module.css'
import { useSession } from 'next-auth/react'



const MenuInfo = ({
    questions,
    answers,

    menuActive,
    setMenuActive
}) => {


    const { data } = useSession()




    const checkIsName = name => menuActive?.name === name
    return (
        <div className={styles.menu_info}>
            <div style={{ position: 'relative' }}>
                {checkIsName('answers') && <div className={styles.active} />}
                <button
                    // style={{ backgroundColor: checkIsName('answers') && '#E8F1FF' }}
                    onClick={() => setMenuActive({
                        name: 'answers',
                        component: <ProfileAnswers answers={answers} />
                    })}
                    className={styles.element}
                >
                    {data?.user?.id ? 'Мои ответы' : 'Ответы'} {answers.length}
                </button>
            </div>
            <div style={{ position: 'relative' }}>
                {checkIsName('questions') && <div className={styles.active} />}
                <button
                    // style={{ backgroundColor: checkIsName('questions') && '#E8F1FF' }}
                    onClick={() => setMenuActive({
                        name: 'questions',
                        component: <ProfileQuestions questions={questions} />
                    })}
                    className={styles.element}
                >
                    {data?.user?.id ? 'Мои вопросы' : 'Вопросы'} {questions.length}
                </button>
            </div>
        </div>
    )
}


export default memo(MenuInfo)