import React, { useState } from 'react'
import PageName from "../../components/users/pageName"

import Ticket from '../../components/users/supportTicket.js/Ticket'
import NoTicket from '../../components/users/supportTicket.js/NoTicket'

import pending from "../../public/Nahin/support_ticket/pending.svg"
import down_arrow from "../../public/Nahin/support_ticket/down_arrow.svg"
import notfound from "../../public/Nahin/support_ticket/notfound.svg"
import Image from 'next/image'

const supportTicket = () => {

    const [Solved, setSolved] = useState([])
    const [Pending, setPending] = useState([
        {ticketCode: "#2147483647", orderID: "SL6578932", problem: "Received damaged product", date: "14/12/22" }
    ]);
    const [OptionSelected, setOptionSelected] = useState('pending');
    const [OptionColor, setOptionColor] = useState(["text-pink-500", ""])


    const ShowOptions = () => {
        if (Pending.length == 0 && Solved == 0) {
            return <NoTicket />
        } else if (OptionSelected == 'solved') {
            return <Ticket Type={"solved"} />
        } else {
            return <Ticket  Type={"pending"} />
        }
    }

    return (
        <div className='mt-10 pt-3 lg:w-285 bg-white'>
            <div className='pl-6'>
                <PageName name={"Support Ticket"} />
            </div>

            <div className='mt-2 lg:w-268 border-1 lg:h-[730px] sm:max-lg:mx-6 mb-2'>
                <div className='lg:w-[377px] h-[730px] lg:border-r-2 '>
                    <div className='flex flex-row h-10 pl-6 items-center border-b-1'>
                        <button className='flex text-toosm '
                            onClick={()=>{
                                setOptionColor(["text-pink-500", ""]);
                                setOptionSelected("pending")
                            }}
                        >
                            <Image src={pending} alt="" className="mr-2" />
                            <span className={OptionColor[0]}>Pending ({Pending.length})</span>
                            <Image src={down_arrow} alt="" className="mx-2" />
                        </button>

                        <button className='flex text-toosm ml-2'
                            onClick={()=>{
                                setOptionColor(["", "text-pink-500"]);
                                setOptionSelected("solved")
                            }}
                        >
                            <span className={OptionColor[1]}>Solved ({Solved.length})</span>
                            <Image src={down_arrow} alt="" className="mx-2" />
                        </button>
                    </div>

                    <ShowOptions />

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
