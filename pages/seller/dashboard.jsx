import React, { useEffect, useState } from "react";
import CartDetails from "../../components/seller/Dashboard/CartDetails";
import RecentOrders from "../../components/seller/Dashboard/RecentOrders";

import dashboard from "./data/dashboard.json";
import Image from "next/image";
import shopIcon from "../../public/seller/icons/shop.svg";
import paymentIcon from "../../public/seller/icons/payment.svg";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col flex-wrap  bg-white mt-10 py-3 lg:p-3">
        <div className="">
          <CartDetails data={dashboard} />
          {/* <RecentOrders data={dashboard} /> */}

          <div className="mt-7 flex gap-4">
            <div className="w-[523px]">
              <p className="mb-0 text-lg font-semibold">Order</p>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full border-1 border-gray-200">
                        <tbody className="">
                          <tr className="bg-gray-100 border-b">
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                              Total Orders
                            </td>

                            <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              11
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                              Pending orders:
                            </td>

                            <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              8
                            </td>
                          </tr>
                          <tr className="bg-gray-100 border-b">
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                              Cancelled orders:
                            </td>

                            <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              0
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                              Successful orders:
                            </td>

                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              1
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[253px]">
              <p className="mb-0 text-lg font-semibold">Shop</p>
              <div className="flexCenter w-[250px] h-[200px]  border-1 border-gray mt-3">
                <div className="flexCenter">
                  <Image src={shopIcon} className="" alt="" />
                </div>
                <p className="mt-2">
                  Manage and Organize <br />
                  <span className="ml-8">your Shop</span>
                </p>
                <button className="bg-black text-white px-10 py-2 mt-3 text-lg rounded-md">
                  Go to setting
                </button>
              </div>
            </div>
            <div className="w-[253px]">
              <p className="mb-0 text-lg font-semibold">Payment</p>
              <div className="flexCenter w-[250px] h-[200px]  border-1 border-gray mt-3">
                <div className="flexCenter">
                  <Image src={paymentIcon} className="" alt="" />
                </div>
                <p className="mt-4 ml-10">
                  Configure your <br />
                  <span className="">payment method</span>
                </p>
                <button className="bg-black text-white px-10 py-2 mt-3 text-lg rounded-md">
                  Configure Now
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex">
              <p className="mb-0 text-lg font-semibold">Products | </p>
              <button className="bg-[#0049D6] text-white px-2 py-2 ml-2 rounded-md">
                Add New Product
              </button>
            </div>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full border-1 border-gray-200">
                      <tbody className="">
                        <tr className="bg-gray-100 border-b">
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                            Category
                          </td>

                          <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Products
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                            Xiaomi Mobile
                          </td>

                          <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            8
                          </td>
                        </tr>

                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                            Xiaomi Mobile
                          </td>

                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            1
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                            Xiaomi Mobile
                          </td>

                          <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            8
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                            Xiaomi Mobile
                          </td>

                          <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            8
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                            Xiaomi Mobile
                          </td>

                          <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            8
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
