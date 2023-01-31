import React, { useEffect } from 'react'
import { useState } from 'react';


const Ticket = ({ data, Type, change }) => {

    console.log(Type);

    const [TicketData, setTicketData] = useState([
        { ticket_code: "#2147483647", orderID: "SL6578932", complain: "Received damaged product", date: "14/12/22" },
        { ticket_code: "#2147483648", orderID: "SL6578932", complain: "Product Problem", date: "14/12/22" },
    ]);

    // useEffect(() => {
    //     if (data != undefined) {
    //         complain
    //     }
    // })


    const TicketType = () => {
        if (Type == "pending") {
            return <span className='w-20 h-5 flexCenter rounded-sm text-toosm bg-lightorange text-lightorange'>Pending</span>

        } else if (Type == "solved") {
            return <span className='w-20 h-5 flexCenter rounded-sm text-toosm bg-lightgreen text-lightgreen'>Solved</span>

        }

    }

    return (
        <>
            {
                TicketData.map((items, index) => (
                    <button className=' w-full h-32 border-b-1 grid grid-cols-4 focus:bg-[#FFC800]/5' key={index}
                    onClick={()=>{change(index)}}
                    >
                        <div className='flex flex-col col-span-3 justify-start items-start pl-8 pt-4'>
                            <span className='py-0.5 text-blue-400 text-sm'>Ticket Code: {items.ticket_code}</span>
                            <span className='py-0.5 text-slate-400 text-toosm'>Order ID: {items.orderID}</span>
                            <span className='py-0.5 font-medium text-sm'>{items.complain}</span>
                            <span className='py-0.5 text-slate-400 text-toosm'>Created at {items.date}</span>

                        </div>

                        <div className='flex flex-col justify-between items-end py-5 pr-3'>
                            <TicketType />
                            <span className='mb-2 w-5 h-5 rounded-full flex justify-center items-center bg-green-400 text-white '>1</span>
                        </div>

                    </button>
                ))
            }
        </>

    )
}

export default Ticket