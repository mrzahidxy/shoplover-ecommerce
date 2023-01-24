import Product from "../../components/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Pagination, Select } from "antd";
import Slider from "react-slick";

import Filters from "../../components/Filters";

const category = () => {
  const categories = [
    { id: 1, name: "Mobile & Devices" },
    { id: 2, name: " Consumer electronics" },
    { id: 3, name: "Grocery & Food" },
    { id: 4, name: "IT Products" },
    { id: 5, name: "Men Lifestyle" },
    { id: 6, name: "Women Lifestyle" },
    { id: 7, name: "Health & Beauty" },
    { id: 8, name: "Home & Living" },
    { id: 9, name: "CATEGORIES" },
    { id: 10, name: "Kids & mom" },
    { id: 11, name: "Digital Goods" },
  ];

  const subcategories = [
    { id: 1, name: "Smartphone & Tab" },
    { id: 2, name: "Mobile Accessories" },
    { id: 3, name: "Feature Phones" },
    { id: 4, name: "Headsets & Tab" },
    { id: 5, name: "Smartwatches & Accessories" },
  ];

  const brands = [
    { id: 1, name: "Apple  (465)" },
    { id: 2, name: "Asus  (344)" },
    { id: 3, name: "Audio-Technica  (136)" },
    { id: 4, name: "Belkin  (121)" },
    { id: 5, name: "BlueStone  (258)" },
    { id: 6, name: "Brother  (119)" },
    { id: 7, name: "Canon  (205)" },
    { id: 8, name: "China OEM  (113)" },
    { id: 9, name: "Comet  (330)" },
  ];

  const products = [
    {
      id: 1,
      title: "Apple Macbook- 16core 16GB RAM 1TB",
      price: " ৳1,86,400",
      img: "/product1.png",
    },
    {
      id: 2,
      title: "Motorolla Smartphone with 8GB RAM 128GB Storage",
      price: "৳1,449",
      img: "/product2.png",
    },
    {
      id: 3,
      title: "Sony Mirrorless camera with Multifuncktion Key",
      price: "৳65,600",
      img: "/product3.png",
    },
    {
      id: 4,
      title: "Mibro Waterproof Smartwatch 3” Display",
      price: "৳2,400",
      img: "/product4.png",
    },
    {
      id: 5,
      title: "phillips Rice Cooker 8 Litre 2 Cups",
      price: "৳98,50",
      img: "/product5.png",
    },
    {
      id: 6,
      title: "JBL Airdots WithNoise cancelletion -Black",
      price: "৳98,50",
      img: "/product6.png",
    },
    {
      id: 7,
      title: "Apple Macbook- 16core 16GB RAM 1TB",
      price: " ৳1,86,400",
      img: "/product1.png",
    },
    {
      id: 8,
      title: "Motorolla Smartphone with 8GB RAM 128GB Storage",
      price: "৳1,449",
      img: "/product2.png",
    },
    {
      id: 9,
      title: "Sony Mirrorless camera with Multifuncktion Key",
      price: "৳65,600",
      img: "/product3.png",
    },
    {
      id: 10,
      title: "Mibro Waterproof Smartwatch 3” Display",
      price: "৳2,400",
      img: "/product4.png",
    },
    {
      id: 11,
      title: "phillips Rice Cooker 8 Litre 2 Cups",
      price: "৳98,50",
      img: "/product5.png",
    },
    {
      id: 12,
      title: "JBL Airdots WithNoise cancelletion -Black",
      price: "৳98,50",
      img: "/product6.png",
    },
    {
      id: 13,
      title: "Apple Macbook- 16core 16GB RAM 1TB",
      price: " ৳1,86,400",
      img: "/product1.png",
    },
    {
      id: 14,
      title: "Motorolla Smartphone with 8GB RAM 128GB Storage",
      price: "৳1,449",
      img: "/product2.png",
    },
    {
      id: 15,
      title: "Sony Mirrorless camera with Multifuncktion Key",
      price: "৳65,600",
      img: "/product3.png",
    },
    {
      id: 16,
      title: "Mibro Waterproof Smartwatch 3” Display",
      price: "৳2,400",
      img: "/product4.png",
    },
    {
      id: 17,
      title: "phillips Rice Cooker 8 Litre 2 Cups",
      price: "৳98,50",
      img: "/product5.png",
    },
    {
      id: 18,
      title: "JBL Airdots WithNoise cancelletion -Black",
      price: "৳98,50",
      img: "/product6.png",
    },
    {
      id: 19,
      title: "Apple Macbook- 16core 16GB RAM 1TB",
      price: " ৳1,86,400",
      img: "/product1.png",
    },
    {
      id: 20,
      title: "Motorolla Smartphone with 8GB RAM 128GB Storage",
      price: "৳1,449",
      img: "/product2.png",
    },
    {
      id: 21,
      title: "Sony Mirrorless camera with Multifuncktion Key",
      price: "৳65,600",
      img: "/product3.png",
    },
    {
      id: 22,
      title: "Mibro Waterproof Smartwatch 3” Display",
      price: "৳2,400",
      img: "/product4.png",
    },
    {
      id: 23,
      title: "Apple Macbook- 16core 16GB RAM 1TB",
      price: " ৳1,86,400",
      img: "/product1.png",
    },
    {
      id: 24,
      title: "Motorolla Smartphone with 8GB RAM 128GB Storage",
      price: "৳1,449",
      img: "/product2.png",
    },
    {
      id: 25,
      title: "Sony Mirrorless camera with Multifuncktion Key",
      price: "৳65,600",
      img: "/product3.png",
    },
    {
      id: 26,
      title: "Mibro Waterproof Smartwatch 3” Display",
      price: "৳2,400",
      img: "/product4.png",
    },
    {
      id: 27,
      title: "phillips Rice Cooker 8 Litre 2 Cups",
      price: "৳98,50",
      img: "/product5.png",
    },
    {
      id: 28,
      title: "JBL Airdots WithNoise cancelletion -Black",
      price: "৳98,50",
      img: "/product6.png",
    },
    {
      id: 29,
      title: "Apple Macbook- 16core 16GB RAM 1TB",
      price: " ৳1,86,400",
      img: "/product1.png",
    },
    {
      id: 30,
      title: "Motorolla Smartphone with 8GB RAM 128GB Storage",
      price: "৳1,449",
      img: "/product2.png",
    },
  ];

  const sizes = [
    { id: 1, name: "S" },
    { id: 2, name: "M" },
    { id: 3, name: "L" },
    { id: 4, name: "XL" },
    { id: 5, name: "XXL" },
    { id: 6, name: "XXXL" },
  ];

  const colors = [
    { id: 1, name: "#ABB2BE" },
    { id: 2, name: "#CEC4A5" },
    { id: 3, name: "#ABB2BE" },
    { id: 4, name: "#F8CACD" },
    { id: 5, name: "#904A00" },
    { id: 6, name: "#F8EBD6" },
  ];

  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipe: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 745,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 391,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container grid grid-cols-6 mt-[30px] lg:mt-11 mb-4">
      <div className="col-span-6 lg:hidden flex gap-2">
        Home <img src="/arrow-icon.svg" alt="" /> Mobile & Devices
      </div>

      {/* //? FILTERS */}
      <div className="hidden lg:block col-span-1">
        <Filters />
      </div>

      <div className="col-span-6 lg:col-span-5 space-y-8 lg:space-y-14">
        <div className="hidden lg:block">
          <img src="/main-category.png" alt="" />
        </div>

        {/* //? SUB CATEGORY */}

        <Slider {...settings}>
          {subcategories.map((sub) => (
            <div key={sub.id}>
              <div className="border border-secondary mr-14">
                <img src="/sub-catgory.png" alt="" className="w-full" />
                <div>
                  <div className="text-base font-medium text-center px-7 py-5">
                    {sub.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* //?PRODUCTS */}
        <div className="">
          <div className="flex justify-between">
            <h3 className="text-2xl font-medium">Mobile & Devices</h3>
            <span className="text-[15px] font-base">Showing 1–20 of 75 Product </span>
          </div>
          <hr className="mb-8"/>

          {/* //? Small Screen FILTERS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:hidden mb-6">
            <Select defaultValue={"Brand"}></Select>
            <Select defaultValue={"Price"}></Select>
            <Select defaultValue={"Color"}></Select>
            <Select defaultValue={"Size"}></Select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {products.map((p) => (
              <Product product={p} key={p.id} />
            ))}
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <Pagination defaultCurrent={1} responsive={true} total={1000} showSizeChanger={false} />
        </div>
      </div>
    </div>
  );
};

export default category;
