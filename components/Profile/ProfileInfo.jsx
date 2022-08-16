import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
//
import styles from '../../styles/components/Profile/ProfileInfo.module.css'


const ProfileInfo = ({ profile }) => {
    const { data } = useSession()

    const router = useRouter()
    console.log(data)
    return (
        <div className={styles.profile_info}>
            <div className={styles.header}>
                <img className={styles.avatar} src={profile?.image} alt="" />
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
        </div>
    )
}


export default ProfileInfo