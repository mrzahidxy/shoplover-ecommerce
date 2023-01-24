import { useEffect } from "react";

const ProductDetails = () => {
  const colors = ["red-400", "blue-400", "green-400", "yellow-400"];
  const stars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const imgs = [
    { id: 1, link: "bag.png" },
    { id: 2, link: "bag.png" },
    { id: 3, link: "bag.png" },
    { id: 4, link: "bag.png" },
  ];



  return (
    <div className="grid grid-cols-1 lg:grid-cols-9 gap-10">
      {/* //?product image */}
      <div className="lg:col-span-4">
        <div className="flex gap-2 justify-center items-center">
          <div className="w-16 flex flex-col gap-2 items-center">
            <img src="/arrow-up.svg" />
            {imgs.map((i) => (
              <img
                className="border rounded-sm p-2"
                src={`/${i.link}`}
                key={Math.random()}
              />
            ))}
            <img src="/arrow-down.svg" />
          </div>
          <div className="w-[537px] flex justify-center border ">
            <img src="/bag.png" />
          </div>
        </div>
      </div>

      {/* //?product info */}
      <div className="lg:col-span-3">
        <div className="space-y-2">
          <span className="font-medium text-xl">
            The American Tourister Mickey 2 Piece Set includes 21" and 28"
            softside spinners
          </span>
          <hr />
          <div className="flex items-center gap-2 divide-x-2">
            <div className="font-normal text-base">
              Brand: <span className="text-primary font-medium">Quechua</span>
            </div>
            <div className="flex items-center gap-1 text-sm font-normal ">
              {stars.map((s) => (
                <img
                  className="w-4"
                  src="/star-icon-orange.svg"
                  key={Math.random()}
                />
              ))}
              <span className="text-lightblack font-normal text-sm">
                (10 Review)
              </span>
            </div>
          </div>
          <hr />
          <div>
            <span className="text-[25px] font-bold">৳3400 </span>{" "}
            <span className="text-[23px] text-lightblack font-normal">
              {" "}
              ৳4200{" "}
            </span>
            <span className="text-[15px] text-green-600">15% off</span>
          </div>
          <hr />
          <div className="flex flex-col gap-5 font-normal text-base">
            <span className="">Available Options:</span>
            <div className="flex gap-2 items-center">
              Colors:
              {/* {colors.map((c) => (
                <div className={`bg-${c} w-3 h-3`} key={c.id}></div>
              ))} */}
            </div>
            <div className="flex items-center gap-2">
              Quantity:
              <div className="flex border">
                <span className="border border-collapse px-5 py-1">-</span>
                <span className="border border-collapse px-4 py-1">1</span>
                <span className="border border-collapse px-4 py-1">+</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="space-x-2 py-4 font-medium text-lg ">
            <span className="bg-[#DADADA] px-9 py-3 rounded-md">
              Add to Cart
            </span>
            <span className="bg-black text-white px-9 py-3 rounded-md">
              Buy Now
            </span>
          </div>
          <hr />
          <div>
            <div className="font-normal text-sm">
              <span className="flex gap-9  text-lightblack">
                Payment: <img src="/pay-method.png" />
              </span>
            </div>
            <span className="flex gap-12 text-lightblack">
              Return Policey:
              <span>
                Vestibulum eu odio. Suspendisse potenti. Morbi mollis sapien.
                Praesent egestas tristique nibh. Nullam dictum View details
              </span>
            </span>
          </div>
          <hr />
          <div className="flex items-center gap-9">
            <span className="text-lightblack">Share:</span>
            <img src="/social-sites.png" alt="" />
          </div>
        </div>
      </div>

      {/* //?product delivery */}
      <div className="lg:col-span-2">
        <div>
          <div className="font-medium text-base bg-[#F6F6F6] border border-[#F6F6F6] py-3 px-9">
            Delivery:
          </div>
          <div className="flex flex-col gap-3 font-normal text-base border-x border-[#F6F6F6] py-4 px-9">
            <span className="">Home Delivery</span>
            <span className="flex gap-2 text-lightblack">
              <img src="/delivery-icon.svg" /> Inside Dhaka Metro: 1 to 5 days
            </span>
            <span className="flex gap-2 text-lightblack">
              <img src="/delivery-icon.svg" /> Outside Dhaka Metro: 3 to 7 days
            </span>
            <span className="flex gap-2">
              <img src="/money-icon.svg" /> Cash on Delivery Available
            </span>
          </div>
          <div className="py-4 px-9 border border-[#F6F6F6] flex gap-4.5">
            <span className="font-semibold">Sold By:</span>
            <div>
              <img src="/seller-logo.png" />
              <div>
                <span className="font-semibold">The Game Changer</span>
                <div className="mb-3 flex items-center gap-1 text-sm font-normal">
                  <img className="w-4" src="/star-icon.svg" />
                  <img className="w-4" src="/star-icon.svg" />
                  <img className="w-4" src="/star-icon.svg" />
                  <img className="w-4" src="/star-icon.svg" />
                </div>
                <span className="px-2 py-1 bg-[#de146a29] border border-primary text-primary rounded-md">
                  Visit Store
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
