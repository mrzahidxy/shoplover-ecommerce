import React from "react";
import Image from "next/image";
import PageName from "../../components/seller/pageName";
import { useRouter } from "next/router";

const TrackOrders = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <div className="border-1 rounded-lg bg-white shadow-sm border-[#DADADA]  mt-10  mr-6 w-268">
        <div className="border-b-2">
          <h2 className="mx-5 my-3 text-xl">
            <PageName
              name={
                router.query.name === undefined
                  ? "Track Orders"
                  : router.query.name
              }
            />
          </h2>
        </div>
        <div className="px-6 py-5">
          <div className="flex flex-col md:max-lg:h-80 md:max-lg:justify-center sm:max-lg:items-center py-3 px-6 lg:pl-6 lg:border-0 border-2">
            <span className="flex flex-col lg:w-88">
              <h1 className="my-3">
                Write your shoplover Order ID number to track your order.
              </h1>
              <input
                type={"password"}
                placeholder="Order ID"
                className="mt-1 pl-4 w-full h-12 border-1 border-slate-400 rounded-md"
              />

              <button className=" mt-8 pl-4 w-full h-12 border-1 bg-black text-white rounded-md">
                Track
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

TrackOrders.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default TrackOrders;
