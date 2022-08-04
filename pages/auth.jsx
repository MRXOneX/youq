import PageContainer from "../layouts/PageContainer"
//
import { useFormik } from 'formik'
// icons
import Vk from "../components/Icons/Vk"
import Ok from '../components/Icons/Ok'
import Google from '../components/Icons/Google'
//
import styles from '../styles/pages/Auth.module.css'

const auth = () => {

    const formik = useFormik({
        initialValues: {

        },
        onSubmit: values => {
            alert(values)
        }
    })

    return (
        <PageContainer>
            <div className={styles.wrapper_auth}>
                <div className={styles.auth}>
                    <div className={styles.wrapper_logo}>
                        <span className={styles.logo}>
                            YouQ
                        </span>
                        <span className={styles.sublogo}>
                            вопрос - ответ
                        </span>
                    </div>
                    <div className={styles.login_register}>
                        <div className={styles.header}>
                            <span className={styles.title}>
                                Авторизация
                            </span>
                        </div>
                        <form onSubmit={formik.handleSubmit} className={styles.form}>
                            <input
                                id="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                className={styles.input}
                                type="email"
                                placeholder="Почта"
                            />
                            <input
                                id="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                className={styles.input}
                                type="password"
                                placeholder="Пароль"
                            />
                            <button className={styles.submit} type="submit">
                                Войти
                            </button>
                        </form>
                        <div className={styles.login_via}>
                            <div className={styles.divider} />
                            <span className={styles.via}>
                                Войти через
                            </span>
                            <div className={styles.divider} />
                        </div>
                        <div className={styles.social_login}>
                            <button className={styles.btn_login}>
                                <Vk color="#2787f5" size={40} />
                            </button>
                            <button className={styles.btn_login}>
                                <Ok color="#ff9800" size={40} />
                            </button>
                            <button className={styles.btn_login}>
                                <Google color="#ce452d" size={40}  />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default auth