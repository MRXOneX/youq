import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
//
import Image from 'next/image'
// utils
import role from '../../utils/role'
//
import styles from '../../styles/components/Profile/ProfileInfo.module.css'


const ProfileInfo = ({ profile }) => {
    const { data } = useSession()

    const router = useRouter()


    return (
        <div className={styles.profile_info}>
            <div className={styles.header}>
                <Image 
                    height={52} 
                    width={52} 
                    className={styles.avatar} 
                    src={profile?.image} 
                    alt="avatar" 
                />
                <div className={styles.info}>
                    <span className={styles.name}>
                        {profile?.name}
                    </span>
                    <span className={styles.level}>
                        {profile?.isAdmin ? "Admin" : "User"}
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
                <button>
                    Мои ответы
                </button>
                <button>
                    Мои вопросы
                </button>
            </div>
        </div>
    )
}


export default ProfileInfo