import TechIcon from "../components/Models/TechLogos/TechIcon"
import TitleHeader from "../components/TitleHeader"
import { techStackIcons, techStackImgs } from "../constants/index"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { useRef, useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"

import { useTranslation } from "react-i18next"


const TechStack = () => {
    const { t } = useTranslation()

    const isMobile = useMediaQuery({
        query: "(max-width: 768px)"
    })

    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            {
                threshold: 0.1
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useGSAP(() => {
        gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center'
            }
        })
    })

    return (
        <div
            id="skills"
            ref={sectionRef}
            className="flex-center section-padding"
        >
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title={t("tech.title")}
                    sub={t("tech.sub")}
                />

                <div className="tech-grid">
                    {isMobile
                        ? techStackImgs.map((icon) => (
                            <div
                                key={icon.name}
                                className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                            >
                                <div className="tech-card-content">
                                    <div className="tech-icon-wrapper">
                                        <img
                                            src={t(icon.imgPath)}
                                            alt={t(icon.name)}
                                            className=""
                                        />
                                    </div>

                                    <div className="padding-x w-full">
                                        <p>{t(icon.name)}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        : techStackIcons.map((icon) => (
                            <div
                                key={icon.name}
                                className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                            >
                                <div className="tech-card-animated-bg" />

                                <div className="tech-card-content">
                                    <div className="tech-icon-wrapper">
                                        {visible && <TechIcon model={icon} />}
                                    </div>

                                    <div className="padding-x w-full">
                                        <p>{t(icon.name)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack