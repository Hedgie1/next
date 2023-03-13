import fs from "fs"
import path from "path"
export default function Memes({ memes }) {
    memes = memes.map(meme => "/memes/" + meme)

    return (
        <>
            <div className="grid m-20 gap-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                {memes.map((image) => {
                    return (
                        <div className="relative">
                            <img src={image} alt="Meme" />
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

