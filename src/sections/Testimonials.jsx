import { useTranslation } from "react-i18next"
import GlowCard from "../components/GlowCard"
import TitleHeader from "../components/TitleHeader"
import { testimonials } from "../constants/index"

const Testimonials = () => {

    const { t } = useTranslation()

    return (
        <section id="testimonials" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title={t("testimonials.title")}
                    sub={t("testimonials.sub")}

                />

                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {testimonials.map(({ review, imgPath, name, mentions }) => (
                        <GlowCard
                            key={`${name}-${review}`}
                            card={{ review: t(review) }}
                        >
                            <div className="flex items-center gap-3">
                                <div>
                                    <img src={imgPath} alt={name} />
                                </div>

                                <div>
                                    <p className="font-bold">{name}</p>
                                    <p className="text-white-50">{mentions}</p>
                                </div>
                            </div>
                        </GlowCard>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Testimonials