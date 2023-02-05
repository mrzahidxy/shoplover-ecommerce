import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import leftArrow from "../../public/seller/icons/left_arrow.svg";

import PageName from "../../components/seller/pageName";

import speaker from "../../public/seller/wishlist/product/speaker.svg";
import phone from "../../public/seller/wishlist/product/phone.svg";
import bag from "../../public/seller/wishlist/product/bag.svg";
import earbuds from "../../public/seller/wishlist/product/earbuds.svg";
import earbud2 from "../../public/seller/wishlist/product/earbud2.svg";

import dashboard from "./data/dashboard.json";

const PurchaseHistory = ({ Component, pageProps }) => {
  const router = useRouter();

  const [Orders, setOrders] = useState([
    {
      products: [
        {
          image: speaker,
          name: "JBL Party Box On-The-Go Portable Party And Wireless Mic",
          quantity: 1,
          price: 1400,
          color: "",
        },
        {
          image: phone,
          name: "Realme Narzo 50a Prime-4GB RAM/128GB ROM Mobile Smartphone",
          quantity: 2,
          price: 5000,
          color: "",
        },
        {
          image: bag,
          name: "Water Resistant Men Crossbody Sling Bag with USB Port",
          quantity: 1,
          price: 1400,
          color: "",
        },
      ],
      id: "XXZ1111",
      date: "13 Dec, 2022",
      grand_total: 7800,
      status: "Delivering",
    },

    {
      products: [
        {
          image: earbuds,
          title: "Realme Tws Wireless Earbuds",
          quantity: 1,
          price: 1400,
          color: "",
        },
        {
          image: earbud2,
          title: "Realme Dizo Go Pods Tws - Black",
          quantity: 2,
          price: 2000,
          color: "",
        },
      ],

      id: "XXZ111",
      date: "14 Dec, 2022",
      grand_total: 3400,
      status: "Delivered",
    },
  ]);

  const [background, setBackground] = useState("lightgreen");

  useEffect(() => {
    console.log(dashboard.Orders);
    if (dashboard.Orders != undefined) {
      setOrders(dashboard.Orders);
    }
  }, []);
  return (
    <>
      <div className="border-1 rounded-lg bg-white shadow-sm border-[#DADADA]  mt-10  mr-6 w-268">
        <div className="border-b-2">
          <h2 className="mx-5 my-3 text-xl">
            <PageName
              name={
                router.query.name === undefined
                  ? "Purchase History"
                  : router.query.name
              }
            />
          </h2>
        </div>
        <div className="px-6 py-5">
          <div className=" flex flex-col lg:flex-row lg:items-center mb-2 self-start">
            <div className=" my-4">
              <button className=" p-1 px-2 text-md font-medium rounded-md focus:bg-[#FFECA5] hover:bg-[#FFECA5]">
                All
              </button>
              <button className=" p-1 px-2 text-md font-medium rounded-md focus:bg-[#FFECA5] hover:bg-[#FFECA5]">
                Confirmed
              </button>
              <button className=" p-1 px-2 text-md font-medium rounded-md focus:bg-[#FFECA5] hover:bg-[#FFECA5]">
                Delivering
              </button>
              <button className=" p-1 px-2 text-md font-medium rounded-md focus:bg-[#FFECA5] hover:bg-[#FFECA5]">
                Delivered
              </button>
            </div>
          </div>

          {Orders.map((orders, index) => {
            let background = "";
            let text = "";

            if (orders.status === "Delivering") {
              background = "rgba(255, 130, 54, 0.12)";
              text = "rgb(255, 130, 54)";
            } else if (orders.status === "Delivered") {
              background = "rgba(67, 160, 71, 0.12)";
              text = "rgb(67, 160, 71)";
            }

            return (
              <>
                <div
                  key={index}
                  className="mb-5 hidden md:flex md:flex-col font-medium bg-listBar text-[#071529] max-h-[720px] overflow-auto shadow-md"
                >
                  <div className="grid grid-cols-2 h-12 items-center">
                    <div>
                      <h1 className="ml-10">Order ID :{orders.id}</h1>
                      <h1 className="ml-10 lg:hidden text-sm text-mygrey">
                        Ordered on {orders.date}
                      </h1>
                    </div>

                    <div className="grid grid-cols-4">
                      <h1 className="text-center invisible lg:visible">
                        Order Placed On
                      </h1>
                      <h1 className="text-center">Amount</h1>
                      <h1 className="">Status</h1>
                      <h1 className="text-center hidden lg:flex">Manage</h1>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 bg-white items-center">
                    <div className="flex flex-col">
                      {orders.products.map((products, index2) => (
                        <div className="flex flex-row my-6 w" key={index2}>
                          <Image
                            src={products.image}
                            alt=""
                            width={40}
                            height={10}
                            className="ml-10 h-16 w-16 mr-4 rounded-md border-1"
                          />
                          <div className="flex-col">
                            <h1 className=" font-light text-sm">
                              {products.name}
                            </h1>
                            <h1 className="text-sm font-light text-mygrey">
                              Qty: {products.quantity}
                            </h1>
                            <h1 className="text-sm">৳{products.price}</h1>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-4 text-sm font-light">
                      <h1 className=" text-center invisible lg:visible">
                        {orders.date}
                      </h1>
                      <h1 className=" text-center">৳{orders.grand_total}</h1>
                      <h1
                        className="w-20 text-center py-1 px-2 rounded-sm col-span-2 lg:col-span-1"
                        style={{ backgroundColor: background, color: text }}
                      >
                        {orders.status}
                      </h1>
                      <u className="text-center hidden lg:flex text-blue-400">
                        <button
                          className="text-blue-400"
                          onClick={() => {
                            router.push(`/seller/orderDetails/${orders._id}`);
                          }}
                        >
                          View Details
                        </button>
                      </u>
                    </div>
                  </div>
                </div>

                <div
                  key={index + 1}
                  className="mb-5 md:hidden flex flex-col w-88 font-medium bg-listBar text-[#071529] max-h-[720px] mt-4 overflow-auto shadow-md"
                >
                  <div className="grid grid-cols-2 h-16 items-center">
                    <div>
                      <h1 className="ml-5 text-sm">
                        Order ID :{orders.orderid}
                      </h1>
                      <h1 className="ml-5 text-[12px] lg:hidden text-sm text-mygrey">
                        Ordered on {orders.date}
                      </h1>
                    </div>
                    <h1
                      className=" w-24 h-6 py-3 ml-10 rounded-sm flex text-sm justify-center items-center "
                      style={{ backgroundColor: background, color: text }}
                    >
                      {orders.status}
                    </h1>
                  </div>

                  <div className="flex flex-col bg-white">
                    <div className="flex flex-col">
                      {orders.products.map((products, index2) => (
                        <div
                          className="flex flex-row my-4 h-14 px-4"
                          key={index2}
                        >
                          <Image
                            src={products.image}
                            alt=""
                            width={40}
                            height={10}
                            className="h-14 w-14 mr-4 rounded-full border-1"
                          />
                          <div className="flex-col">
                            <h1 className=" font-light text-sm h-4 overflow-hidden">
                              {products.title}
                            </h1>
                            <h1 className="text-sm font-light text-mygrey">
                              Qty: {products.quantity}
                            </h1>
                            <h1 className="text-sm">৳{products.price}</h1>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="ml-6 mb-5 flex">
                      <h1 className="font-light">Amount: </h1>
                      <h1 className="">৳{orders.amount}</h1>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

PurchaseHistory.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default PurchaseHistory;

/*
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import leftArrow from "../../public/seller/icons/left_arrow.svg";

import PageName from "../../components/users/pageName";

import speaker from "../../public/seller/wishlist/product/speaker.svg";
import phone from "../../public/seller/wishlist/product/phone.svg";
import bag from "../../public/seller/wishlist/product/bag.svg";
import earbuds from "../../public/seller/wishlist/product/earbuds.svg";
import earbud2 from "../../public/seller/wishlist/product/earbud2.svg";

import dashboard from "./data/dashboard.json";

const purchaseHistory = () => {
  const router = useRouter();

  const [Orders, setOrders] = useState([
    {
      products: [
        {
          image: speaker,
          name: "JBL Party Box On-The-Go Portable Party And Wireless Mic",
          quantity: 1,
          price: 1400,
          color: "",
        },
        {
          image: phone,
          name: "Realme Narzo 50a Prime-4GB RAM/128GB ROM Mobile Smartphone",
          quantity: 2,
          price: 5000,
          color: "",
        },
        {
          image: bag,
          name: "Water Resistant Men Crossbody Sling Bag with USB Port",
          quantity: 1,
          price: 1400,
          color: "",
        },
      ],
      id: "XXZ1111",
      date: "13 Dec, 2022",
      grand_total: 7800,
      status: "Delivering",
    },

    {
      products: [
        {
          image: earbuds,
          title: "Realme Tws Wireless Earbuds",
          quantity: 1,
          price: 1400,
          color: "",
        },
        {
          image: earbud2,
          title: "Realme Dizo Go Pods Tws - Black",
          quantity: 2,
          price: 2000,
          color: "",
        },
      ],

      id: "XXZ111",
      date: "14 Dec, 2022",
      grand_total: 3400,
      status: "Delivered",
    },
  ]);

  const [background, setBackground] = useState("lightgreen");

  useEffect(() => {
    console.log(dashboard.Orders);
    if (dashboard.Orders != undefined) {
      setOrders(dashboard.Orders);
    }
  }, []);

  return (
    <div className=" sm:mt-10 p-5 md:p-8 flex flex-col items-center lg:items-start bg-white">
      <div className="lg:border-b-2 w-full">
        <PageName name={router.query.name} />
      </div>

      <div className=" flex flex-col lg:flex-row lg:items-center mb-2 self-start">
        <div className=" my-4">
          <button className=" p-1 px-2 text-md font-medium rounded-md focus:bg-[#FFECA5] hover:bg-[#FFECA5]">
            All
          </button>
          <button className=" p-1 px-2 text-md font-medium rounded-md focus:bg-[#FFECA5] hover:bg-[#FFECA5]">
            Confirmed
          </button>
          <button className=" p-1 px-2 text-md font-medium rounded-md focus:bg-[#FFECA5] hover:bg-[#FFECA5]">
            Delivering
          </button>
          <button className=" p-1 px-2 text-md font-medium rounded-md focus:bg-[#FFECA5] hover:bg-[#FFECA5]">
            Delivered
          </button>
        </div>
      </div>

      {Orders.map((orders, index) => {
        let background = "";
        let text = "";

        if (orders.status === "Delivering") {
          background = "rgba(255, 130, 54, 0.12)";
          text = "rgb(255, 130, 54)";
        } else if (orders.status === "Delivered") {
          background = "rgba(67, 160, 71, 0.12)";
          text = "rgb(67, 160, 71)";
        }

        return (
          
          <>
            <div
              key={index}
              className="mb-5 hidden md:flex md:flex-col xl:w-268 font-medium bg-listBar text-[#071529] max-h-[720px] overflow-auto shadow-md"
            >
              <div className="grid grid-cols-2 h-12 items-center">
                <div>
                  <h1 className="ml-10">Order ID :{orders.id}</h1>
                  <h1 className="ml-10 lg:hidden text-sm text-mygrey">
                    Ordered on {orders.date}
                  </h1>
                </div>

                <div className="grid grid-cols-4">
                  <h1 className="text-center invisible lg:visible">
                    Order Placed On
                  </h1>
                  <h1 className="text-center">Amount</h1>
                  <h1 className="">Status</h1>
                  <h1 className="text-center hidden lg:flex">Manage</h1>
                </div>
              </div>

              <div className="grid grid-cols-2 bg-white items-center">
                <div className="flex flex-col">
                  {orders.products.map((products, index2) => (
                    <div className="flex flex-row my-6 w" key={index2}>
                      <Image
                        src={products.image}
                        alt=""
                        width={40}
                        height={10}
                        className="ml-10 h-16 w-16 mr-4 rounded-md border-1"
                      />
                      <div className="flex-col">
                        <h1 className=" font-light text-sm">{products.name}</h1>
                        <h1 className="text-sm font-light text-mygrey">
                          Qty: {products.quantity}
                        </h1>
                        <h1 className="text-sm">৳{products.price}</h1>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-4 text-sm font-light">
                  <h1 className=" text-center invisible lg:visible">
                    {orders.date}
                  </h1>
                  <h1 className=" text-center">৳{orders.grand_total}</h1>
                  <h1
                    className="w-20 text-center py-1 px-2 rounded-sm col-span-2 lg:col-span-1"
                    style={{ backgroundColor: background, color: text }}
                  >
                    {orders.status}
                  </h1>
                  <u className="text-center hidden lg:flex text-blue-400">
                    <button
                      className="text-blue-400"
                      onClick={() => {
                        router.push(`/seller/orderDetails/${orders._id}`);
                      }}
                    >
                      View Details
                    </button>
                  </u>
                </div>
              </div>
            </div>

            
            <div
              key={index + 1}
              className="mb-5 md:hidden flex flex-col w-88 font-medium bg-listBar text-[#071529] max-h-[720px] mt-4 overflow-auto shadow-md"
            >
              <div className="grid grid-cols-2 h-16 items-center">
                <div>
                  <h1 className="ml-5 text-sm">Order ID :{orders.orderid}</h1>
                  <h1 className="ml-5 text-[12px] lg:hidden text-sm text-mygrey">
                    Ordered on {orders.date}
                  </h1>
                </div>
                <h1
                  className=" w-24 h-6 py-3 ml-10 rounded-sm flex text-sm justify-center items-center "
                  style={{ backgroundColor: background, color: text }}
                >
                  {orders.status}
                </h1>
              </div>

              <div className="flex flex-col bg-white">
                <div className="flex flex-col">
                  {orders.products.map((products, index2) => (
                    <div className="flex flex-row my-4 h-14 px-4" key={index2}>
                      <Image
                        src={products.image}
                        alt=""
                        width={40}
                        height={10}
                        className="h-14 w-14 mr-4 rounded-full border-1"
                      />
                      <div className="flex-col">
                        <h1 className=" font-light text-sm h-4 overflow-hidden">
                          {products.title}
                        </h1>
                        <h1 className="text-sm font-light text-mygrey">
                          Qty: {products.quantity}
                        </h1>
                        <h1 className="text-sm">৳{products.price}</h1>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="ml-6 mb-5 flex">
                  <h1 className="font-light">Amount: </h1>
                  <h1 className="">৳{orders.amount}</h1>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default purchaseHistory;

purchaseHistory.getLayout = function PageLayout(Page) {
  return <>{Page}</>;
};
*/
