import { memo } from 'react'
//
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
//
import Image from 'next/image'
// utils
import role from '../../utils/role'
import level from '../../utils/level'
//
import styles from '../../styles/components/Profile/ProfileInfo.module.css'


const ProfileInfo = ({ 
    profile, 
    setMenuActive, 
    menuActive,

    menuAnswers,
    menuQuestions,
}) => {

    const { data } = useSession()

    const router = useRouter()


    return (
        <div className={styles.profile_info}>
            <div className={styles.header}>
                <Image
                    height={46}
                    width={46}
                    className={styles.avatar}
                    src={profile?.image}
                    alt="avatar"
                />
                <div className={styles.info}>
                    <span className={styles.name}>
                        {profile?.name}
                    </span>
                    <span className={styles.level}>
                        {level[profile.level]}
                    </span>
                </div>
            </div>
            {data?.user?.id === profile.id && (
                <button onClick={() => router.push('/settings')} className={styles.btn_settings}>
                    Редактировать
                </button>
            )}
            <div className={styles.about}>
                <span className={styles.about_title}>
                    Информация
                </span>
                <div className={styles.about_divider} />
                <div className={styles.about_info}>
                    <div>
                        {role[profile.role]}
                    </div>
                    <div>
                        rating
                    </div>
                    <div>
                        createdAt
                    </div>
                </div>
            </div>
            <div className={styles.menu}>
                <div>
                    {/* <div className={styles.menu_divider}/> */}
                    <button
                        onClick={() => setMenuActive(menuAnswers)}
                        style={{
                            background: menuActive?.name === 'answers' && '#E8F1FF'
                        }}
                        className={styles.btn_answers}
                    >
                        Мои ответы
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => setMenuActive(menuQuestions)}
                        style={{
                            background: menuActive?.name === 'questions' && '#E8F1FF'
                        }}
                        className={styles.btn_questions}>
                        Мои вопросы
                    </button>
                </div>
            </div>
        </div>
    )
}


export default memo(ProfileInfo)