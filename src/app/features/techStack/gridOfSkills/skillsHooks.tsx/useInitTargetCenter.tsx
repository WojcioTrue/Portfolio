import React, { useContext } from 'react'
import { TechStackContext } from '../../techStackContext/TechStackContext'


const useInitTargetCenter = () => {
    const { dropTarget } = useContext(TechStackContext)


    const targetCenter = (element: HTMLDivElement) => {
        if (dropTarget?.current !== undefined && dropTarget?.current !== null) {
            const dropTargetHeight = dropTarget.current.clientHeight
            const dropTargetWidth = dropTarget.current.clientWidth
            const elementHeight = Math.ceil(element.clientHeight / 2)
            const tempTop = dropTarget.current.offsetTop - element.offsetTop + dropTargetHeight / 2 - elementHeight

            const tempLeft = dropTarget.current.offsetLeft + dropTargetWidth / 2 - element.clientWidth / 2 - element.offsetLeft
            return { top: tempTop, left: tempLeft }
        }
    }
    return { targetCenter }
}

export default useInitTargetCenter