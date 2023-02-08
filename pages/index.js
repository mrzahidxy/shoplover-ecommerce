import Link from "next/link";
import PopularProduct from "../components/PopularProduct";
import Products from "../components/Products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { id: 1, name: "Mobile & Devices" },
  { id: 2, name: "Mobile & Devices" },
  { id: 3, name: "Mobile & Devices" },
  { id: 4, name: "Mobile & Devices" },
  { id: 5, name: "Mobile & Devices" },
  { id: 6, name: "Mobile & Devices" },
  { id: 7, name: "Mobile & Devices" },
  { id: 8, name: "Mobile & Devices" },
  { id: 9, name: "Mobile & Devices" },
  { id: 10, name: "Mobile & Devices" },
  { id: 11, name: "Mobile & Devices" },
  { id: 12, name: "Mobile & Devices" },
];

const products = [
  {
    id: 1,
    title: "Apple Macbook- 16core 16GB RAM 1TB",
    price: " ৳1,86,400",
    img: "/images/product1.png",
  },
  {
    id: 2,
    title: "Motorolla Smartphone with 8GB RAM 128GB Storage",
    price: "৳1,449",
    img: "/images/product2.png",
  },
  {
    id: 3,
    title: "Sony Mirrorless camera with Multifuncktion Key",
    price: "৳65,600",
    img: "/images/product3.png",
  },
  {
    id: 4,
    title: "Mibro Waterproof Smartwatch 3” Display",
    price: "৳2,400",
    img: "/images/product4.png",
  },
  {
    id: 5,
    title: "phillips Rice Cooker 8 Litre 2 Cups",
    price: "৳98,50",
    img: "/images/product5.png",
  },
  {
    id: 6,
    title: "JBL Airdots WithNoise cancelletion -Black",
    price: "৳98,50",
    img: "/images/product6.png",
  },
  {
    id: 7,
    title: "Apple Macbook- 16core 16GB RAM 1TB",
    price: " ৳1,86,400",
    img: "/images/product1.png",
  },
  {
    id: 8,
    title: "Motorolla Smartphone with 8GB RAM 128GB Storage",
    price: "৳1,449",
    img: "/images/product2.png",
  },
  {
    id: 9,
    title: "Sony Mirrorless camera with Multifuncktion Key",
    price: "৳65,600",
    img: "/images/product3.png",
  },
  {
    id: 10,
    title: "Mibro Waterproof Smartwatch 3” Display",
    price: "৳2,400",
    img: "/images/product4.png",
  },
  {
    id: 11,
    title: "phillips Rice Cooker 8 Litre 2 Cups",
    price: "৳98,50",
    img: "/images/product5.png",
  },
  {
    id: 12,
    title: "JBL Airdots WithNoise cancelletion -Black",
    price: "৳98,50",
    img: "/images/product6.png",
  },
  {
    id: 13,
    title: "Apple Macbook- 16core 16GB RAM 1TB",
    price: " ৳1,86,400",
    img: "/images/product1.png",
  },
  {
    id: 14,
    title: "Motorolla Smartphone with 8GB RAM 128GB Storage",
    price: "৳1,449",
    img: "/images/product2.png",
  },
  {
    id: 15,
    title: "Sony Mirrorless camera with Multifuncktion Key",
    price: "৳65,600",
    img: "/images/product3.png",
  },
  {
    id: 16,
    title: "Mibro Waterproof Smartwatch 3” Display",
    price: "৳2,400",
    img: "/images/product4.png",
  },
  {
    id: 17,
    title: "phillips Rice Cooker 8 Litre 2 Cups",
    price: "৳98,50",
    img: "/images/product5.png",
  },
  {
    id: 18,
    title: "JBL Airdots WithNoise cancelletion -Black",
    price: "৳98,50",
    img: "/images/product6.png",
  },
  {
    id: 19,
    title: "Apple Macbook- 16core 16GB RAM 1TB",
    price: " ৳1,86,400",
    img: "/images/product1.png",
  },
  {
    id: 20,
    title: "Motorolla Smartphone with 8GB RAM 128GB Storage",
    price: "৳1,449",
    img: "/images/product2.png",
  },
  {
    id: 21,
    title: "Sony Mirrorless camera with Multifuncktion Key",
    price: "৳65,600",
    img: "/images/product3.png",
  },
  {
    id: 22,
    title: "Mibro Waterproof Smartwatch 3” Display",
    price: "৳2,400",
    img: "/images/product4.png",
  },
  {
    id: 23,
    title: "phillips Rice Cooker 8 Litre 2 Cups",
    price: "৳98,50",
    img: "/images/product5.png",
  },
  {
    id: 24,
    title: "JBL Airdots WithNoise cancelletion -Black",
    price: "৳98,50",
    img: "/images/product6.png",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

export default function Home() {
  return (
    <div>
      <div className="container pt-5">
        <Slider {...settings}>
          <img src="/images/slider1.webp" className="w-full mb-4" />
          <img src="/images/slider2.webp" className="w-full mb-4" />
          <img src="/images/slider3.webp" className="w-full mb-4" />
        </Slider>
      </div>

      {/* <div className="container grid grid-cols-2 lg:grid-cols-3 justify-items-stretch mb-10">
        <img src="/flash-sale.png" />
        <img src="/discount.png" />
        <div className="hidden lg:block">
          <img src="/chorki.png" />
        </div>
      </div> */}

      <div className="container grid grid-cols-2 lg:grid-cols-3 justify-items-stretch mb-10 gap-4">
        <div>
          <img src="/images/webp1.webp" className="p-1 rounded-xl" />
        </div>
        <div>
          <img src="/images/webp2.webp" className="p-1 rounded-xl" />
        </div>
        <div className="hidden lg:block">
          <img src="/images/webp3.webp" className="p-1 rounded-xl" />
        </div>
      </div>

      <PopularProduct products={products} />

      <div className="container mt-10">
        <img src="/images/banner-1.png" className="w-full" />
      </div>

      <div className="container my-10">
        <h3 className="font-bold text-2xl capitalize pb-9">
          Pupular Categories
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {categories.map((c) => (
            <Link
              href="/categories/:id"
              className="flex flex-col justify-center items-center border boreder-secondary  hover:shadow-xl ease-in-out duration-300"
              key={Math.random()}
            >
              <div className="bg-secondary px-6 py-3 rounded-full my-5">
                <img src="/categories.png" className="" />
              </div>
              <span className="bg-secondary w-full flex justify-center text-base font-semibold py-2">
                {c.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="container mb-10 grid grid-cols-2 md:grid-cols-4 gap-2 justify-items-stretch">
        <img
          src="/images/men-exlusive-banner.png"
          className="col-span-2 h-full"
        />
        <img src="/images/vouge-banner.png" />
        <img src="/images/adidas-banner.png" />
      </div>

      <Products
        products={products.slice(0, 6)}
        title="new arrivals"
        link="products/newarrival"
      />

      <div className="container my-14 ">
        <img src="/images/banner-2.png" />
      </div>
      <Products products={products} title="only for you" link="/products" />

      <div className="text-base font-medium flex justify-center my-6">
        <Link
          href="/products"
          className="text-black border bg-primary/[.16] hover:bg-primary/[.50] border-black px-10 py-2 rounded-md"
        >
          Load More
        </Link>
      </div>
    </div>
  );
}
