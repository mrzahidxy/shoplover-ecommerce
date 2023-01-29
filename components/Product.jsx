import Link from "next/link";

const Product = ({ product }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="border border-color-[#E3E3E3] rounded-md ml-5"
      key={Math.random()}
    >
      <div className="h-[164px] md:h-[200px]  lg:h-[230px] bg-[#FAFAFA] flex items-center justify-center">
        <img src={product.img} />
      </div>
      <div className="flex flex-col gap-2 p-3">
        <span className="w-[69px] bg-[#FFEBE6] text-xs font-semibold text-[#B92500] flex justify-center ">
          Sale-12%
        </span>
        <span className="text-xs md:text-sm lg:text-base font-normal">
          {product.title}
        </span>
        <div className="flex ">
          <img src="/star-icon.svg" />
          <img src="/star-icon.svg" />
          <img src="/star-icon.svg" />
          <img src="/star-icon.svg" />
          <span className="text-[10px] font-[#7A869A]">(10)</span>
        </div>
        <div className="flex gap-1 items-baseline">
          <span className="text-sm md:text-lg lg:text-xl">{product.price}</span>{" "}
          <span className="text-xs font-[#7A869A] line-through">৳1,86,400</span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
