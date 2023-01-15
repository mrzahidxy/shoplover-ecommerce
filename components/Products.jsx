const Products = ({ products, title }) => {
  return (
    <div className="container">
      <div className="flex justify-between mb-6">
        <h3 className="font-bold text-base md:text-2xl capitalize flex items-center">
          {title}
        </h3>
        <span className="text-base font-medium border border-[#161D25] p-1 md:p-2.5 rounded-md capitalize">
          view all
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
        {products.map((product) => (
          <div
            className="border border-color-[#E3E3E3] rounded-md"
            key={product.id}
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
                <span className="text-xs font-[#7A869A]">(10)</span>
              </div>
              <div className="flex gap-1 items-baseline">
                <span className="text-sm md:text-lg lg:text-xl">{product.price}</span>{" "}
                <span className="text-xs font-[#7A869A] line-through">
                  ৳1,86,400
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
