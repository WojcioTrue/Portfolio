import { useContext, useEffect, useRef } from "react"
import { TechStackContext } from "../../techStackContext/TechStackContext"

const useInitTargetCenter = ({ dragElement }: { dragElement: string }) => {
    const { dropTarget  } = useContext(TechStackContext)
    const dragElementRef = useRef<HTMLDivElement>(null)
    const dropValues = useRef({ top: 0, left: 0 })

    useEffect(() => {
        const element = dragElementRef.current!
        if (dropTarget?.current !== undefined && dropTarget?.current !== null) {
            const dropTargetHeight = dropTarget.current.clientHeight
            const dropTargetWidth = dropTarget.current.clientWidth
            const elementHeight = Math.ceil(element.clientHeight / 2)
            const tempTop = dropTarget.current.offsetTop - element.offsetTop + dropTargetHeight / 2 - elementHeight

            const tempLeft = dropTarget.current.offsetLeft + dropTargetWidth / 2 - element.clientWidth / 2 - element.offsetLeft
            dropValues.current = { top: tempTop, left: tempLeft }
        }
    }, [dragElement, dropTarget])

    // useEffect(() => {
    //     window.addEventListener('resize', () => {
    //         const element = dragElementRef.current!
    //         if (dropTarget?.current !== undefined && dropTarget?.current !== null) {
    //             const dropTargetHeight = dropTarget.current.clientHeight
    //             const dropTargetWidth = dropTarget.current.clientWidth
    //             const elementHeight = Math.ceil(element.clientHeight / 2)
    //             const tempTop = dropTarget.current.offsetTop - element.offsetTop + dropTargetHeight / 2 - elementHeight

    //             const tempLeft = dropTarget.current.offsetLeft + dropTargetWidth / 2 - element.clientWidth / 2 - element.offsetLeft
    //             dropValues.current = { top: tempTop, left: tempLeft }
    //         }
    //     })
    // }, [dropTarget])
}

export default useInitTargetCenter