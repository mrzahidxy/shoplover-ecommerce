import React from "react";
import Link from "next/link";

const flashSales = [
  { id: 1, name: "Books Collection" },
  { id: 2, name: "Books Collection" },
  { id: 3, name: "Books Collection" },
  { id: 4, name: "Books Collection" },
  { id: 5, name: "Books Collection" },
  { id: 6, name: "Books Collection" },
  { id: 7, name: "Books Collection" },
  { id: 8, name: "Books Collection" },
  { id: 9, name: "Books Collection" },
  { id: 10, name: "Books Collection" },
  { id: 11, name: "Books Collection" },
  { id: 12, name: "Books Collection" },
];

function FlashSaleAll() {
  return (
    <div className="container mb-5">
      {/* <div className="mt-5">
        <h3 className="text-2xl font-semibold">Flash deals</h3>
      </div> */}

      <div className="mt-4"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {flashSales.map((flashSale, index) => (
          <Link className="" key={index} href={`/flash_sale_detail`}>
            <div className="">
              {/* <img src="/flash_sale_banar.png" className="" /> */}
              <img src="/flashsale-sub.png" className="" />
            </div>
            <div className="flex justify-between mt-1">
              <div className="text-base font-semibold">{flashSale.name}</div>
              <div className="">
                <span className="bg-black text-white text-xs px-1 py-[2px] rounded-sm">
                  03
                </span>
                :
                <span className="bg-black text-white text-xs px-1 py-[2px] rounded-sm">
                  16
                </span>
                :
                <span className="bg-black text-white text-xs px-1 py-[2px] rounded-sm">
                  27
                </span>
                :
                <span className="bg-black text-white text-xs px-1 py-[2px] rounded-sm">
                  51
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FlashSaleAll;
