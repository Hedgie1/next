export default function Navbar() {
    let buttonStyle = "flex items-center justify-center align-middle px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
    return (
        <>
            <nav className="flex items-center justify-between bg-gray-800 p-5">
                <a href="/" className="font-semibold align-middle text-white text-xl">Hedgie's Web</a>
                <div className="flex justify-center">
                    <div className="inline-grid grid-cols-3 gap-10">

                        <button className={buttonStyle}>Menu</button>
                        <button className={buttonStyle}>About us</button>
                        <button className={buttonStyle}>Contact</button>
                    </div>
                </div>
            </nav>

        </>
    )
}