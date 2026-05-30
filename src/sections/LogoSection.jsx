import { logoIconsList } from "../constants"

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-nome flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} className=" w-60 h-50"/>

        </div>
    )
}

const LogoSection = () => {
    return (
        <div className="md:my-20 my-10 relative">
            <div className="gradient-edge" />
            <div className="gradient-edge" />

            <div className="marquee h-52">
                <div className="marquee-box">
                    {logoIconsList.map((icon, index) => (
                        <LogoIcon
                            key={`first-${index}`}
                            icon={icon}
                        />
                    ))}

                    {logoIconsList.map((icon, index) => (
                        <LogoIcon
                            key={`second-${index}`}
                            icon={icon}
                        />
                    ))}

                </div>
            </div>

        </div>
    )
}

export default LogoSection