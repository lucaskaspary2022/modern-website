import { features } from "../constants"
import Button from "./Button"
import FeatureCard from "./FeatureCard"

function Business() {
    return (
        <section id='features' className='flex md:flex-row flex-col sm:py-16 py-6'>
            <div className='flex-1 flex justify-center items-start flex-col'>
                <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
                    You do the business, <br className='sm:block hidden'/> we&apos;ll handle the money.
                </h2>
                <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
                    With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. 
                    But with hundreds of credit cards on the market.
                </p>
                <Button styles='mt-10'/>
            </div>
            <div className='flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col'>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index}/>
                ))}
            </div>
        </section>
    )
}

export default Business
