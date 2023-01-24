import {Dropdown } from "antd";
import Link from "next/link";

const Navbar = () => {
  const nav = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Winter Sale", link: "wintersale" },
    { id: 3, name: "Flash Sale", link: "/flashsale" },
    { id: 4, name: "Blogs", link: "/blogs" },
    { id: 5, name: "Order Track", link: "/cart" },
  ];

  const cardItem = () => {
    return (
      <div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </div>
    );
  };

  const items = [
    {
      key: "1",
      label: "Menu",
      children: [
        {
          key: "3",
          label:( <span>
            <cardItem/>
          </span>),
        },
      ],
    },

    {
      key: "3",
      label: "Menu",
    },

    {
      key: "1",
      label: "Menu",
    },
    {
      key: "2",
      label: "Menu",
    },
    {
      label: "Menu",
    },

    {
      key: "1",
      label: "Menu",
    },
    {
      key: "2",
      label: "Menu",
    },
    {
      key: "3",
      label: "Menu",
    },
  ];
  return (
    <div className="bg-[#1b1b1bf7] text-white h-11  hidden lg:block">
      <div className="h-full mx-24 flex justify-between items-center">
        <div className="font-base font-medium flex gap-2 ">
          <img src="/category-icon.svg" alt="" />
          <Dropdown
            menu={{
              items,
            }}
            placement="rightBottom"
          >
            <span>All Categories</span>
          </Dropdown>
        </div>
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
