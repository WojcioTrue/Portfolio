import Image from "next/image"

const NavBar = () => {
    return (
        <nav className="navbar bg-slate-400 p-3 md:flex justify-between">
            <a className="navbar__brand bg-red-500 w-fit p-1 inline-block">
                <Image
                    src="/template_logo.svg"
                    alt="logo missing"
                    width="25"
                    height="25"
                    className="inline"
                />
                <p className="pl-2 inline">Portfolio</p>
            </a>
            <button
                className="bg-yellow-400 p-1 md:hidden inline-block float-right"
                type="button"
                data-target="#dropdown__navbar"
                aria-controls="dropdown__navbar"
                aria-expanded="false"
                aria-label="Toggle navbar"
            >X</button>
            <div className="navbar__collapse bg-fuchsia-500 p-1" id="dropdown__navbar">
                <ul className="md:flex">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar