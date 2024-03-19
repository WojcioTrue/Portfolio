import Image from "next/image"

const NavBar = () => {
    return (
        <nav className="navbar bg-slate-400 p-3">
            <div className="navbar__brand bg-red-500 w-fit">
                <Image
                    src="/template_logo.svg"
                    alt="logo missing"
                    width="25"
                    height="25"
                />
            <p>Portfolio_MR.Crabbbss</p>
            </div>
        </nav>
    )
}

export default NavBar