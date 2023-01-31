import React from "react";
import Product from "../components/Product";
import Link from "next/link";
import { newArrivalsProducts, topSellingProducts } from "./demoData";

const SellerPage = () => {
  return (
    <div className="container my-5">
      <div className="bg-black h-[172px] p-6">
        <div className="md:w-100 h-[122px] px-4 py-7 bg-white rounded-full sm:w-80">
          <div className="flex justify-evenly">
            <img src="/seller-logo.png" width={68} height={68} />{" "}
            <div className="py-2">
              <p className="font-semibold text-[17px]">The Game Changer</p>
              <div className="flex gap-1">
                <img src="/star-icon.svg" />
                <img src="/star-icon.svg" />
                <img src="/star-icon.svg" />
                <img src="/star-icon.svg" />
                <img src="/star-icon.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between border">
        <div>
          <Link href={`/seller_page`}>
            <button className="bg-[#FFECA5] px-5 py-3 border-b-4 border-b-[#000000]">
              Home Page
            </button>
          </Link>
          <Link href={`/seller_all_products`}>
            <button className="px-5 py-3">All Products</button>
          </Link>
        </div>

        <div>
          <div className="py-1 relative mx-auto text-gray-600">
            <input
              className="lg:w-167 lg:block md:w-100 md:block sm:hidden h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none bg-[#F1F1F1]"
              type="Search in this store"
              name="search"
              placeholder="Search in this store"
            />
            <button type="button" className="absolute right-0 top-0 mt-3 mr-4">
              <img src="/seller_search.png" />
            </button>
          </div>
        </div>
      </div>

      <h3 className="text-2xl mt-8">New Arrivals </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
        {newArrivalsProducts.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>

      <h3 className="text-2xl mt-8">Top Selling </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
        {topSellingProducts.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SellerPage;

// const SellerPage = ({ Component, pageProps }) => {
//   return (
//     <div className=" lg:w-268 bg-white mt-10 px-10">
//       <h1 className="mt-4 text-lg">Teeeeesting</h1>
//     </div>
//   );
// };

// SellerPage.getLayout = function PageLayout(page) {
//   return <>{page}</>;
// };

// export default SellerPage;
