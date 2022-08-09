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
    { value: 'mathematics', label: 'Математика' },
    { value: 'literature', label: 'Литература' },
    { value: 'algebra', label: 'Алгебра' },
    { value: 'russian', label: 'Русский язык' },
    { value: 'geometry', label: 'Геометрия' },
    { value: 'english', label: 'Английский язык' },
    { value: 'chemistry', label: 'Химия' },
    { value: 'physics', label: 'Физика' },
    { value: 'biology', label: 'Биология' },
    { value: 'history', label: 'История' },
    { value: 'social_studies', label: 'Обществознание' },
    { value: 'surrounding_world', label: 'Окружающий мир' },
    { value: 'geography', label: 'География' },
    { value: 'informatics', label: 'Информатика' },
    { value: 'economy', label: 'Экономика' },
    { value: 'music', label: 'Музыка' },
    { value: 'right', label: 'Право' },
    { value: 'french', label: 'Французский язык' },
    { value: 'obzh', label: 'Обж' },
    { value: 'psychology', label: 'Психология' },
    { value: 'astronomy', label: 'Астрономия' },
    { value: 'physical_culture', label: 'Физкультура и спорт' }
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