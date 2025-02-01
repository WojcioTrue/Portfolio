import { useContext } from 'react'
import { NavBarContext } from '../navBarContext/NavBarContextProvider'


const useDisableScrollEv = () => {
    const { disableBg } = useContext(NavBarContext)
    const { disable, setDisable } = disableBg
    const disableAfterClick = () => {
        setDisable(true)
    }
    return [
        disable,
        disableAfterClick
    ] as const
}

export default useDisableScrollEv