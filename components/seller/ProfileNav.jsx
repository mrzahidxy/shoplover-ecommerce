import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import user from "../../public/seller/icons/panel/user.svg";

import icon1 from "../../public/seller/icons/panel/1.svg";
import icon2 from "../../public/seller/icons/panel/2.svg";
import icon3 from "../../public/seller/icons/panel/3.svg";
import icon4 from "../../public/seller/icons/panel/4.svg";
import icon5 from "../../public/seller/icons/panel/5.svg";
import icon6 from "../../public/seller/icons/panel/6.svg";
import icon7 from "../../public/seller/icons/panel/7.svg";
import icon8 from "../../public/seller/icons/panel/8.svg";
import icon9 from "../../public/seller/icons/panel/9.svg";
import icon10 from "../../public/seller/icons/panel/10.svg";
import icon11 from "../../public/seller/icons/panel/11.svg";

import verifiedIcon from "../../public/seller/icons/verified.svg";
import downloadIcon from "../../public/seller/icons/download.svg";
import productReviewIcon from "../../public/seller/icons/product-review.svg";
import compareIcon from "../../public/seller/icons/compare.svg";
import productsIcon from "../../public/seller/icons/products.svg";
import productBulkUploadIcon from "../../public/seller/icons/product-bulk-upload.svg";
import digitalProductsIcon from "../../public/seller/icons/digital-products.svg";
import uploadFilesIcon from "../../public/seller/icons/upload-files.svg";
import couponIcon from "../../public/seller/icons/coupon.svg";
import ordersIcon from "../../public/seller/icons/orders.svg";

import sellerProductReviewIcon from "../../public/seller/icons/seller-product-review.svg";
import shopSettingIcon from "../../public/seller/icons/shop-setting.svg";
import paymentHistoryIcon from "../../public/seller/icons/payment-history.svg";
import moneyWithdrewIcon from "../../public/seller/icons/money-withdrew.svg";
import commissionHistoryIcon from "../../public/seller/icons/commission-history.svg";
import myWalletIcon from "../../public/seller/icons/my-wallet.svg";

