import { useState } from 'react'
// icons
import RegularAnswer from './Icons/RegularAnswer'
import QuestionComment from './Icons/QuestionComment'
//
import styles from '../styles/components/QuestionQToolbar.module.css'



const QuestionQToolbar = () => {

    const [selectedTab, setSelectedTab] = useState(<textarea placeholder='Добавьте ответ' className={styles.edit_answer} rows="8" />)


    return (
        <div className={styles.toolbar}>
            <div className={styles.menu}>
                <button className={styles.btn}>
                    <RegularAnswer size={22} color="#4971FF" />
                    <span className={styles.btn_name}>
                        Ответить
                    </span>
                </button>
                <button className={styles.btn}>
                    <QuestionComment size={22} color="#4971FF" />
                    <span className={styles.btn_name}>
                        Уточнить
                    </span>
                </button>
            </div>
            {selectedTab && selectedTab}
        </div>
    )
}

export default QuestionQToolbar