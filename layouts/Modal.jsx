import { useRef, useEffect } from 'react'
import useOutside from '../hooks/useOutside'
//
import styles from '../styles/layouts/Modal.module.css'




const Modal = ({ children, height, width, style, onClose, className = '' }) => {


    const { ref } = useOutside(onClose)
    



    const customStyle = {
        width: width,
        height: height,
        ...style
    }


    const customClassName = `${styles.modal} ${className}`

    return (
        <div className={styles.wrapper_modal}>
            <div ref={ref} style={customStyle} className={customClassName}>
                {children}
            </div>
        </div>
    )
}

export default Modal