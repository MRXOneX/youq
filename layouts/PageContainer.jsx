//
import Navbar from '../components/Navbar'
//
import styles from '../styles/layouts/PageContainer.module.css'


const PageContainer = ({ children, style = {} }) => {
    return (
        <div className={styles.page_container}>
            <Navbar />
            <div style={style} className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default PageContainer