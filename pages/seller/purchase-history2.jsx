import React from "react";
import PageName from "../../components/seller/pageName";
import { useRouter } from "next/router";
import speaker from "../../public/seller/wishlist/product/speaker.svg";
import phone from "../../public/seller/wishlist/product/phone.svg";
import bag from "../../public/seller/wishlist/product/bag.svg";
import earbuds from "../../public/seller/wishlist/product/earbuds.svg";
import earbud2 from "../../public/seller/wishlist/product/earbud2.svg";

const PurchaseHistory = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <div className="border-1 rounded-lg bg-white shadow-sm border-[#DADADA]  mt-10  mr-6 w-268">
        <div className="border-b-2">
          <h2 className="mx-5 my-3 text-xl">Purchase History</h2>
        </div>
        <div className="flex gap-5 px-6 py-5">
          <button className="bg-[#FFECA5] text-lg font-semibold px-4 py-2 rounded">
            All
          </button>
          <button className="text-lg font-semibold px-4 py-2 rounded">
            Confirmed
          </button>
          <button className="text-lg font-semibold px-4 py-2 rounded">
            Delivering
          </button>
          <button className="text-lg font-semibold px-4 py-2 rounded">
            Delivered
          </button>
        </div>

        <div class="flex flex-col px-4">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-center border-2 border-red">
                  <thead>
                    <tr className="bg-[#F8F5F5]">
                      <th scope="col" class=" text-gray-900 px-6 py-4">
                        Order ID : #SLW230122170000
                      </th>
                      <th scope="col" class="text-gray-900 px-6 py-4">
                        Order Placed On
                      </th>
                      <th scope="col" class="text-gray-900 px-6 py-4">
                        Amount
                      </th>
                      <th scope="col" class="text-gray-900 px-6 py-4">
                        Status
                      </th>
                      <th scope="col" class="text-gray-900 px-6 py-4">
                        Manage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                        1
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">Mark</td>
                      <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Otto
                      </td>
                      <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @mdo
                      </td>
                    </tr>
                    <tr class="bg-white">
                      <td class="px-6 py-4">2</td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4">
                        Jacob
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Thornton
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @fat
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="flex">
        <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div class="py-3 px-6 border-b border-gray-300">Featured</div>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              Special title treatment
            </h5>
            <p class="text-gray-700 text-base mb-4">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Button
            </button>
          </div>
          <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
            2 days ago
          </div>
        </div>
      </div> */}
    </>
  );
};

PurchaseHistory.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default PurchaseHistory;
