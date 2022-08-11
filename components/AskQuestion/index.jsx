import { useState } from 'react'
//
import Select from 'react-select'
//
import { trpc } from '../../utils/trpc'
//
import { useSession } from 'next-auth/react'
// icons
import Square from '../Icons/Square'
//
import styles from '../../styles/components/AskQuestion/AskQuestion.module.css'

const classesOptions = [
    { value: 'junior', label: '1 - 4 классы' },
    { value: 'middle', label: '5 - 9 классы' },
    { value: 'senior', label: '9 - 11 классы' },
    { value: 'college', label: 'Студенческий' }
]

const itemsOptions = [
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



const AskQuestion = () => {
    const [value, setValue] = useState('')
    const [selectedItem, setSelectedItem] = useState(itemsOptions[0])
    const [selectedClass, setSelectedClass] = useState(classesOptions[0])

    const { data, status } = useSession()

    const question = trpc.useMutation(['question_protected.create']);

    const authorId = data?.user?.id

    const createQuestion = () => {
        // config.api_host.post('/question/create', {
        //     text: value,
        //     author: {
        //         email: data.user.email
        //     },
        //     item: selectedItem.value,
        //     class: selectedClass.value
        // }).then(r => console.log(r))
        question.mutate({
            text: value,
            authorId: authorId,
            item: selectedItem.value,
            class: selectedClass.value
        })
    }


    return (
        <div className={styles.ask_question}>
            <div>
                <span className={styles.title}>
                    Задайте вопрос
                </span>
            </div>
            <div className={styles.content}>
                <textarea
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder='Write question here'
                    rows="8"
                    className={styles.textarea}
                />
                <div className={styles.toolbar}>
                    <div>
                        <button className={styles.toolbar_btn}>
                            <Square color="#494949" />
                        </button>
                        {/* <button className={styles.toolbar_btn}>
                            files
                        </button> */}
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.selects}>
                    <div>
                        <span className={styles.title_select}>
                            По какому предмету твой вопрос?
                        </span>
                        <Select 
                            defaultValue={selectedItem}
                            onChange={setSelectedItem}
                            options={itemsOptions} 
                            className={styles.select_item} 
                            placeholder="Выбери предмет" 
                        />
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <span className={styles.title_select}>
                            В каком ты классе?
                        </span>
                        <Select 
                            defaultValue={selectedClass}
                            onChange={setSelectedClass}
                            options={classesOptions} 
                            className={styles.select_class} 
                            placeholder="Твой класс" 
                        />
                    </div>
                </div>
                <button onClick={createQuestion} className={styles.btn_ask_question}>
                    Задать вопрос
                </button>
            </div>
        </div>
    )
}


export default AskQuestion