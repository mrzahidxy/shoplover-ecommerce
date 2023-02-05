import React from "react";
import Image from "next/image";
import PageName from "../../components/seller/pageName";
import { useRouter } from "next/router";
import green_check from "../../public/seller/icons/green_check.svg";
import white_dot from "../../public/seller/icons/white_dot.svg";

const ShippingAddress = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <div className="border-1 rounded-lg bg-white shadow-sm border-[#DADADA]  mt-10  mr-6 w-268">
        <div className="border-b-2">
          <div className="flex justify-between">
            <h2 className="mx-5 my-3 text-xl">
              <PageName
                name={
                  router.query.name === undefined
                    ? "Manage Shipping Address"
                    : router.query.name
                }
              />
            </h2>
            <button
              className="mx-5 my-4 px-4 bg-black text-white rounded-md"
              onClick={() => {
                router.push("/seller/create-shipping-address");
              }}
            >
              + Create New
            </button>
          </div>
        </div>
        <div className="px-6 py-5">
          <div className="flex gap-2">
            <div className="max-w-[389px] space-y-4 ml-2 border-2 rounded-md">
              <div className=" bg-[#F6F6F6] grid grid-cols-6 gap-3 p-4">
                <div className="col-span-5 flex flex-col gap-1">
                  <span className="w-[65px] mb-2 py-1 font-medium text-xs bg-black text-white text-center">
                    Home
                  </span>
                  <span className="font-medium text-[15px]">John Doe</span>
                  <span className="font-base text-sm">
                    Corporate Office: Road no-1A, House No-32, Baridhara J
                    Block, Dhaka. 01401549873
                  </span>
                </div>
                <div>
                  <span className="text-[#FFC800] text-sm">EDIT</span>
                  <div className="mt-11">
                    <Image src={white_dot} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[389px] space-y-4 ml-2 border-2 rounded-md">
              <div className=" bg-[#F6F6F6] grid grid-cols-6 gap-3 p-4">
                <div className="col-span-5 flex flex-col gap-1">
                  <span className="w-[65px] mb-2 py-1 font-medium text-xs bg-black text-white text-center">
                    Office
                  </span>
                  <span className="font-medium text-[15px]">Jany Doe</span>
                  <span className="font-base text-sm">
                    Corporate Office: Road no-1A, House No-32, Baridhara J
                    Block, Dhaka. 01401549873
                  </span>
                </div>
                <div>
                  <span className="text-[#FFC800] text-sm">EDIT</span>
                  <div className="mt-11">
                    <Image src={green_check} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ShippingAddress.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default ShippingAddress;
