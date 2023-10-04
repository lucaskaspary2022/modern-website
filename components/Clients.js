import { clients } from "../constants"
import Image from "next/image"

function Clients() {

    return (
        <section className='flex justify-center items-center my-4'>
            <div className='flex justify-center items-center flex-wrap w-full'>
                {clients.map((client) => (
                    <div key={client.id} className='flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] relative mx-4'>
                        <Image src={client.logo} alt='client' className='object-contain' width={150}/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Clients
