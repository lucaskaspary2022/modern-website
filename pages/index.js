import Head from 'next/head'
import Image from 'next/image'
import { Billing, Navbar, Hero, Stats, Business, CardDeal, Testimonials, Clients, CTA, Footer } from '../components'

export default function Home() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className='sm-:px-16 px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar/>
        </div>
      </div>
      <div className='bg-primary flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero/>
        </div>
      </div>
      <div className='bg-primary flex justify-center items-start sm:px-16 px-6'>
        <div className='xl:max-w-[1280px] w-full'>
          <Stats/>
          <Business/>
          {/* <Payment/> */}
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}
