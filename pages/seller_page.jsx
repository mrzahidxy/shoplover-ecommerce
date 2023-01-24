import React from "react";
import Product from "../components/Product";

const newArrivalsProducts = [
  {
    id: 1,
    title: "Apple Macbook- 16core 16GB RAM 1TB",
    price: " ৳1,86,400",
    img: "/product1.png",
  },
  {
    id: 2,
    title: "Motorolla Smartphone with 8GB RAM 128GB Storage",
    price: "৳1,449",
    img: "/product2.png",
  },
  {
    id: 3,
    title: "Sony Mirrorless camera with Multifuncktion Key",
    price: "৳65,600",
    img: "/product3.png",
  },
  {
    id: 4,
    title: "Mibro Waterproof Smartwatch 3” Display",
    price: "৳2,400",
    img: "/product4.png",
  },
  {
    id: 5,
    title: "phillips Rice Cooker 8 Litre 2 Cups",
    price: "৳98,50",
    img: "/product5.png",
  },
  {
    id: 6,
    title: "JBL Airdots WithNoise cancelletion -Black",
    price: "৳98,50",
    img: "/product6.png",
  },
  {
    id: 7,
    title: "Apple Macbook- 16core 16GB RAM 1TB",
    price: " ৳1,86,400",
    img: "/product1.png",
  },
  {
    id: 8,
    title: "Motorolla Smartphone with 8GB RAM 128GB Storage",
    price: "৳1,449",
    img: "/product2.png",
  },
  {
    id: 9,
    title: "Sony Mirrorless camera with Multifuncktion Key",
    price: "৳65,600",
    img: "/product3.png",
  },
  {
    id: 10,
    title: "Mibro Waterproof Smartwatch 3” Display",
    price: "৳2,400",
    img: "/product4.png",
  },
  {
    id: 11,
    title: "phillips Rice Cooker 8 Litre 2 Cups",
    price: "৳98,50",
    img: "/product5.png",
  },
  {
    id: 12,
    title: "JBL Airdots WithNoise cancelletion -Black",
    price: "৳98,50",
    img: "/product6.png",
  },
];

const topSellingProducts = [
  {
    id: 13,
    title: "Apple Macbook- 16core 16GB RAM 1TB",
    price: " ৳1,86,400",
    img: "/product1.png",
  },
  {
    id: 14,
    title: "Motorolla Smartphone with 8GB RAM 128GB Storage",
    price: "৳1,449",
    img: "/product2.png",
  },
  {
    id: 15,
    title: "Sony Mirrorless camera with Multifuncktion Key",
    price: "৳65,600",
    img: "/product3.png",
  },
  {
    id: 16,
    title: "Mibro Waterproof Smartwatch 3” Display",
    price: "৳2,400",
    img: "/product4.png",
  },
  {
    id: 17,
    title: "phillips Rice Cooker 8 Litre 2 Cups",
    price: "৳98,50",
    img: "/product5.png",
  },
  {
    id: 18,
    title: "JBL Airdots WithNoise cancelletion -Black",
    price: "৳98,50",
    img: "/product6.png",
  },
  {
    id: 19,
    title: "Apple Macbook- 16core 16GB RAM 1TB",
    price: " ৳1,86,400",
    img: "/product1.png",
  },
  {
    id: 20,
    title: "Motorolla Smartphone with 8GB RAM 128GB Storage",
    price: "৳1,449",
    img: "/product2.png",
  },
  {
    id: 21,
    title: "Sony Mirrorless camera with Multifuncktion Key",
    price: "৳65,600",
    img: "/product3.png",
  },
  {
    id: 22,
    title: "Mibro Waterproof Smartwatch 3” Display",
    price: "৳2,400",
    img: "/product4.png",
  },
  {
    id: 23,
    title: "phillips Rice Cooker 8 Litre 2 Cups",
    price: "৳98,50",
    img: "/product5.png",
  },
  {
    id: 24,
    title: "JBL Airdots WithNoise cancelletion -Black",
    price: "৳98,50",
    img: "/product6.png",
  },
];

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
          <button className="bg-[#FBEAF1] px-5 py-3 border-b-4 border-b-[#DE146A]">
            Home Page
          </button>
          <button className="px-5 py-3">All Products</button>
        </div>

        <div>
          <div className="py-1 relative mx-auto text-gray-600">
            <input
              className="w-167 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none bg-[#F1F1F1]"
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
