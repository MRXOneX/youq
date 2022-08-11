import styles from '../../styles/components/Profile/UserInfo.module.css'


const UserInfo = ({ profile }) => {
    return (
        <div className={styles.user_info}>
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
        </div>
    )
}


export default UserInfo