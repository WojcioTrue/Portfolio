
import detectElementOverflow from 'detect-element-overflow'
import { useContext } from 'react';
import { TechStackContext } from '../../techStackContext/TechStackContext';

const useDetectEnter = () => {
    const { isOverTarget } = useContext(TechStackContext)
    const setOverTarget = isOverTarget.setOverTarget
    const detectEnter = (el: string) => {
        const overflow = 10;
        const element = document.getElementById(el)!
        const target = document.getElementById('drag-target')!
        const collisions = detectElementOverflow(element, target);
        (!(collisions.overflowRight >= overflow) &&
            !(collisions.overflowLeft >= overflow) &&
            !(collisions.overflowTop >= overflow) &&
            !(collisions.overflowBottom >= overflow)
        ) ?
            setOverTarget({ boolean: true, id: el }) :
            setOverTarget({ boolean: false, id: '' })
    }
    return {detectEnter}
}

export default useDetectEnter