import Image from 'next/image'
import { people01 } from '../assets'

function Payment() {
    return (
        <section className='flex md:flex-row flex-col sm:py-16 py-6'>
            <div className=''>
                <div className='flex card-bg p-5 flex-col rounded-md items-start'>
                    <div className='flex'>
                        <div className='flex mr-3'>
                            <Image src={people01} width={50} height={50} alt='Paypal'/>
                        </div>   
                        <div>
                            <h1 className='text-white font-semibold font-poppins text-[24px]'>Paypal</h1>
                            <h4 className='text-dimWhite font-normal font-poppins text-[10px]'>Checkout</h4>
                        </div>                       
                    </div>
                    <div className='flex justify-between mt-5 w-full'>
                        <div className='flex flex-col'>
                            <h4 className='text-normal font-poppins text-[10px] text-dimWhite flex-start p-0 m-0'>Total</h4>
                            <p className='font-poppins text-white font-normal text-[14px]'>$210</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='flex justify-center items-center border-[1px] border-secondary rounded-sm'>
                                <div className='flex bg-transparent py-[4px] px-[8px] rounded-sm'>
                                    <p className='text-gradient text-[10px]'>Change</p>
                                </div>
                            </div>   
                        </div>
                    </div>
                    <button className='text-[10px] bg-blue-gradient font-poppins font-semibold mt-3 w-full py-[7px] rounded-md'>Make Payment</button>                      
                </div>

                <div>

                </div>

                <div>

                </div>
            </div>
        </section>
    )
}

export default Payment
