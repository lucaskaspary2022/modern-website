import { logo } from "../assets"
import { footerLinks, socialMedia  } from "../constants"
import Image from "next/image"

function Footer() {
    return (
        <section className='flex justify-center items-center sm:py-16 py-6 flex-col'>
            <div className='flex justify-center items-start md:flex-row flex-col mb-8 w-full'>
                <div className='flex-1 flex flex-col justify-start mr-10'>
                    <Image src={logo} alt='hoobank' className='object-contain' width={266} height={72}/>
                    <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[310px]'>A new way to make payments easy, reliable and secure.</p>
                </div>
                <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                    {footerLinks.map((footerLink) => (
                        <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{footerLink.title}</h4>
                            <ul>
                                {footerLink.links.map((link, index) => (
                                    <li key={link.name} className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer'>
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer
