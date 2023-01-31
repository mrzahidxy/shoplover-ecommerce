import Link from "next/link";
import Product from "./Product";

const Products = ({ products, title, link }) => {
  return (
    <div className="container">
      <div className="flex justify-between mb-6">
        <h3 className="font-bold text-base md:text-2xl capitalize flex items-center">
          {title}
        </h3>
        <Link
          href={link}
          className="text-base font-medium border border-[#161D25] p-1 md:p-2.5 rounded-md capitalize hover:bg-black hover:text-white ease-in-out duration-300"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-2 md:hidden gap-2.5">
        {products.slice(0, 2).map((product) => (
          <Product product={product} key={Math.random()} />
        ))}
      </div>
      <div className="hidden md:grid md:grid-cols-3 lg:hidden gap-2.5">
        {products.slice(0, 3).map((product) => (
          <Product product={product} key={Math.random()} />
        ))}
      </div>
      {/* <div className=" md:hidden lg:grid lg:grid-cols-5 xl:hidden gap-2.5">
        {products.slice(0, 5).map((product) => (
          <Product product={product} key={Math.random()} />
        ))}
      </div> */}
      <div className="hidden lg:grid lg:grid-cols-6 gap-2.5">
        {products.map((product) => (
          <Product product={product} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default Products;
