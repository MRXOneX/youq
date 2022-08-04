import { useState, useEffect, useRef } from "react"

const useOutside = onClose => {
    const ref = useRef(null)
    

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            onClose(false)
        }
    } 


    useEffect(() => {
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    })

    return { ref }
}

export default useOutside