import { useEffect, useState } from 'react'
//
import Select from 'react-select'
//
import { useSession } from 'next-auth/react'
//
import { useRouter } from 'next/router';
//
import { toast } from 'react-toastify';
// utils/options
import { classesOptions, itemsOptions } from '../../utils/options'
//
import { trpc } from '../../utils/trpc'
// icons
import Square from '../Icons/Square'
//
import styles from '../../styles/components/AskQuestion/AskQuestion.module.css'


const newItemsOptions = [...itemsOptions]
newItemsOptions.shift()

const newClassesOptions = [...classesOptions]
newClassesOptions.shift()



const AskQuestion = () => {
    const [value, setValue] = useState('')
    const [selectedItem, setSelectedItem] = useState(newItemsOptions[0])
    const [selectedClass, setSelectedClass] = useState(newClassesOptions[0])

    const { data, status } = useSession()

    const router = useRouter()

    const question = trpc.useMutation(['question_protected.create']);

    const authorId = data?.user?.id

    console.log(question)
    const createQuestion = () => {
        question.mutate({
            text: value,
            authorId: authorId,
            item: selectedItem.value,
            class: selectedClass.value
        })
    }


    useEffect(() => {
        if (question?.isSuccess) {
            toast.success('Вопрос создан!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setValue('')
            setSelectedClass(newClassesOptions[0])
            setSelectedItem(newItemsOptions[0])
            if (question?.data?.id) {
                router.push(`/question/${question.data.id}`)
            }
        }
    }, [question.isSuccess])


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
                            options={newItemsOptions}
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
                            options={newClassesOptions}
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