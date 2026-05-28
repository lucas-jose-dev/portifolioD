import { socialImgs } from "../constants"
import { useTranslation } from "react-i18next"
import { useState } from "react"

const Footer = () => {
    const { t } = useTranslation()
    const [loading, setLoading] = useState(false)

    const handleDownload = () => {
        setLoading(true)

        const link = document.createElement("a")
        link.href = "/lucas-jose-curriculo.pdf"
        link.download = "lucas-jose-curriculo.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        setTimeout(() => setLoading(false), 2000)
    }

    return (
        <footer className="footer">
            <div className="footer-container">

                <button type="button" onClick={handleDownload} disabled={loading}>
                    <div className="cta-button group h-12 w-100">
                        <div className="bg-circle" />
                        <p className="text">
                            {loading
                                ? t("footer.file.downloading")
                                : t("footer.file.download")
                            }
                        </p>
                        <div className="arrow-wrapper">
                            <img src="/images/arrow-down.svg" alt="arrow" />
                        </div>
                    </div>
                </button>

                <div className="socials">
                    {socialImgs.map((img) => (
                        <a className="icon" target="_blank" href={img.url} key={img.url}>
                            <img src={img.imgPath} />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        &copy; {new Date().getFullYear()} Lucas | JF Silva. {t("footer.rights")}
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer