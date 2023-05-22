import ButtonComp from "../comps/button";

const Navbar = (props) => {
    const { appName } = props
    return (
        <>
            <header className="h-24 border border-neutral-800">
                <nav className="flex justify-around items-center border border-neutral-800 h-[100%]">
                    <h1 className="font-bold text-center text-5xl border border-neutral-800">{appName}</h1>

                    <div className="">
                        <ButtonComp btn1={"Account"}></ButtonComp>
                        <ButtonComp btn1={"Log In"}></ButtonComp>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;