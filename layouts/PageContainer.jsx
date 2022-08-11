import Head from 'next/head'
//
import Navbar from '../components/Navbar'
//
import styles from '../styles/layouts/PageContainer.module.css'


const PageContainer = ({
    children,
    style = {},
    title = 'Вопросы и ответы онлайн - YouQ.pro',
    description = 'Решаем домашнее задание вместе '
}) => {
    return (
        <div className={styles.page_container}>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
            </Head>
            <Navbar />
            <div style={style} className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default PageContainer