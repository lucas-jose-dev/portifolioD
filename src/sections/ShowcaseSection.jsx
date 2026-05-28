import { useRef } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"
import { useTranslation } from "react-i18next"

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    
    const { t } = useTranslation()

    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    
    
    useGSAP(() => {

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }

        )

    }, [])

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <a href="https://bella-salao.vercel.app/" title={t("showcase.projectBellaSalao.title")} className="image-wrapper">
                            <img src="/images/bella-project.png" alt="Salão" className="object-fill" />

                        </a>
                        <div className="text-content">
                            <h2>{t("showcase.bellasalao.title")}</h2>
                            <p className="text-white-50 md:text-xl">
                                {t("showcase.bellasalao.description")}
                            </p>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project-portfolio.png" alt="Portifólio" />
                            </div>
                            <h2>{t("showcase.portfolio.title")}</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project-viagens.png" alt="Viagens" />
                            </div>
                            <h2>{t("showcase.trips.title")}</h2>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default ShowcaseSection