import { Dropdown, Drawer } from "antd";
import Link from "next/link";
import Select from "react-select";
import { useState } from "react";

const items = [
    {
        label: (
            <a href="/users" className="flex  items-center gap-2">
                <img src="/icons/my-acc.svg" alt="" /> My Account
            </a>
        ),
        key: "0",
    },
    {
        type: "divider",
    },
    {
        label: (
            <a href="/users/trackOrders" className="flex items-center gap-2">
                <img src="/icons/track-order.svg" alt="" /> Track Orders
            </a>
        ),
        key: "1",
    },
    {
        type: "divider",
    },
    {
        label: (
            <a href="/users/wishlist" className="flex  items-center gap-2">
                <img src="/icons/my-wishlist.svg" alt="" /> My Wishlist
            </a>
        ),
        key: "2",
    },
    {
        type: "divider",
    },
    {
        label: (
            <a href="" className="flex  items-center gap-2">
                <img src="/icons/log-out.svg" alt="" /> Log Out
            </a>
        ),
        key: "3",
    },
];

const Header = () => {
    const [count, setCount] = useState(0);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const customStyles = {
        singleValue: (provided) => ({
            ...provided,
            color: "white",
        }),
        control: (base, state) => ({
            ...base,
            border: "none",
            background: "#000",
            fontColor: "#000",
            boxShadow: state.isFocused ? null : null,
            "&:hover": {
                border: "none",
            },
        }),
        menu: (base) => ({
            ...base,
            color: "#000",
        }),

        option: (provided, state) => ({
            ...provided,
            // backgroundColor: state.isSelected ? '#FFC800' : 'inherit',
            // '&:hover': { backgroundColor: state.isSelected ? '#FFC800' : 'rgb(222, 235, 255)' }
            color: "#000",
            padding: "10px",
            backgroundColor: state.isSelected && "#fff",
            "&:hover": { backgroundColor: "#FFC800" },
        }),
    };

    const languages = [
        {
            value: "BD",
            label: (
                <div className="flex flex-row gap-2 items-center text-toosm w-20 h-6">
                    <img src="/icons/bd.svg" alt="" className="w-6 h-6" />
                    Bangla{" "}
                </div>
            ),
        },
        {
            value: "EN",
            label: (
                <div className="flex flex-row gap-2 items-center text-toosm w-20 h-6">
                    <img src="/icons/us.svg" alt="" className="w-6 h-6" />
                    English{" "}
                </div>
            ),
        },
    ];

    const LeftSide = () => (
        <>
            <div className="flex items-center min-w-[128px] max-w-[128px]">
                <Select
                    styles={customStyles}
                    defaultValue={languages[0]}
                    options={languages}
                />
            </div>


            <Dropdown
                menu={{
                    items,
                }}
                trigger={["click"]}
            >
                <div className="flex items-center gap-2">
                    <img src="/user-icon.svg " />
                    <span>Hi, User</span>
                </div>
            </Dropdown>

            <div
                className="flex items-center gap-2"
                type="primary"
                onClick={showDrawer}
            >
                <div className="bg-[#ffffff21] rounded-full p-2">
                    <img src="/icons/cart.svg" className="min-w-[10px]" />
                </div>
                <span>2 items</span>
            </div>

            <Drawer
                closable={false}
                placement="right"
                onClose={onClose}
                open={open}
                title={
                    <div className="flex justify-between">
                        <div className="space-x-2">
                            <span>Items</span>
                            <span className="bg-primary rounded-full px-[5px] text-black text-base">
                                3
                            </span>
                        </div>
                        <div className="space-x-2 text-[#979797]">
                            <span>Close</span>
                            <button
                                className="bg-white px-2 rounded-full"
                                onClick={onClose}
                            >
                                X
                            </button>
                        </div>
                    </div>
                }
                headerStyle={{ background: "#F1F1F1", color: "#979797" }}
            >
                <div className="space-y-2 ">
                    {[{ id: 1 }, { id: 2 }, { id: 3 }].map((p) => (
                        <div key={p.id}>
                            <div className="grid grid-cols-10 gap-2">
                                <div className="flex flex-col gap-[1px] col-span-1">
                                    <button
                                        className="border p-1  focus:bg-secondary focus:ring-1"
                                        onClick={() => setCount(count + 1)}
                                    >
                                        +
                                    </button>
                                    <button className="border p-1 text-primary">
                                        {count}
                                    </button>
                                    <button
                                        className="border p-1 focus:bg-secondary focus:ring-1"
                                        onClick={() => count > 0 && setCount(count - 1)}
                                    >
                                        -
                                    </button>
                                </div>
                                <img
                                    src="/images/cart-img.png"
                                    alt=""
                                    className="col-span-2"
                                />
                                <div className="space-y-2 col-span-4">
                                    <span className="font-medium text-sm">
                                        Water Resistant High Quality Backpack...
                                    </span>
                                    <div className="space-x-2">
                                        <span className="text-[#979797] text-sm">
                                            Color: Black
                                        </span>
                                        <span className="text-[#979797] text-sm">Size: S</span>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-center col-span-2">
                                    <span className="text-primary text-base">৳350</span>
                                    <span className="text-[#979797] text-sm line-through">
                                        ৳450
                                    </span>
                                </div>
                                <div className="flex justify-center items-center text-base col-span-1">
                                    <img
                                        src="/icons/delete.svg"
                                        alt=""
                                        className="h-5 hover:h-4"
                                    />
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </Drawer>
        </>
    )

    return (
        // <div className="bg-black">
        //     <div className="py-8 2xl:py-4  mx-4 md:mx-10 l:mx-0 2xl:mx-[200px] text-white lg:grid lg:grid-cols-6 xl:grid-cols-7">
        //         {/* left of input */}
        //         <div className="flex flex-row items-center gap-1 w-[312px] lg:col-span-1">
        //             <Link href="/">
        //                 <img
        //                     src="/images/sl-logo.svg"
        //                     alt="logo"
        //                     className="w-36"
        //                 />
        //             </Link>
        //             <div className="flex gap-1 xl:gap-2 justify-center items-center">
        //                 <img
        //                     className="bg-[#ffffff21] w-6 rounded-full"
        //                     src="/icons/home.svg"
        //                 />

        //                 <span className="flex flex-col text-xs md:text-sm xl:text-toosm font-normal">
        //                     Deliver to :
        //                     <span className="text-xs md:text-sm  xl:text-sm font-bold">
        //                         Dhaka
        //                     </span>
        //                 </span>
        //             </div>
        //             <div className="hidden md:flex items-center gap-2 lg:hidden ">
        //                 <img src="/flag-icon.svg" />
        //                 <span>English</span>
        //             </div>
        //         </div>

        //         {/* Input */}
        //         <div className="col-span-2 ml-2 xl:col-span-4 flex mx-2">
        //             <input
        //                 className="w-full h-11 rounded-l-sm pl-2 text-black focus:outline-none"
        //                 placeholder="I want to buy..."
        //             />
        //             <Link
        //                 href="/products/searchresult"
        //                 className="w-14  bg-primary flex items-center justify-center rounded-sm"
        //             >
        //                 <img src="/icons/search.svg" />
        //             </Link>
        //         </div>

        //         {/* Right of input */}
        //         <div className=" min-w-[312px] col-span-2 flex lg:gap-10 xl:gap-4 lg:justify-end">
        //             <div className="flex items-center min-w-[128px] max-w-[128px]">
        //                 <Select
        //                     styles={customStyles}
        //                     defaultValue={languages[0]}
        //                     options={languages}
        //                 />
        //             </div>


        //             <Dropdown
        //                 menu={{
        //                     items,
        //                 }}
        //                 trigger={["click"]}
        //             >
        //                 <div className="flex items-center gap-2">
        //                     <img src="/user-icon.svg " />
        //                     <span>Hi, User</span>
        //                 </div>
        //             </Dropdown>

        //             <div
        //                 className="flex items-center gap-2"
        //                 type="primary"
        //                 onClick={showDrawer}
        //             >
        //                 <div className="bg-[#ffffff21] rounded-full p-2">
        //                     <img src="/icons/cart.svg" className="min-w-[10px]" />
        //                 </div>
        //                 <span>2 items</span>
        //             </div>

        //             <Drawer
        //                 closable={false}
        //                 placement="right"
        //                 onClose={onClose}
        //                 open={open}
        //                 title={
        //                     <div className="flex justify-between">
        //                         <div className="space-x-2">
        //                             <span>Items</span>
        //                             <span className="bg-primary rounded-full px-[5px] text-black text-base">
        //                                 3
        //                             </span>
        //                         </div>
        //                         <div className="space-x-2 text-[#979797]">
        //                             <span>Close</span>
        //                             <button
        //                                 className="bg-white px-2 rounded-full"
        //                                 onClick={onClose}
        //                             >
        //                                 X
        //                             </button>
        //                         </div>
        //                     </div>
        //                 }
        //                 headerStyle={{ background: "#F1F1F1", color: "#979797" }}
        //             >
        //                 <div className="space-y-2 ">
        //                     {[{ id: 1 }, { id: 2 }, { id: 3 }].map((p) => (
        //                         <div key={p.id}>
        //                             <div className="grid grid-cols-10 gap-2">
        //                                 <div className="flex flex-col gap-[1px] col-span-1">
        //                                     <button
        //                                         className="border p-1  focus:bg-secondary focus:ring-1"
        //                                         onClick={() => setCount(count + 1)}
        //                                     >
        //                                         +
        //                                     </button>
        //                                     <button className="border p-1 text-primary">
        //                                         {count}
        //                                     </button>
        //                                     <button
        //                                         className="border p-1 focus:bg-secondary focus:ring-1"
        //                                         onClick={() => count > 0 && setCount(count - 1)}
        //                                     >
        //                                         -
        //                                     </button>
        //                                 </div>
        //                                 <img
        //                                     src="/images/cart-img.png"
        //                                     alt=""
        //                                     className="col-span-2"
        //                                 />
        //                                 <div className="space-y-2 col-span-4">
        //                                     <span className="font-medium text-sm">
        //                                         Water Resistant High Quality Backpack...
        //                                     </span>
        //                                     <div className="space-x-2">
        //                                         <span className="text-[#979797] text-sm">
        //                                             Color: Black
        //                                         </span>
        //                                         <span className="text-[#979797] text-sm">Size: S</span>
        //                                     </div>
        //                                 </div>

        //                                 <div className="flex flex-col items-center justify-center col-span-2">
        //                                     <span className="text-primary text-base">৳350</span>
        //                                     <span className="text-[#979797] text-sm line-through">
        //                                         ৳450
        //                                     </span>
        //                                 </div>
        //                                 <div className="flex justify-center items-center text-base col-span-1">
        //                                     <img
        //                                         src="/icons/delete.svg"
        //                                         alt=""
        //                                         className="h-5 hover:h-4"
        //                                     />
        //                                 </div>
        //                             </div>
        //                             <hr />
        //                         </div>
        //                     ))}
        //                 </div>
        //             </Drawer>
        //         </div>
        //     </div>
        // </div>

        // <div className="bg-black flexRowCenter">
        //     <div className="w-[1600px] grid grid-cols-10">

        //         {/* Left  */}
        //         <div className="flexRowCenter shrink-0 justify-start col-span-2 bg-red-500">

        //             <div className="pl-8 flex flex-row shrink-0 items-center gap-7 w-[312px] lg:col-span-1">
        //                 <Link href="/">
        //                     <img
        //                         src="/images/sl-logo.svg"
        //                         alt="logo"
        //                         className="w-36"
        //                     />
        //                 </Link>
        //                 <div className="flex gap-1 xl:gap-2 justify-center items-center">
        //                     <img
        //                         className="bg-[#ffffff21] w-6 rounded-full"
        //                         src="/icons/home.svg"
        //                     />

        //                     <span className="flex flex-col text-xs md:text-sm xl:text-toosm font-normal">
        //                         Deliver to :
        //                         <span className="text-xs md:text-sm  xl:text-sm font-bold">
        //                             Dhaka
        //                         </span>
        //                     </span>
        //                 </div>
        //                 <div className="hidden md:flex items-center gap-2 lg:hidden ">
        //                     <img src="/flag-icon.svg" />
        //                     <span>English</span>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Middle */}
        //         <div className="col-span-6 bg-green-500 py-4">
        //             <div className="col-span-2 ml-2 xl:col-span-4 flex flex-row mx-2">
        //                 <input
        //                     className="w-full h-11 rounded-l-md pl-2 text-black focus:outline-none"
        //                     placeholder="I want to buy..."
        //                 />
        //                 <Link
        //                     href="/products/searchresult"
        //                     className="w-14  bg-primary flex items-center justify-center rounded-r-md"
        //                 >
        //                     <img src="/icons/search.svg" />
        //                 </Link>
        //             </div>
        //         </div>

        //         {/* Right */}
        //         <div className="col-span-2 flex shrink-0 bg-blue-500">
        //             <div className=" w-[312px] col-span-2 flex  lg:gap-10 xl:gap-4 lg:justify-end">
        //                 
        //             </div>
        //         </div>

        //     </div>
        // </div>

        <div className="bg-black flexRowCenter">
            <div className="w-full xl:w-[1500px] py-2 h-full flex flex-col xl:flex-row md:px-5 text-white">

                {/* left */}
                <div className="flexRowCenter sm:max-md:justify-start md:max-xl:justify-between shrink-0 gap-8 sm:max-xl:px-6 md:max-xl:pt-2">
                    <div className="flexRowCenter gap-8 ">
                        <Link href="/">
                            <img
                                src="/images/sl-logo.svg"
                                alt="logo"
                                className="w-32"
                            />
                        </Link>
                        <div className="flex gap-1 xl:gap-2 justify-center items-center">
                            <img
                                className="bg-white w-6 rounded-full"
                                src="/icons/location.png"
                            />

                            <span className="flex flex-col text-xs md:text-sm xl:text-toosm font-normal">
                                Deliver to :
                                <span className="text-xs md:text-sm  xl:text-sm font-bold">
                                    Dhaka
                                </span>
                            </span>
                        </div>
                    </div>


                    <div className="flex sm:max-md:hidden xl:hidden flex-row shrink-0 gap-1">
                        <LeftSide />
                    </div>

                </div>

                {/* middle */}
                <div className="flex flex-row shrink xl:w-[900px] h-16">
                    <div className="w-full flex flex-row py-3 sm:px-4">
                        <input
                            className="w-full rounded-l-md pl-2 text-black focus:outline-none"
                            placeholder="I want to buy..."
                        />
                        <Link
                            href="/products/searchresult"
                            className="w-14 bg-primary flex items-center justify-center rounded-r-md"
                        >
                            <img src="/icons/search.svg" />
                        </Link>
                    </div>

                </div>

                {/* right */}
                <div className="hidden xl:flex flex-row shrink-0 gap-1">
                    <LeftSide />
                </div>

            </div>

        </div>

    );
};

export default Header;
