import { memo, useRef, useState } from 'react';
//
import { Editor, EditorState, convertToRaw } from 'draft-js';
//
import draftToHtml from 'draftjs-to-html';
//
import { trpc } from '../utils/trpc'
//
import styles from '../styles/components/MyEditor.module.css'

const MyEditor = ({ questionId, setSelectedTab }) => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty(),
    );
    const ref = useRef(null);
    const [isFocus, setIsFocus] = useState(false)


    const { mutateAsync: createAnswer } = trpc.useMutation(['question_protected.create_answer'])


    const onCreateAnswer = () => {
        try {
            const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
            const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
            
            createAnswer({
                text: value,
                textHtml: draftToHtml(convertToRaw(editorState.getCurrentContent())),
                questionId
            })

            setEditorState(EditorState.createEmpty())
            setSelectedTab(null)
        } catch (error) {

        }
    }

    return (
        <>
            <div onClick={() => {
                ref.current.focus();
            }}
                style={{
                    border: isFocus && '2px solid #2684ff',
                    padding: isFocus && '10px'
                }}
                className={styles.my_editor}
            >
                <Editor
                    editorState={editorState}
                    onChange={setEditorState}
                    ref={ref}
                    placeholder="Добавьте ответ"
                />
            </div>
            <button onClick={onCreateAnswer} className={styles.btn_add_answer}>
                Добавить ответ
            </button>
        </>
    )
}

export default memo(MyEditor)