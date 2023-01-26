import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";
import Link from "next/link";

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
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: true,
  nextArrow: (
    <div>
      <img src="/next-icon.svg" alt="" />
    </div>
  ),
  prevArrow: (
    <div>
      <img src="/prev-icon.svg" alt="" />
    </div>
  ),
  responsive: [
    {
      breakpoint: 745,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 391,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: false,
      },
    },
  ],
};

const ProductSlider = () => {
  return (
    <Slider {...settings}>
      {products.map((p) => (
        <div
          href={`/products/${p.id}`}
          className="border border-color-[#E3E3E3] rounded-md"
          key={Math.random()}
        >
          <div className="h-[164px] md:h-[200px]  lg:h-[230px] bg-[#FAFAFA] flex items-center justify-center">
            <img src={p.img} />
          </div>
          <div className="flex flex-col gap-2 p-3">
            <span className="w-[69px] bg-[#FFEBE6] text-xs font-semibold text-[#B92500] flex justify-center ">
              Sale-12%
            </span>
            <span className="text-xs md:text-sm lg:text-base font-normal">
              {p.title}
            </span>
            <div className="flex ">
              <img src="/star-icon.svg" />
              <img src="/star-icon.svg" />
              <img src="/star-icon.svg" />
              <img src="/star-icon.svg" />
              <span className="text-[10px] font-[#7A869A]">(10)</span>
            </div>
            <div className="flex gap-1 items-baseline">
              <span className="text-sm md:text-lg lg:text-xl">{p.price}</span>{" "}
              <span className="text-xs font-[#7A869A] line-through">
                ৳1,86,400
              </span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
