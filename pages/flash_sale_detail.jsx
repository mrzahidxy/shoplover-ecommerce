import React from "react";
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
    title: "phillips Rice Cooker 8 Litre 2 Cups",
    price: "৳98,50",
    img: "/product5.png",
  },
  {
    id: 24,
    title: "JBL Airdots WithNoise cancelletion -Black",
    price: "৳98,50",
    img: "/product6.png",
  },
];

function FlashSaleDetail() {
  return (
    <div className="container mb-5">
      <div className="mt-5">
        <img src="/flash_sale_banar.png" />
        {/* <img src="/flashsale-main.png" /> */}
      </div>

      <div className="mt-4">
        <h3 className="text-center text-2xl">Empower your smartphones</h3>
        <div className="text-center mb-4 text-xl">
          <span className="bg-black text-white px-2 py-1 rounded-sm">03</span>:
          <span className="bg-black text-white px-2 py-1 rounded-sm">16</span>:
          <span className="bg-black text-white px-2 py-1 rounded-sm">27</span>:
          <span className="bg-black text-white px-2 py-1 rounded-sm">51</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
        {products.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default FlashSaleDetail;
