import React, { useEffect, useState, useContext } from 'react'
import { TicketContext } from '../../../pages/users/supportTicket/Context';


const Ticket = ({ data, Type, change,  selected }) => {

    console.log("components", data, Type, change,  selected);

    const [TicketData, setTicketData] = useState([
        { ticket_code: "#2147483647", orderID: "SL6578932", complain: "Received damaged product", date: "14/12/22" },
        { ticket_code: "#2147483648", orderID: "SL6578932", complain: "Product Problem", date: "14/12/22" },
    ]);

    useEffect(() => {
        console.log(data);
        if (data != undefined) {

            setTicketData(data)
        }
    }, [])


    const TicketType = () => {
        if (Type == "pending") {
            return <span className='w-20 py-1 flexRowCenter rounded-md text-toosm bg-lightorange text-lightorange'>Pending</span>

        } else if (Type == "open") {
            return <span className='w-20 py-1 flexRowCenter rounded-md text-toosm bg-lightorange text-lightorange'>Open</span>

        }else if (Type == "solved") {
            return <span className='w-20 py-1 flexRowCenter rounded-md text-toosm bg-lightgreen text-lightgreen'>Solved</span>

        }

    }

    return (
        <>
            {
                TicketData.map((items, index) => (
                    <button className=' w-full h-32 border-b-1 flex justify-between hover:bg-[#FFC800]/25' key={index}
                        onClick={() => { change(index) }}
                    // onClick={()=>{console.log("cliked");}}
                    style={{backgroundColor: (index == selected)?"#FFECF0":""}}
                    >
                        <div className='flex flex-col col-span-3 justify-start items-start pl-5 pt-4'>
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

export default React.memo(Ticket)