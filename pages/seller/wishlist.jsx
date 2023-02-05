import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import bin from "../../public/seller/wishlist/bin.svg";
import cart from "../../public/seller/wishlist/cart.svg";

import speaker from "../../public/seller/wishlist/product/speaker.svg";
import phone from "../../public/seller/wishlist/product/phone.svg";
import bag from "../../public/seller/wishlist/product/bag.svg";
import earbuds from "../../public/seller/wishlist/product/earbuds.svg";
import earbud2 from "../../public/seller/wishlist/product/earbud2.svg";
import PageName from "../../components/seller/pageName";

const Wishlist = ({ Component, pageProps }) => {
  const router = useRouter();

  const [Wishes, setWishes] = useState([
    {
      image: speaker,
      title: "JBL Party Box On-The-Go Portable Party And Wireless Mic",
      discounted: "1160",
      original: "1400",
    },
    {
      image: phone,
      title: "Realme Narzo 50a Prime-4GB RAM/128GB ROM Mobile Smartphone",
      discounted: "12500",
      original: "13800",
    },
    {
      image: bag,
      title: "Water Resistant Men Crossbody Sling Bag with USB Port",
      discounted: "279",
      original: "550",
    },
    {
      image: earbuds,
      title: "Realme Tws Wireless Earbuds",
      discounted: "330",
      original: "450",
    },
    {
      image: earbud2,
      title: "Realme Dizo Go Pods Tws - Black",
      discounted: "4670",
      original: "4799",
    },
    {
      image: speaker,
      title: "JBL Party Box On-The-Go Portable Party And Wireless Mic",
      discounted: "1160",
      original: "1400",
    },
    {
      image: phone,
      title: "Realme Narzo 50a Prime-4GB RAM/128GB ROM Mobile Smartphone",
      discounted: "12500",
      original: "13800",
    },
    {
      image: bag,
      title: "Water Resistant Men Crossbody Sling Bag with USB Port",
      discounted: "279",
      original: "550",
    },
    {
      image: earbuds,
      title: "Realme Tws Wireless Earbuds",
      discounted: "330",
      original: "450",
    },
    {
      image: earbud2,
      title: "Realme Dizo Go Pods Tws - Black",
      discounted: "4670",
      original: "4799",
    },
  ]);
  return (
    <>
      <div className="border-1 rounded-lg bg-white shadow-sm border-[#DADADA]  mt-10  mr-6 w-268">
        <div className="border-b-2">
          <h2 className="mx-5 my-3 text-xl">
            <PageName
              name={
                router.query.name === undefined
                  ? "Payment method"
                  : router.query.name
              }
            />
          </h2>
        </div>
        <div className="px-6 py-5">
          <div className="mt-5">
            <div className="h-12 hidden md:grid grid-cols-10 bg-listBar items-center">
              <h1 className=" col-span-5  ml-14">Item</h1>
              <h1 className=" text-center">Amount</h1>
              <h1 className=" text-center hidden lg:flex justify-center col-span-2">
                Delete
              </h1>
              <h1 className=" col-span-2 sm:max-lg:ml-20">Purchase</h1>
            </div>
          </div>

          <div className="flex flex-col">
            {Wishes.map((products, index) => (
              <div
                key={index}
                className="lg:p-4 grid md:grid-cols-10 items-center border-b-1 border-borderColor"
              >
                <div className="flex flex-row items-center col-span-5 ">
                  <input type="checkbox" className="mr-4 lg:hidden" />
                  <Image
                    src={products.image}
                    className="w-20 h-20 rounded-md border-1 border-borderColor"
                    alt=""
                  />
                  <h1 className="ml-2 md:ml-7 text-sm md:text-md">
                    {products.title}
                  </h1>
                </div>
                <div className="w-28 md:w-full ml-36 md:ml-6 h-11 flex flex-row md:flex-col items-center text-lg">
                  <h1 className="text-[#DE146A] text-sm md:text-base font-medium">
                    ৳{products.discounted}
                  </h1>
                  <h1 className="text-mygrey text-sm md:text-base ml-1 md:ml-0">
                    ৳{products.original}
                  </h1>
                  <div className="-translate-x-12 md:-translate-x-0 md:-translate-y-5">
                    <div className="w-14 h-0.5 bg-mygrey"></div>
                  </div>
                </div>
                <button className=" justify-center hidden lg:flex col-span-2">
                  <Image src={bin} className="w-6 h-6 border-1" alt="" />
                </button>
                <div className=" text-white col-span-2 flex flex-col md:max-lg:ml-20">
                  <button className="bg-black rounded-lg hidden md:flex justify-center items-center w-28 h-9 ">
                    Add to cart
                  </button>
                  <Image src={cart} className="w-8 h-8 md:hidden " alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Wishlist.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default Wishlist;

/*
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import bin from "../../public/seller/wishlist/bin.svg";
import cart from "../../public/seller/wishlist/cart.svg";

import speaker from "../../public/seller/wishlist/product/speaker.svg";
import phone from "../../public/seller/wishlist/product/phone.svg";
import bag from "../../public/seller/wishlist/product/bag.svg";
import earbuds from "../../public/seller/wishlist/product/earbuds.svg";
import earbud2 from "../../public/seller/wishlist/product/earbud2.svg";
import PageName from "../../components/seller/pageName";

const wishlist = ({ Component, pageProps }) => {
  const router = useRouter();

  const [Wishes, setWishes] = useState([
    {
      image: speaker,
      title: "JBL Party Box On-The-Go Portable Party And Wireless Mic",
      discounted: "1160",
      original: "1400",
    },
    {
      image: phone,
      title: "Realme Narzo 50a Prime-4GB RAM/128GB ROM Mobile Smartphone",
      discounted: "12500",
      original: "13800",
    },
    {
      image: bag,
      title: "Water Resistant Men Crossbody Sling Bag with USB Port",
      discounted: "279",
      original: "550",
    },
    {
      image: earbuds,
      title: "Realme Tws Wireless Earbuds",
      discounted: "330",
      original: "450",
    },
    {
      image: earbud2,
      title: "Realme Dizo Go Pods Tws - Black",
      discounted: "4670",
      original: "4799",
    },
    {
      image: speaker,
      title: "JBL Party Box On-The-Go Portable Party And Wireless Mic",
      discounted: "1160",
      original: "1400",
    },
    {
      image: phone,
      title: "Realme Narzo 50a Prime-4GB RAM/128GB ROM Mobile Smartphone",
      discounted: "12500",
      original: "13800",
    },
    {
      image: bag,
      title: "Water Resistant Men Crossbody Sling Bag with USB Port",
      discounted: "279",
      original: "550",
    },
    {
      image: earbuds,
      title: "Realme Tws Wireless Earbuds",
      discounted: "330",
      original: "450",
    },
    {
      image: earbud2,
      title: "Realme Dizo Go Pods Tws - Black",
      discounted: "4670",
      original: "4799",
    },
  ]);

  return (
    <div className=" lg:w-268 bg-white lg:mt-10 p-8">
      <PageName name={router.query.name} />

      <div className="mt-5">
        <div className="h-12 hidden md:grid grid-cols-10 bg-listBar items-center">
          <h1 className=" col-span-5  ml-14">Item</h1>
          <h1 className=" text-center">Amount</h1>
          <h1 className=" text-center hidden lg:flex justify-center col-span-2">
            Delete
          </h1>
          <h1 className=" col-span-2 sm:max-lg:ml-20">Purchase</h1>
        </div>
      </div>

      <div className="flex flex-col">
        {Wishes.map((products, index) => (
          <div
            key={index}
            className="lg:p-4 grid md:grid-cols-10 items-center border-b-1 border-borderColor"
          >
            <div className="flex flex-row items-center col-span-5 ">
              <input type="checkbox" className="mr-4 lg:hidden" />
              <Image
                src={products.image}
                className="w-20 h-20 rounded-md border-1 border-borderColor"
                alt=""
              />
              <h1 className="ml-2 md:ml-7 text-sm md:text-md">
                {products.title}
              </h1>
            </div>
            <div className="w-28 md:w-full ml-36 md:ml-6 h-11 flex flex-row md:flex-col items-center text-lg">
              <h1 className="text-[#DE146A] text-sm md:text-base font-medium">
                ৳{products.discounted}
              </h1>
              <h1 className="text-mygrey text-sm md:text-base ml-1 md:ml-0">
                ৳{products.original}
              </h1>
              <div className="-translate-x-12 md:-translate-x-0 md:-translate-y-5">
                <div className="w-14 h-0.5 bg-mygrey"></div>
              </div>
            </div>
            <button className=" justify-center hidden lg:flex col-span-2">
              <Image src={bin} className="w-6 h-6 border-1" alt="" />
            </button>
            <div className=" text-white col-span-2 flex flex-col md:max-lg:ml-20">
              <button className="bg-black rounded-lg hidden md:flex justify-center items-center w-28 h-9 ">
                Add to cart
              </button>
              <Image src={cart} className="w-8 h-8 md:hidden " alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

wishlist.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default wishlist;
*/
