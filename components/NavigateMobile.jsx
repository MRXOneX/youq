import Image from 'next/image'
//
import Plus from '../utils/svg/plus.svg'
//
import styles from '../styles/components/NavigateMobile.module.css'


const NavigateMobile = () => {
    return (
        <div className={styles.navigate_mobile}>
            <div>

            </div>
            <div>
                <button className={styles.create}>
                    <Plus fill="white" width={28} height={28} />
                </button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default NavigateMobile