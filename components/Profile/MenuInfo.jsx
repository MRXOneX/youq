import styles from '../../styles/components/Profile/MenuInfo.module.css'



const MenuInfo = () => {
    return (
        <div className={styles.menu_info}>
            <div style={{ position: 'relative' }}>
                <div className={styles.active} />
                <button className={styles.element}>
                    Answers
                </button>
            </div>
            <div>
                <button className={styles.element}>
                    Questions
                </button>
            </div>
        </div>
    )
}


export default MenuInfo