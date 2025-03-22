import {Icon} from '@iconify/react'

export default function ThreeReasons() {
    const reasons = [
        {
            icon: "ri:skip-forward-fill",
            title: "FAST CASH PAYMENT",
            text: "Need to sell your house fast? We can close in as little as 14 to 30 days — get your cash offer today!",
        },
        {
            icon: "mage:users-fill",
            title: "U.S.-based team",
            text: "With a team based in the USA, we can offer a fair and honest assessment of your house, ensuring that you receive the highest offer for your home.",
        },
        {   
            icon: "carbon:time",
            title: "WE DELIVER ON TIME",
            text: "Unlike our competitors, we don’t need to rely on finding a suitable buyer — so we deliver on our promise of providing funds on the agreed date.",
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-6 p-6">
            {reasons.map((reason, index) => (
                <div 
                    key={index}
                    className="w-[350px] md:w-[300px] sm:w-full min-w-[250px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300"
                >   
                    {/* Icon */}
                    <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full border-4 border-[#F5B429] mb-4">
                        <Icon icon={reason.icon} width={36} height={36} color="#F5B429" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl text-[#F5B429] font-semibold">{reason.title}</h3>
                    
                    {/* Text */}
                    <p className="text-gray-600 mt-2">{reason.text}</p>
                </div>
            ))}
        </div>
    )
}