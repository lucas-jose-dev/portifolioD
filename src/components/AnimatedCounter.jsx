import { useTranslation } from "react-i18next"
import { counterItems } from "../constants/index.js"
import CountUpModule from "react-countup"

const CountUp = CountUpModule.default || CountUpModule

const AnimatedCounter = () => {
    const { t } = useTranslation()

    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item) => (
                    <div
                        key={item.label}
                        className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
                    >
                        <div className="counter-number text-white text-5xl font-bold mb-2">
                            {/* 0 {item.value} */}
                            <CountUp
                                end={item.value}
                                suffix={item.suffix}
                                enableScrollSpy
                                scrollSpyOnce
                                scrollSpyDelay={200}
                            />
                        </div>
                        <div className="text-white-50 text-lg">{t(item.label)}</div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default AnimatedCounter