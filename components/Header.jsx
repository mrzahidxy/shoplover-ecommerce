import { Dropdown, Drawer } from "antd";
import Link from "next/link";
import Select from "react-select";
import { useState } from "react";

const items = [
  {
    label: (
      <a href="/user" className="flex  items-center gap-2">
        <img src="/icons/my-acc.svg" alt="" srcset="" /> My Account
      </a>
    ),
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a href="/user" className="flex items-center gap-2">
        <img src="/icons/track-order.svg" alt="" srcset="" /> Track Orders
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a href="/user" className="flex  items-center gap-2">
        <img src="/icons/my-wishlist.svg" alt="" srcset="" /> My Wishlist
      </a>
    ),
    key: "2",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a href="/user" className="flex  items-center gap-2">
        <img src="/icons/log-out.svg" alt="" srcset="" /> Log Out
      </a>
    ),
    key: "3",
  },
];

const Header = () => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const customStyles = {
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    control: (base, state) => ({
      ...base,
      border: "none",
      background: "#000",
      fontColor: "#fff",
      // match with the menu
      // borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // // Overwrittes the different states of border
      // borderColor: state.isFocused ? "yellow" : "green",
      // // Removes weird border around container
      // boxShadow: state.isFocused ? null : null,
      // "&:hover": {
      //   // Overwrittes the different states of border
      //   borderColor: state.isFocused ? "red" : "blue"
      // }

      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        border: "none",
      },
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      // borderRadius: 0,
      // // kill the gap
      // marginTop: 0

      color: "#000",
    }),
    // menuList: base => ({
    //   ...base,
    //   // kill the white space on first and last option
    //   padding: 0
    // })
  };

  const languages = [
    {
      value: "BD",
      label: (
        <div className="flex flex-row gap-2 ">
          <img src="/icons/bd.svg" alt="" srcset="" />
          Bangla{" "}
        </div>
      ),
    },
    {
      value: "EN",
      label: (
        <div className="flex flex-row gap-2 ">
          <img src="/icons/us.svg" alt="" srcset="" />
          English{" "}
        </div>
      ),
    },
  ];

  return (
    <div className="bg-black">
      <div className="py-5 mx-4 md:mx-10 l:mx-0 xl:mx-[90px] text-white lg:grid lg:grid-cols-6 xl:grid-cols-7">
        <div className="flex gap-5 lg:col-span-2">
          <Link href="/">
            <img
              src="/images/sl-logo.svg"
              alt="logo"
              className="w-40 md:w-auto"
            />
          </Link>
          <div className="flex gap-1 xl:gap-2 justify-center items-center">
            <img
              className="bg-[#ffffff21] w-6 rounded-full"
              src="/icons/home.svg"
            />

            <span className="text-xs md:text-sm xl:text-base font-normal">
              Deliver to :
            </span>
            <span className="text-xs md:text-sm  xl:text-base font-bold">
              Chittagong
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 lg:hidden ">
            <img src="/flag-icon.svg" />
            <span>English</span>
          </div>
        </div>
        <div className="col-span-2 xl:col-span-3 flex">
          <input
            className="w-full h-11 rounded-l-sm pl-2 text-black focus:outline-none"
            placeholder="I want to buy..."
          />
          <Link
            href="/searchresult"
            className="w-14  bg-primary flex items-center justify-center rounded-sm"
          >
            <img src="/search-icon.svg" />
          </Link>
        </div>
        <div className="hidden col-span-2 lg:flex lg:gap-10 xl:gap-20 lg:justify-end">
          <div className="flex items-center gap-2">
            {/* <img src="/flag-icon.svg" />
            <span>English</span> */}

            <Select
              styles={customStyles}
              defaultValue={languages[0]}
              options={languages}
            />
          </div>
          {/* <Link href="/users" className="flex items-center gap-2">
            <img src="/user-icon.svg " />
            <span>Hi, Kajal</span>
          </Link> */}
          <div className="flex items-center gap-2">
            <img src="/user-icon.svg " />
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <span>Hi, User</span>
              </a>
            </Dropdown>
          </div>
          {/* <Link href="/cart" className="flex items-center gap-2">
            <div className="bg-[#ffffff21] rounded-full p-2">
              <img src="/cart-icon.svg" />
            </div>
            <span>4 items</span>
          </Link> */}

          <div
            className="flex items-center gap-2"
            type="primary"
            onClick={showDrawer}
          >
            <div className="bg-[#ffffff21] rounded-full p-2">
              <img src="/icons/cart.svg" />
            </div>
            <span>2 items</span>
          </div>

          <Drawer
            closable={false}
            placement="right"
            onClose={onClose}
            open={open}
            title={
              <div className="flex justify-between">
                <div className="space-x-2">
                  <span>Items</span>
                  <span className="bg-primary rounded-full px-[5px] text-white">
                    3
                  </span>
                </div>
                <div className="space-x-2">
                  <span>Close</span>
                  <button
                    className="bg-white px-2 rounded-full"
                    onClick={onClose}
                  >
                    X
                  </button>
                </div>
              </div>
            }
            headerStyle={{ background: "#F1F1F1", color: "#979797" }}
          >
            <div className="space-y-2 ">
              {[{ id: 1 }, { id: 2 }, { id: 3 }].map((p) => (
                <>
                  <div className="grid grid-cols-10 gap-2">
                    <div className="flex flex-col col-span-1">
                      <button
                        className="border p-1  focus:bg-secondary focus:text-white"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </button>
                      <button className="border p-1 text-primary">
                        {count}
                      </button>
                      <button
                        className="border p-1 focus:bg-secondary focus:text-white"
                        onClick={() => count > 0 && setCount(count - 1)}
                      >
                        -
                      </button>
                    </div>
                    <img
                      src="/images/cart-img.png"
                      alt=""
                      className="col-span-2"
                    />
                    <div className="space-y-2 col-span-4">
                      <span className="font-medium text-sm">
                        Water Resistant High Quality Backpack...
                      </span>
                      <div className="space-x-2">
                        <span className="text-secondary text-sm">
                          Color: Black
                        </span>
                        <span className="text-secondary text-sm">Size: S</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center col-span-2">
                      <span className="text-primary text-base">৳350</span>
                      <span className="text-secondary text-sm line-through">
                        ৳450
                      </span>
                    </div>
                    <div className="flex justify-center items-center text-base col-span-1">
                      <img
                        src="/icons/delete.svg"
                        alt=""
                        className="h-5 hover:h-4"
                      />
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Header;
