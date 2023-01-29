import Link from "next/link";
import Product from "./Product";

const PopularProduct = ({ products }) => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between mb-6">
          <h3 className="font-bold text-2xl capitalize">
            Most Pupular Products
          </h3>
          <Link
            href="/products/popularproducts"
            className="text-base font-medium border border-[#161D25] p-1 md:p-2.5 rounded-md capitalize hover:bg-black hover:text-white"
          >
            view all
          </Link>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          <div className="col-span-1 relative ">
            <img src="/images/sale-30p.png" className="h-full " />

            <span className="absolute bottom-[20%] left-[30%] text-white z-10 border px-4 py-2 rounded-md hover:bg-white hover:text-black">
              View All
            </span>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-4  xl:col-span-5">
            <div className="hidden xl:grid xl:grid-cols-5 gap-2.5">
              {products.slice(0, 5).map((product) => (
                <Product product={product} key={Math.random()} />
              ))}
            </div>
            <div className="hidden lg:grid grid-cols-4 gap-2.5 xl:hidden">
              {products.slice(0, 4).map((product) => (
                <Product product={product} key={Math.random()} />
              ))}
            </div>
            <div className="hidden md:grid md:grid-cols-2 lg:hidden">
              {products.slice(0, 2).map((product) => (
                <Product product={product} key={Math.random()} />
              ))}
            </div>
            <div className="md:hidden">
              <div className="h-[164px] md:h-[200px]  lg:h-[230px] bg-[#FAFAFA] flex items-center justify-center">
                <img src="/bag.png" className="h-1/2" />
              </div>
              <div className="flex flex-col gap-2 p-3">
                <span className="w-[69px] bg-[#FFEBE6] text-xs font-semibold text-[#B92500] flex justify-center ">
                  Sale-12%
                </span>
                <span className="text-xs md:text-sm lg:text-base font-normal">
                  Bag
                </span>
                <div className="flex ">
                  <img src="/star-icon.svg" />
                  <img src="/star-icon.svg" />
                  <img src="/star-icon.svg" />
                  <img src="/star-icon.svg" />
                  <span className="text-[10px] font-[#7A869A]">(10)</span>
                </div>
                <div className="flex gap-1 items-baseline">
                  <span className="text-sm md:text-lg lg:text-xl">700</span>{" "}
                  <span className="text-xs font-[#7A869A] line-through">
                    ৳1,86,400
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularProduct;
