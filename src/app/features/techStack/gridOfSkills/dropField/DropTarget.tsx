import { useContext } from "react"
import SkillButtons from "../buttons/ButtonsWrapper"
import { TechStackContext } from "../../techStackContext/TechStackContext"

const DropTarget = () => {
    const {dropTarget } = useContext(TechStackContext)

    return (
        <div className=' 
    w-[250px] 
    rounded-lg 
    pb-3
    overflow-hidden'>
            <p className='block m-auto w-[80%] text-center text-my-gray select-none text-wrap'>Drop icon below :)</p>
            <div ref={dropTarget} id="drag-target"
                className={`
                    relative
                    h-[120px] 
                    m-auto 
                    mb-2  
                    border-my-lightGray 
                    border-[1px]
                    rounded-[7px] 
                    shadow-myshadow
                    overflow-hidden`
                }>
                <div className='
                    absolute 
                    top-[50%] 
                    left-[50%] 
                    rounded-2xl 
                    bg-gradient-to-tr 
                    from-my-gradient2 
                    to-my-gradient1 
                    -z-0
                    w-[20px] 
                    h-[20px]
                    translate-x-[-50%]
                    translate-y-[-50%]'
                    >
                </div>
            </div>
            <SkillButtons />
        </div>
    )
}

export default DropTarget