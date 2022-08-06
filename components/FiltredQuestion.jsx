import Select from 'react-select'
//
import styles from '../styles/components/FiltredQuestion.module.css'


const classesOptions = [
    { value: 'all', label: 'Все класс' },
    { value: 'junior', label: '1 - 4 классы' },
    { value: 'middle', label: '5 - 9 классы' },
    { value: 'senior', label: '9 - 11 классы' },
    { value: 'college', label: 'Студенческий' }
]

const itemsOptions = [
    { value: 'all', label: 'Все' },
    { value: 'junior', label: 'Математика' },
    { value: 'middle', label: 'Литература' },
    { value: 'senior', label: 'Алгебра' },
    { value: 'college', label: 'Русский язык' },
    { value: 'college', label: 'Геометрия' },
    { value: 'college', label: 'Английский язык' },
    { value: 'college', label: 'Химия' },
    { value: 'college', label: 'Физика' },
    { value: 'college', label: 'Биология' },
    { value: 'college', label: 'История' },
    { value: 'college', label: 'Обществознание' },
    { value: 'college', label: 'Окружающий мир' },
    { value: 'college', label: 'География' },
    { value: 'college', label: 'Информатика' },
    { value: 'college', label: 'Экономика' },
    { value: 'college', label: 'Музыка' },
    { value: 'college', label: 'Право' },
    { value: 'college', label: 'Французский язык' },
    { value: 'college', label: 'Обж' },
    { value: 'college', label: 'Психология' },
    { value: 'college', label: 'Астрономия' },
    { value: 'college', label: 'Физкультура и спорт' }
]


const FiltredQuestion = () => {
    return (
        <div className={styles.filtred_question}>
            <div className={styles.header}>
                <span className={styles.title}>
                    Фильтрация
                </span>
            </div>
            <div className={styles.content}>
                <Select options={itemsOptions} placeholder="Выберите предмет"  />

                <Select options={classesOptions} className={styles.class} placeholder="Твой класс"  />
            </div>

        </div>
    )
}


export default FiltredQuestion