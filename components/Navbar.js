import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import Image from 'next/image'
import { useState } from 'react'

function Navbar() {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <Image src={logo} alt='hoobank' width={124}/>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
                       <a href={`#${nav.id}`}>{nav.title}</a> {/*doesn't need next <Link/> because doesn't involve page routing */}
                    </li>
                ))}
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <Image 
                    src={toggle ? close : menu} 
                    alt='menu' 
                    className='object-contain cursor-pointer' 
                    width={28}
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className='list-none flex  flex-col justify-end items-center flex-1'>
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white`}>
                        <a href={`#${nav.id}`}>{nav.title}</a> {/*doesn't need next <Link/> because doesn't involve page routing */}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
