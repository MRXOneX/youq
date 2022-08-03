//
import Navbar from '../components/Navbar'
import styles from '../styles/layouts/PageContainer.module.css'


const PageContainer = ({ children }) => {
    return (
        <div className={styles.page_container}>
            <Navbar />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default PageContainer