import { memo } from 'react'
//
import { useSession } from 'next-auth/react'
//
import styles from '../../styles/components/Profile/MenuInfo.module.css'



const MenuInfo = ({
    questions,
    answers,

    menuAnswers,
    menuQuestions,

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
                    onClick={() => setMenuActive(menuAnswers)}
                    className={styles.element}
                >
                    {data?.user?.id ? 'Мои ответы' : 'Ответы'} {answers.length}
                </button>
            </div>
            <div style={{ position: 'relative' }}>
                {checkIsName('questions') && <div className={styles.active} />}
                <button
                    // style={{ backgroundColor: checkIsName('questions') && '#E8F1FF' }}
                    onClick={() => setMenuActive(menuQuestions)}
                    className={styles.element}
                >
                    {data?.user?.id ? 'Мои вопросы' : 'Вопросы'} {questions.length}
                </button>
            </div>
        </div>
    )
}


export default memo(MenuInfo)