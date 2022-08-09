import { useState } from 'react'
// components
import EditAnswer from './AskQuestion/EditAnswer'
import EditComment from './AskQuestion/EditComment'
// icons
import RegularAnswer from './Icons/RegularAnswer'
import QuestionComment from './Icons/QuestionComment'
//
import styles from '../styles/components/QuestionQToolbar.module.css'



const QuestionQToolbar = () => {

    const [selectedTab, setSelectedTab] = useState(null)


    const onChangeTab = tab => {
        setSelectedTab(prev => {
            if (prev && tab.name === prev.name) {
                return null
            }

            return tab
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
                        component: <EditAnswer />
                    })}
                    className={styles.btn}
                >
                    <RegularAnswer size={22} color="#4971FF" />
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
                        component: <EditComment />
                    })}
                    className={styles.btn}
                >
                    <QuestionComment size={22} color="#4971FF" />
                    <span className={styles.btn_name}>
                        Уточнить
                    </span>
                </button>
            </div>
            {selectedTab && selectedTab.component}
        </div>
    )
}

export default QuestionQToolbar