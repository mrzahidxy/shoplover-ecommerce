import { Pagination, Select } from "antd";
import Filters from "../components/Filters";
import Product from "../components/Product";

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

const brands = [
  { id: 1, name: "Apple  (465)" },
  { id: 2, label: "Asus  (344)" },
  { id: 3, label: "Audio-Technica  (136)" },
  { id: 4, label: "Belkin  (121)" },
  { id: 5, label: "BlueStone  (258)" },
  { id: 6, label: "Brother  (119)" },
  { id: 7, label: "Canon  (205)" },
  { id: 8, label: "China OEM  (113)" },
  { id: 9, label: "Comet  (330)" },
];

const sizes = [
  { id: 1, label: "S" },
  { id: 2, label: "M" },
  { id: 3, label: "L" },
  { id: 4, label: "XL" },
  { id: 5, label: "XXL" },
  { id: 6, label: "XXXL" },
];

const colors = [
  { id: 1, label: "#ABB2BE" },
  { id: 2, label: "#CEC4A5" },
  { id: 3, label: "#ABB2BE" },
  { id: 4, label: "#F8CACD" },
  { id: 5, label: "#904A00" },
  { id: 6, label: "#F8EBD6" },
];

const searchresult = () => {
  return (
    <div className="container grid grid-cols-6 mt-[30px] lg:mt-11 mb-4">
      {/* //? FILTERS */}
      <div className="hidden lg:block col-span-1">
        <Filters />
      </div>

      <div className="col-span-6 lg:col-span-5 space-y-8 lg:space-y-14">
        {/* //?PRODUCTS */}
        <div className="">
          <div className="flex justify-between">
            <span className="text-[15px] font-base">
              620 item found for “Mobile”
            </span>
            <div className="hidden lg:block border border-secondary px-2 mb-1 rounded-md">
              <span>Sort by: </span>
              <Select
                defaultValue={"Newest"}
                bordered={false}
                options={[
                  {
                    value: "newest",
                    label: "Newest",
                  },
                  {
                    value: "latest",
                    label: "Latest",
                  },
                ]}
              ></Select>
            </div>
          </div>
          <hr className="mb-8" />

          {/* //? Small Screen FILTERS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:hidden mb-6">
            <Select defaultValue={"Brand"} options={brands}></Select>
            <Select defaultValue={"Price"}></Select>
            <Select defaultValue={"Color"} options={colors}></Select>
            <Select defaultValue={"Size"} options={sizes}></Select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {products.map((p) => (
              <Product product={p} key={p.id} />
            ))}
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <Pagination
            defaultCurrent={1}
            responsive={true}
            total={1000}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
};

export default searchresult;
