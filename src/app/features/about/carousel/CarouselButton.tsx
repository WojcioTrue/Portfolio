import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

type CarouselButtonType = {
    buttonClick: () => void,
    disabled: boolean,
    text: string
}

const CarouselButton = ({ buttonClick, disabled, text }: CarouselButtonType) => {
    return (
        <button
            onClick={() => buttonClick()}
            disabled={disabled}
            className={`
                flex justify-center items-center 
                h-[40px] w-[40px] 
                absolute top-1/2 -translate-y-1/2 
                rounded-[100px] overflow-hidden 
                bg-gradient-to-tr 
                from-my-gradient1 to-my-gradient2
                text-white 
                z-50`}
            style={{
                zIndex: 100,
                left: text === "Left" ? '-20px' : undefined,
                right: text === "Right" ? '-20px' : undefined,
                filter: disabled ? 'grayscale(1)' : 'grayscale(0)',
                opacity : disabled ? '0.7' : '1'
            }}
        >{text === "Left" ? <FaArrowLeft /> :
            text === "Right" ? <FaArrowRight /> :
                undefined}
        </button>
    )
}

export default CarouselButton