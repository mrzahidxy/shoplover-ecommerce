import { useEffect, useState, useLayoutEffect } from "react";

const CartDetails = ({ data }) => {
  const [ProductsOrdered, setProductsOrdered] = useState(85);
  const [InCart, setInCart] = useState(3);
  const [WishList, setWishList] = useState(3);
  const [Address, setAddress] = useState({
    name: "Monkey D. Luffy",
    location:
      "Corporate Office: Road no-1A, House No-32,Baridhara J Block, Dhaka.",
    phone: "01631345678",
  });

  useEffect(() => {
    setProductsOrdered(data.ordered);
    setInCart(data.cart);
    setWishList(data.wishlist);
    // setAddress(data.address)
    console.log(data.address);
  }, []);

  return (
    <div className="flex flex-col xl:flex-row lg:gap-5">
      <span className="grid grid-cols-2 gap-5 md:grid-cols-dashboard  items-center">
        <div className="flexColCenter w-[170px] md:w-52 h-[121px] md:h-36 border-1 border-[#004CFF]">
          <div className="flexRowCenter w-16 h-16 rounded-full bg-[#D1DFFF] text-[#024DFF] text-3xl font-semibold ">
            {ProductsOrdered}
          </div>
          Total Products
        </div>

        <div className="flexColCenter w-[170px] md:w-52 h-[121px] md:h-36 border-1 border-[#FF8236]">
          <div className="flexRowCenter w-16 h-16 rounded-full bg-[#FFE8DB] text-[#FF8236] text-3xl font-semibold ">
            {InCart}
          </div>
          Total Sales
        </div>

        <div className="flexColCenter w-[170px] md:w-52 h-[121px] md:h-36 border-1 border-[#029549]">
          <div className="flexRowCenter w-16 h-16 rounded-full bg-[#DEF1E7] text-[#029549] text-3xl font-semibold ">
            {WishList}
          </div>
          Successfull Order
        </div>
      </span>

      <div className="flex flex-col pb-2 sm:max-lg:my-5 w-88 md:w-96 md:h-36 rounded-md border-1 border-[#DADADA] bg-[#FFC800]">
        <div className="my-6 mx-5">
          <div className="flex justify-between">
            <div>
              <h3 className="bg-white text-2xl px-4 py-2 rounded-full">
                ৳246080
              </h3>
              <p className="ml-2">Sold this Month</p>
            </div>
            <div>
              <h3 className="bg-[#fde68a] text-2xl px-4 py-2 rounded-full">
                ৳5110560
              </h3>
              <p className="ml-2">Total Earning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
