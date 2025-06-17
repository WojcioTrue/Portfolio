import { useCallback, useContext } from "react"
import { NavBarContext } from "../navBarContext/NavBarContextProvider"


const useLiRef = () => {
    const { defaultLiRef } = useContext(NavBarContext)
    return (
        <div>useLiRef</div>
    )
}

export default useLiRef