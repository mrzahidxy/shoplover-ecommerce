import React, { useState, useCallback, useEffect, useMemo } from 'react'

import tickets from "../data/tickets.json"

import PageName from "../../../components/users/pageName"

import Ticket from '../../../components/users/supportTicket.js/Ticket'
import NoTicket from '../../../components/users/supportTicket.js/NoTicket'
import { TicketContext } from './Context'

import pending from "../../../public/Nahin/support_ticket/pending.svg"
import down_arrow from "../../../public/Nahin/support_ticket/down_arrow.svg"
import notfound from "../../../public/Nahin/support_ticket/notfound.svg"
import emoji from "../../../public/Nahin/support_ticket/emoji.svg"
import attachment from "../../../public/Nahin/support_ticket/attachment.svg"

import Image from 'next/image'

const supportTicket = () => {

    const [Solved, setSolved] = useState([])
    const [Open, setOpen] = useState([])
    const [Pending, setPending] = useState([
        { ticketCode: "#2147483647", orderID: "SL6578932", problem: "Received damaged product", date: "14/12/22" }
    ]);
    const [OptionSelected, setOptionSelected] = useState('pending');
    const [OptionColor, setOptionColor] = useState(["text-pink-500", ""])

    const [Rotate, setRotate] = useState("180")
    const [ShowTicket, setShowTicket] = useState("block")

    const [ChatID, setChatID] = useState(0)
    const chatHandler = useCallback((chatID) => {
        setChatID(chatID)
    })

    useEffect(() => {
        if (tickets != undefined) {
            setSolved(tickets.solved)
            setOpen(tickets.open)
            setPending(tickets.pending)
        }
    }, [tickets])

    const ShowOptions = () => {
        console.log();
        if (Pending.length == 0 && Solved == 0) {
            console.log("showing option no ticket");
            return <NoTicket />
        } else if (OptionSelected == 'solved') {
            console.log("showing option solved");
            return <Ticket data={Solved} Type="solved" change={chatHandler} selected={ChatID} />
        } else if (OptionSelected == 'open') {
            console.log("showing option solved");
            return <Ticket data={Open} Type="open" change={chatHandler} selected={ChatID} />
        } else {
            console.log("showing option pending");
            return <Ticket data={Pending} Type="pending" change={chatHandler} selected={ChatID} />
        }
    }

    const ChatView = () => {
        if (tickets[OptionSelected][ChatID] != undefined) {
            return (
                <>
                    {
                        tickets[OptionSelected][ChatID].chat.map((item, index) => {
                            if (index % 2 == 0) {
                                return (
                                    <span key={index} className='flex flex-row'>

                                        <span className='w-10 h-10 rounded-md flex flex-row items-center justify-center bg-white'>{item.user[0]}</span>

                                        <span className=' w-full max-w-[70%]'>
                                            {
                                                item.chat.map((item2, index2) => (
                                                    <span key={index2} className='ml-2 mt-5 flex flex-row'>
                                                        <span className='bg-[#FFECF0] min-h-[50px] p-2 flex items-center rounded-md'>{item2}</span>
                                                    </span>
                                                ))
                                            }
                                        </span>

                                    </span>
                                )
                            } else {
                                return (

                                    <span key={index} className='flex flex-row-reverse'>

                                        <span className='w-10 h-10 rounded-md flex flex-row items-center justify-center mx-2 bg-white'>{item.user[0]}</span>

                                        <span className='w-full max-w-[70%]'>
                                            {
                                                item.chat.map((item2, index2) => (
                                                    <span key={index2} className=' mt-5 flex flex-row  justify-end'>
                                                        <span className='bg-white min-h-[50px] p-2 flex items-center rounded-md'>{item2}</span>
                                                    </span>
                                                ))
                                            }
                                        </span>

                                    </span>
                                )
                            }
                        })
                    }
                </>
            )

        }
    }


    return (
        <div className='mt-10 xl:w-285 bg-white'>
            <div className='flex flex-row px-6 items-center justify-between ' >
                <PageName name={"Support Ticket"} />


                <div className='flex flex-row'>
                    <button className='flex justify-center items-center bg-black text-white py-2 px-4 rounded-md text-sm'
                        onClick={() => { router.push("/users/createNewTicket") }}
                    >+ Create New</button>
                    
                    <button className="px-4 lg:hidden transition-all ease-in-out duration-700" style={{ rotate: Rotate + "deg" }} onClick={() => {
                        if (Rotate == "180") {
                            setRotate("0")
                            setShowTicket("none")
                        } else {
                            setRotate("180")
                            setShowTicket("block")
                        }
                    }}><Image src={down_arrow} className="w-5 h-5" /></button>
                </div>


            </div>

            {/* <div className='mt-2 lg:w-268 border-1 lg:h-[730px] sm:max-lg:mx-6 mb-2'> */}
            <div className='grid grid-cols-1 lg:grid-cols-3 border-1 sm:max-lg:mx-6 mb-2'>
                {/* <div className={'mb-2 lg:w-[377px] h-[500px] lg:h-[730px] lg:border-r-2 col-span-1 overflow-y-auto sm:max-lg:'+ShowTicket}> */}
                <div className={'mb-2 2xl:w-[377px] h-[500px] lg:h-[730px] lg:border-r-2 col-span-1 overflow-y-auto'} style={{ display: ShowTicket }} >

                    {/* Ticket Type */}
                    <div className='flex flex-row h-10 pl-6 items-center border-b-1'>

                        <Image src={pending} alt="" className="mr-2 h-4 w-5" />

                        <button className='flex text-toosm mx-2 '
                            onClick={() => {
                                setOptionColor(["text-pink-500", "", ""]);
                                setOptionSelected("pending")
                            }}
                        >
                            <span className={OptionColor[0]}>Pending ({Pending.length})</span>
                        </button>

                        <button className='flex text-toosm mx-2 '
                            onClick={() => {
                                setOptionColor(["", "text-pink-500", ""]);
                                setOptionSelected("open")
                            }}
                        >
                            <span className={OptionColor[1]}>Open ({Open.length})</span>
                        </button>

                        <button className='flex text-toosm mx-2'
                            onClick={() => {
                                setOptionColor(["", "", "text-pink-500"]);
                                setOptionSelected("solved")
                            }}
                        >
                            <span className={OptionColor[2]}>Solved ({Solved.length})</span>
                        </button>
                    </div>

                    {/* Ticket View */}
                    <ShowOptions />

                </div>

                {/* Chat view */}
                <div className='col-span-2 bg-[#D3DCFC] p-6 min-h-[500px] lg:h-[730px]'>
                    <div className='w-full h-3/4 overflow-y-auto flex flex-col'>
                        <ChatView />
                    </div>

                    {/* comment view in chat */}
                    <div className='bg-white flex flex-col mt-8 pb-2 w-full h-36 rounded-md border-1'>
                        <div className='w-full h-9 border-b-1 flex flex-row items-center'>
                            <span className='h-full w-16 border-b-2 border-black  flex flex-row justify-center'>
                                <h1 className='text-sm p-1 font-semibold'>Reply</h1>
                            </span>

                        </div>

                        <textarea className='h-36 my-1 mx-4' />
                        <span className='mx-4 flex flex-row items-center justify-between'>
                            <span className='flex flex-row items-center '>
                                <button><Image src={emoji} alt="" className='mr-3' /></button>
                                <button><Image src={attachment} alt="" /></button>
                            </span>
                            <button className='w-16 h-7 bg-cyan-500 text-white rounded-sm font-medium'>Send</button>
                        </span>

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