const ProfileNav = () => {
  const router = useRouter();

  const [Profile, setProfile] = useState({
    image: user,
    name: "Mahmudul Hasan",
    phone: "01631345678",
    mail: "shojol@shoplover.com",
    verifiedIcon: verifiedIcon,
  });

  const [Navbar, setNavbar] = useState([
    {
      image: icon1,
      name: "Dashboard",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: icon2,
      name: "Track Orders",
      color: "none",
      link: "/seller/track-orders",
      pop: "",
    },
    {
      image: icon3,
      name: "Purchase History",
      color: "none",
      link: "/seller/purchase-history",
      pop: "New",
    },
    {
      image: icon4,
      name: "My Wishlist",
      color: "none",
      link: "/seller/wishlist",
      pop: "",
    },
    {
      image: icon5,
      name: "Payment Method",
      color: "none",
      link: "/seller/payment-method",
      pop: "",
    },
    {
      image: icon7,
      name: "Manage Shipping Address",
      color: "none",
      link: "/seller/shipping-address",
      pop: "",
    },
    {
      image: icon6,
      name: "Refund Request",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: icon7,
      name: "Manage Shipping Address",
      color: "none",
      link: "/seller/shippingAddress",
      pop: "",
    },
    {
      image: icon8,
      name: "Change Password",
      color: "none",
      link: "/seller/changePassword",
      pop: "",
    },
    {
      image: downloadIcon,
      name: "Download",
      color: "none",
      link: "/seller/changePassword",
      pop: "",
    },
    {
      image: productReviewIcon,
      name: "Product Review",
      color: "none",
      link: "/seller/changeLanguage",
      pop: "",
    },
    {
      image: compareIcon,
      name: "Compare",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: productsIcon,
      name: "Products",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: productBulkUploadIcon,
      name: "Product Bulk Upload",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: digitalProductsIcon,
      name: "Digital Product",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: uploadFilesIcon,
      name: "Upload Files",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: couponIcon,
      name: "Coupon",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: ordersIcon,
      name: "Orders",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: icon7,
      name: "Review Refund Request",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: sellerProductReviewIcon,
      name: "Seller Product Review",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: shopSettingIcon,
      name: "Shop Setting",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: paymentHistoryIcon,
      name: "Payment History",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: moneyWithdrewIcon,
      name: "Money Withdraw",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: commissionHistoryIcon,
      name: "Commission History",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: myWalletIcon,
      name: "My Wallet",
      color: "none",
      link: "/seller",
      pop: "",
    },
    {
      image: icon10,
      name: "Support Ticket",
      color: "none",
      link: "/seller/supportTicket",
      pop: "02",
    },
  ]);
  const [NavBtn, setNavBtn] = useState("none");

  return (
    // <div className="hidden lg:block  border-1 rounded-sm bg-white shadow-sm border-[#DADADA] max-h-[1795px] mt-10 min-w-[350px] xl:w-100">
    <div className="border-1 rounded-sm bg-white shadow-sm border-[#DADADA]  mt-10 w-[280px] mr-6">
      <div className="ml-5 pt-4">
        <div className="flex">
          <h1 className="text-xl">My Profile | </h1>
          <button className="text-blue-500 ml-2 pb-2">Edit</button>
        </div>

        <div className="flex mt-4 mb-6 h-24">
          <div>
            <Image
              src={Profile.image}
              alt=""
              className="w-24 h-24 rounded-full"
            />
          </div>
          {/* <Image src={Profile.image} className="object-fill" /> */}
          <div className="ml-2">
            <h1 className="font-semibold text-sm mb-1">{Profile.name}</h1>
            <h1 className="text-sm">{Profile.phone}</h1>
            <h1 className="text-sm">{Profile.mail}</h1>
            <div className="flex bg-[#F6F6F6] p-2">
              <Image src={Profile.verifiedIcon} alt="" className="ml-1" />
              <p className="text-[#1EBC13] text-sm mb-0 ml-2">
                Verified Seller
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="transition-all ease-linear duration-400 my-2">
        {Navbar.map((items, index) => {
          return (
            <button
              key={index}
              className=" w-full h-12 px-5 flex flex-row items-center justify-between
                                border-b-2 border-slate-100 focus:bg-[#FFC800]
                                hover:bg-[#FFC800] transition-all ease-linear duration-400"
              style={{ backgroundColor: NavBtn }}
              onClick={() => {
                router.push({
                  pathname: items.link,
                  query: { name: items.name },
                });
              }}
            >
              <span className="flex flex-row">
                <Image src={items.image} className="w-4 h-4" alt="" />
                <span className="ml-3 font-medium">{items.name}</span>
              </span>

              {items.pop != "" ? (
                <span className="bg-[#004CFF]/20 rounded-md text-sm py-1 px-3">
                  {items.pop}
                </span>
              ) : (
                <></>
              )}
            </button>
          );
        })}
      </div>

      {/* <div className="flex flex-row bg-black border-2 rounded-md text-white h-12 w-full justify-center items-center ">
        <h1>Sell On Shoplover</h1>
      </div> */}

      <div>
        <h1 className="text-center text-2xl mt-4">Sold Amount</h1>
        <p className="text-center">Your sold amount (current month)</p>
        <center>
          <button className="text-center text-2xl text-white bg-[#DE146A] px-4 py-2 rounded">
            ৳37,978
          </button>
        </center>
        <div className="flex justify-evenly mt-5">
          <p className="text-lg">Total Sold</p>
          <p className="text-lg font-bold">৳37,978</p>
        </div>
        <div className="flex justify-evenly">
          <p className="text-lg">Last Month Sold</p>
          <p className="text-lg font-bold">৳0</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
