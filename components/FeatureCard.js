import Image from "next/image"
import { features } from "../constants"

function FeatureCard({ icon, title, content, index }) {
    return (
        <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
            <div className='w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue'>
                <Image src={icon} alt='icon' className='w-[50%] h-[50%] object-contain'/>
            </div>
            <div className='flex-1 flex flex-col ml-3'>
                <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
                    {title}
                </h4>
                <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default FeatureCard