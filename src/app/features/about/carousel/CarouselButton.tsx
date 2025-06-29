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
            className='h-[50px] w-[50px] absolute top-1/2'
            style={{
                backgroundColor: disabled ? 'red' : 'white',
                left : text === "Left" ? '0' : undefined,
                right : text === "Right" ? '0' : undefined
            }}
        >{text}
        </button>
    )
}

export default CarouselButton