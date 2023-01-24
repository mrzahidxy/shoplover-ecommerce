import { Dropdown } from "antd";
import Link from "next/link";
import SubCategory from "./SubCategory";

const Navbar = () => {
  const nav = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Winter Sale", link: "wintersale" },
    { id: 3, name: "Flash Sale", link: "/flash_sale" },
    { id: 4, name: "Blogs", link: "/blogs" },
    { id: 5, name: "Order Track", link: "/cart" },
  ];

  const items = [
    {
      key: "1",
      label: (
        <button className="font-mdeium">
          <span> Women’s Lifestyle </span>
        </button>
      ),
      children: [
        {
          key: "1-1",
          label: (
            <span>
              <SubCategory />
            </span>
          ),
        },
      ],
    },

    {
      key: "2",
      label: (
        <button className="font-mdeium">
          <span> Men’s Lifestyle </span>
        </button>
      ),
      children: [
        {
          key: "2-1",
          label: (
            <span>
              <SubCategory />
            </span>
          ),
        },
      ],
    },

    {
      key: "3",
      label: "Consumer Electronics",
    },
    {
      key: "4",
      label: "Mobile & Device",
    },
    {
      key: "5",
      label: "Grocery & Food",
    },
    {
      key: "6",
      label: "Mother, Kids & Toys",
    },
    {
      key: "7",
      label: "IT Products",
    },
    {
      key: "8",
      label: "Health & Beautye",
    },
    {
      key: "9",
      label: "Home & Living",
    },
    {
      key: "10",
      label: "Digital Goods",
    },
    {
      key: "11",
      label: "Sports & Accessories",
    },
    {
      key: "12",
      label: "Digital Goods",
    },
  ];
  return (
    <div className="bg-[#1b1b1bf7] text-white h-11  hidden lg:block">
      <div className="h-full mx-24 flex justify-between items-center">
        <Dropdown
          arrow="false"
          menu={{ items, style: { margingBottom: "20px" } }}
          trigger={["click"]}
          placement="rightBottom"
        >
          <div className="font-base font-medium flex gap-2 ">
            <img src="/category-icon.svg" alt="" />

            <span>All Categories</span>
          </div>
        </Dropdown>
        <nav className="flex gap-7">
          {nav.map((n) => (
            <Link
              href={`${n.link}`}
              className="font-base font-normal"
              key={n.id}
            >
              {n.name}
            </Link>
          ))}
        </nav>
        <span className="font-base font-normal">
          Download the App & get 20% OFF
        </span>
      </div>
    </div>
  );
};

export default Navbar;
