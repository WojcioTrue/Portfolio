import Image from "next/image"


const IconTemplate = () => {
    return (
        <div className="bg-gradient-to-tr from-my-gradient1 to-my-gradient2 opacity-55 w-[40px] h-[40px] shadow-myshadow rounded-md p-[7px]">
            <Image
                alt="#"
                width={50}
                height={50}
                src="/images/icon_html.png"
            />
        </div>
    )
}

export default IconTemplate