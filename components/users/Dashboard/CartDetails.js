import { useState } from 'react'

const CartDetails = () => {
    const [ProductsOrdered, setProductsOrdered] = useState(7);
    const [InCart, setInCart] = useState(3);
    const [WishList, setWishList] = useState(3);
    const [Address, setAddress] = useState({
        name: "Monkey D. Luffy",
        address: "Corporate Office: Road no-1A, House No-32,Baridhara J Block, Dhaka.",
        phone: "01631345678"
    })

    return (
        // md:w-206 md:h-147
        // sm: w-170 sm:h-121 sm:w-h-54  
        <div className='flex flex-row flex-wrap'>

            <div className='flexCenter w-[170px] mb-4 mr-4 md:mr-5 md:w-52 h-[121px] md:h-36 border-1 border-[#004CFF]'>
                <div className='flexCenter w-16 h-16 rounded-full bg-[#D1DFFF] text-[#024DFF] text-3xl font-semibold '>{ProductsOrdered}</div>
                Products Ordered
            </div>

            <div className='flexCenter w-[170px] mb-4 md:mr-5 md:w-52 h-[121px] md:h-36 border-1 border-[#FF8236]'>
                <div className='flexCenter w-16 h-16 rounded-full bg-[#FFE8DB] text-[#FF8236] text-3xl font-semibold '>{InCart}</div>
                In Your Cart
            </div>

            <div className='flexCenter w-[170px] mb-4 md:mr-5 md:w-52 h-[121px] md:h-36 border-1 border-[#029549]'>
                <div className='flexCenter w-16 h-16 rounded-full bg-[#DEF1E7] text-[#029549] text-3xl font-semibold '>{WishList}</div>
                In Your Wishlist
            </div>

            <div className='flex flex-col pb-2 sm:max-lg:my-5 w-88 md:w-96 h- md:h-36 rounded-md border-1 border-[#DADADA] bg-[#F6F6F6]'>
                <div className='ml-5 my-2'>
                    <span className='flex flex-row items-center'>
                        <h1 className='mr-5 text-xl font-serif font-medium'>Shipping address</h1>
                        <button className='text-blue-400'>+ Add New</button>
                    </span>
                    <h1 className='mt-1 font-serif font-medium'>{Address.name}</h1>
                    <h1 className='text-toosm w-72 flex-wrap'>{Address.address}</h1>
                    <h1 className='text-toosm'>{Address.phone}</h1>
                </div>
            </div>

        </div>
    )
}

export default CartDetails