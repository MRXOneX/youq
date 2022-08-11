import { forwardRef } from 'react'
//
import styles from '../styles/layouts/Dropdown.module.css'


const Dropdown = forwardRef(({ isShow, style, children }, ref) => {
    return (
        <div ref={ref} style={{
            ...style,
            display: isShow ? 'block' : 'none'
        }} className={styles.dropdown}>
            {children} 
        </div>
    )
})


export default Dropdown