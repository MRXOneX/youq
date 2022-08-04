import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
//
import { authActions } from "../store/auth/Auth.slice"

const allActions = {
    ...authActions
}

const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions, dispatch)
}

export default useActions