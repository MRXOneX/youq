import styles from '../styles/layouts/Dropdown.module.css'


const Dropdown = ({ style, children }) => {
    return (
        <div style={style} className={styles.dropdown}>
            {children} 
        </div>
    )
}


export default Dropdown