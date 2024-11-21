import "./Hero.css"
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { Animate } from "react-simple-animate";

export default function Hero() {
    return (
        <>
    <div className="Container">
        <div className="left-container">
        <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform : 'translatex(-900px)'
                }}
                end={{
                    transform : 'translatex(0px)'
                }}
                >
        <h1>SPOKEN ENGLISH COURSE</h1>
            <ul>
                <li>
                    Pronunciation of words
                </li>
                <li>
                    Oral Expression of the language
                </li>
                <li>
                    Vocabulary and words recognition
                </li>
                <li>
                    Phonetics
                </li>
                <li>
                    Grammar
                </li>
                <li>
                    Spoken Skills
                </li>
            </ul>
            </Animate>
        </div>
    </div>
    <div className="Contact">
        <a href="https://t.me/DuaHseian">
            <button>
                Enrol Now
                <PiTelegramLogoDuotone />
            </button>
        </a>
    </div>
    </>
    )
}