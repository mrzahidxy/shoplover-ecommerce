import React, { useState } from 'react'
import PageName from "../../components/users/pageName"

import PendingTicket from '../../components/users/supportTicket.js/PendingTicket'
import SolvedTicket from '../../components/users/supportTicket.js/SolvedTicket'
import NoTicket from '../../components/users/supportTicket.js/NoTicket'

import pending from "../../public/Nahin/support_ticket/pending.svg"
import down_arrow from "../../public/Nahin/support_ticket/down_arrow.svg"
import notfound from "../../public/Nahin/support_ticket/notfound.svg"
import Image from 'next/image'

const supportTicket = () => {

    const [Pending, setPending] = useState([]);
    const [Solved, setSolved] = useState([]);
    const [OptionSelected, setOptionSelected] = useState('pending');

    const showOptions=()=>{
        if (Pending.length == 0 && Solved == 0){
            return <NoTicket />
        }else if(OptionSelected == 'solved'){
            return <SolvedTicket/>
        }else{
            return <PendingTicket/>
        }
    }

    return (
        <div className='mt-10 pt-3 lg:w-285 bg-white'>
            <PageName name={"Support Ticket"} />

            <div className='mt-2 lg:w-268 border-1 lg:h-[730px]'>
                <div className='w-[377px] h-[730px] border-r-2'>
                    <div className='flex flex-row h-10 pl-6 items-center border-b-1'>
                        <button className='flex text-toosm '>
                            <Image src={pending} className="mr-2"/>
                            <span className=''>Pending ({Pending.length})</span>
                            <Image src={down_arrow}  className="mx-2"/>
                        </button>

                        <button className='flex text-toosm ml-2'>
                            <Image src={pending} className="mr-2"/>
                            <span className=''>Solved ({Solved.length})</span>
                            <Image src={down_arrow}  className="mx-2"/>
                        </button>
                    </div>

                    <div className='flex flex-col w-full h-full items-center mt-32'>
                        <Image src={notfound} />
                        <span className='italic text-[#BFBFBF]'>Oops!</span>
                        <span className='text-sm text-[#BFBFBF]'>You don't have any ticket yet</span>
                        <button className='mt-5 flex justify-center items-center bg-black text-white py-1 px-4 rounded-md text-sm'>+ Create New</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default supportTicket

supportTicket.getLayout = function PageLayout(page) {
    return (
        <>{page}</>
    )
}
