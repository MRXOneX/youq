import styles from '../../styles/components/Profile/UserInfo.module.css'


const UserInfo = ({ user }) => {
    return (
        <div className={styles.user_info}>
            <div className={styles.header}>
                <img className={styles.avatar} src={user.image} alt="" />
                <div className={styles.info}>
                    <span className={styles.name}>
                        {user.name}
                    </span>
                    <span className={styles.level}>
                        {user.isAdmin ? "Admin" : "User"}
                    </span>
                </div>
            </div>
        </div>
    )
}


export default UserInfo