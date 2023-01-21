import React, { useEffect } from 'react'
import { useState } from 'react';

const Ticket = ({ Type }) => {

    console.log(Type);

    const [TicketData, setTicketData] = useState([]);

    useEffect(()=>{
        if(Type == "pending"){
            setTicketData([
                { ticketCode: "#2147483647", orderID: "SL6578932", problem: "Received damaged product", date: "14/12/22" },
                { ticketCode: "#2147483648", orderID: "SL6578932", problem: "Product Problem", date: "14/12/22" },
                { ticketCode: "#2147483649", orderID: "SL6578932", problem: "My product not deliver yet", date: "14/12/22" },
            ])
        }else if(Type == 'solved'){
            setTicketData([
                { ticketCode: "#2147483653", orderID: "SL6578932", problem: "Delivery man give me wrong product", date: "14/12/22" }
            ])
        }
    }, [Type])

    const TicketType = () => {
        if (Type == "pending") {
            return <button className='w-20 h-5 rounded-sm text-toosm bg-lightorange text-lightorange'>Pending</button>

        } else if (Type == "solved") {
            return <button className='w-20 h-5 rounded-sm text-toosm bg-lightgreen text-lightgreen'>Solved</button>

        }

    }

    return (
        <>
            {
                TicketData.map((items, index) => (
                    <div className='w-full h-32 px-5 py-3 border-b-1 grid grid-cols-3' key={index}>
                        <div className='flex flex-col col-span-2'>
                            <span className='py-0.5 text-blue-400 text-sm'>Ticket Code: {items.ticketCode}</span>
                            <span className='py-0.5 text-slate-400 text-sm'>Order ID: {items.orderID}</span>
                            <span className='py-0.5 font-medium text-sm'>{items.problem}</span>
                            <span className='py-0.5 text-slate-400 text-toosm'>Created at {items.date}</span>

                        </div>

                        <div className='flex flex-col justify-between items-end py-1'>
                            <TicketType />
                            <span className='mb-2 w-5 h-5 rounded-full flex justify-center items-center bg-green-400 text-white '>1</span>
                        </div>

                    </div>
                ))
            }
        </>

    )
}

export default Ticket