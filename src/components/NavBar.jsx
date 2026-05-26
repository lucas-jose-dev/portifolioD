import { useEffect, useState } from "react"
import { navLinks } from "../constants"
import i18n from "i18next";
import { useTranslation } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector"; Quando terminar a tradução

const Navbar = () => {
    const { t } = useTranslation()

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    Lucas | JFS
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{t(name)}</span>
                                    <span className="underline" />
                                </a>

                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex">
                    <a href="#contact" className="contact-btn group z-0">
                        <div className="inner">
                            <span>
                                {t("contact")}
                            </span>

                        </div>
                    </a>
                    <div className="flex justify-center items-center pl-10 z-10">
                        {i18n.language.startsWith("pt") ? (
                            <button
                                onClick={() => i18n.changeLanguage("en")}
                                className="flex justify-center items-center gap-1"
                            >
                                <p>EN</p>
                                <img src="/images/en.png" alt="" className="h-3.5 w-3.5" />
                            </button>
                        ) : (
                            <button
                                onClick={() => i18n.changeLanguage("pt")}
                                className="flex justify-center items-center gap-1"
                            >
                                <p>PT</p>
                                <img src="/images/pt.png" alt="" className="h-3.5 w-3.5" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Navbar