import React, { useState } from "react";
import Image from "next/image";
import PageName from "../../components/seller/pageName";
import { useRouter } from "next/router";
import down_arrow from "../../public/seller/support_ticket/down_arrow.svg";

const CreateShippingAddress = ({ Component, pageProps }) => {
  const router = useRouter();
  const [Toggle, setToggle] = useState(0);
  return (
    <>
      <div className="border-1 rounded-lg bg-white shadow-sm border-[#DADADA]  mt-10  mr-6 w-268">
        <div className="border-b-2">
          <h2 className="mx-5 my-3 text-xl">
            <PageName
              name={
                router.query.name === undefined
                  ? "Create Shipping Address"
                  : router.query.name
              }
            />
          </h2>
        </div>
        <div className="px-6 py-5">
          <div className="lg:m-8 w-full max-w-2xl lg:w-96  shadow-myshadow flex flex-col justify-between rounded-md">
            <span className="px-3 h-14 flex flex-row justify-between items-center border-b-1 ">
              <span className="font-semibold">Name</span>
              <input
                placeholder="Enter Recipient Name"
                className="w-40 h-6 text-toosm"
              />
            </span>

            <span className="px-3 h-14 flex flex-row justify-between items-center border-b-1 ">
              <span className="font-semibold">Mobile</span>
              <input
                placeholder="Enter Recipient Number  "
                className="w-40 h-6 text-toosm"
              />
            </span>

            <span className="px-3 h-14 flex flex-row justify-between items-center border-b-1 ">
              <span className="font-semibold">Region</span>
              <span className="flex flex-row gap-1">
                <input
                  placeholder="Select region"
                  className="w-32 h-6 text-toosm"
                />
                <button>
                  <Image src={down_arrow} />
                </button>
              </span>
            </span>

            <span className="px-3 h-14 flex flex-row justify-between items-center border-b-1 ">
              <span className="font-semibold">City</span>
              <span className="flex flex-row gap-1">
                <input
                  placeholder="Select city"
                  className="w-32 h-6 text-toosm"
                />
                <button>
                  <Image src={down_arrow} />
                </button>
              </span>
            </span>

            <span className="px-3 h-14 flex flex-row justify-between items-center border-b-1 ">
              <span className="font-semibold">Address</span>
              <input
                placeholder="House No. / Road / Street"
                className="w-40 h-6 text-toosm"
              />
            </span>
          </div>

          <div className="mt-6 lg:mx-8 p-5 w-full max-w-2xl lg:w-96  shadow-myshadow flex flex-col justify-between rounded-md">
            <span className="font-semibold mb-4">Address Type</span>
            <div>
              <button className="w-24 h-10 rounded-md mr-3 border-1 border-black text-slate-300 font-thin text-sm hover:bg-black hover:text-white focus:bg-black focus:text-white">
                Home
              </button>
              <button className="w-24 h-10 rounded-md mr-3 border-1 border-black text-slate-300 font-thin text-sm hover:bg-black hover:text-white focus:bg-black focus:text-white">
                Office
              </button>
              <button className="w-24 h-10 rounded-md  border-1 border-black text-slate-300 font-thin text-sm hover:bg-black hover:text-white focus:bg-black focus:text-white">
                Other
              </button>
            </div>
          </div>

          <div className="mt-3 lg:mx-8 py-4 w-full max-w-2xl lg:w-96 flex flex-row justify-between">
            <span>Make default shipping address</span>
            <button
              className="w-14 h-6 flex flex-row items-center bg-slate-400 rounded-xl"
              onClick={() => {
                if (Toggle == 0) {
                  setToggle(30);
                } else {
                  setToggle(0);
                }
              }}
            >
              <div
                className="h-7 w-7 rounded-full bg-slate-100  transition-all ease-in-out duration-500"
                style={{ transform: `translateX(${Toggle}px)` }}
              ></div>
            </button>
          </div>

          <button className="mx-8 p-3 w-full max-w-2xl lg:w-96 flex flex-row justify-center bg-black text-white rounded-md">
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

CreateShippingAddress.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default CreateShippingAddress;
