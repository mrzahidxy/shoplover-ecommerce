import { Tabs, Progress } from "antd";
import ProductDetails from "../../components/ProductDetails";
import ProductSlider from "../../components/ProductSlider";
import Review from "../../components/Review";

const productView = () => {
  const tabInfo = [
    {
      key: 1,
      label: "Product Details",
      children:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos sunt odio molestiae, sapiente provident aliquid dolorem asperiores quisquam tempora quas officia labore, assumenda autem nulla esse a fugiat, necessitatibus harum delectus reiciendis. Repellendus omnis obcaecati harum, odio aspernatur ullam et incidunt autem neque. Eius veritatis enim dicta autem beatae omnis mollitia sit debitis, animi sint dolores eveniet doloremque vel nobis in. Sunt, voluptatibus? Dolorum molestias repudiandae laborum aut earum cum accusantium quo explicabo corrupti maxime, eligendi obcaecati exercitationem fuga. Pariatur debitis non, omnis a excepturi iusto nulla commodi aperiam? Aut sapiente vel dolores corrupti fugit culpa veritatis. Nostrum, pariatur atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos sunt odio molestiae, sapiente provident aliquid dolorem asperiores quisquam tempora quas officia labore, assumenda autem nulla esse a fugiat, necessitatibus harum delectus reiciendis. Repellendus omnis obcaecati harum, odio aspernatur ullam et incidunt autem neque. Eius veritatis enim dicta autem beatae omnis mollitia sit debitis, animi sint dolores eveniet doloremque vel nobis in. Sunt, voluptatibus? Dolorum molestias repudiandae laborum aut earum cum accusantium quo explicabo corrupti maxime, eligendi obcaecati exercitationem fuga. Pariatur debitis non, omnis a excepturi iusto nulla commodi aperiam? Aut sapiente vel dolores corrupti fugit culpa veritatis. Nostrum, pariatur atque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos sunt odio molestiae, sapiente provident aliquid dolorem asperiores quisquam tempora quas officia labore, assumenda autem nulla esse a fugiat, necessitatibus harum delectus reiciendis. Repellendus omnis obcaecati harum, odio aspernatur ullam et incidunt autem neque. Eius veritatis enim dicta autem beatae omnis mollitia sit debitis, animi sint dolores eveniet doloremque vel nobis in. Sunt, voluptatibus? Dolorum molestias repudiandae laborum aut earum cum accusantium quo explicabo corrupti maxime, eligendi obcaecati exercitationem fuga. Pariatur debitis non, omnis a excepturi iusto nulla commodi aperiam? Aut sapiente vel dolores corrupti fugit culpa veritatis. Nostrum, pariatur atque.",
    },
    {
      key: 2,
      label: "Specification",
      children:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, fuga. Maiores iusto vero blanditiis possimus quia reprehenderit ratione facere enim?",
    },
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
  ];

  return (
    <div className="lg:bg-[#F6F6F6] md:m-6 lg:m-0">
      <div className="hidden container lg:flex items-center gap-2 text-sm font-base pt-11 mb-4">
        Home <img src="/arrow-icon.svg" />
        Bags & Travel <img src="/arrow-icon.svg" /> Travel Bag{" "}
        <img src="/arrow-icon.svg" /> The American Tourister Mickey 2 Piece Set
        includes 21" and 28" softside spinners
      </div>

      {/* //?product summary */}
      <div className="container bg-white lg:border boreder-secondary rounded-md lg:px-16 pt-10 pb-6">
        <ProductDetails />
      </div>

      {/* //?product details */}
      <div className="container bg-white lg:border boreder-secondary rounded-md my-3 py-10">
        <div className="grid lg:grid-cols-4">
          {/* //?top selling products */}
          <div className="hidden lg:block space-y-7 border border-[#E9E9E] px-7 py-5 rounded-sm">
            <h3 className="text-lg font-bold">Top Selling Products</h3>

            <div className="space-y-12">
              {products.map((p) => (
                <div className="flex gap-3" key={p.id}>
                  <div className="w-[83px]  border border-[#E9E9E9] rounded-sm flex justify-center items-center p-2">
                    <img src={p.img} alt="" />
                  </div>

                  <div className="flex flex-col gap-[13px]">
                    <span className="font-normal text-sm">{p.title}</span>
                    <div className="flex items-center gap-1 text-sm font-normal ">
                      <img className="w-[10] h-[10]" src="/star-icon.svg" />
                      <img className="w-[10] h-[10]" src="/star-icon.svg" />
                      <img className="w-[10] h-[10]" src="/star-icon.svg" />
                      <img className="w-[10] h-[10]" src="/star-icon.svg" />
                      <span className="text-lightblack">(10)</span>
                    </div>
                    <div className="space-x-1">
                      <span className="medium">{p.price}</span>
                      <span className="text-[8px] font-lightblack">৳1800</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 lg:mx-24 rounded-md">
            <Tabs defaultActiveKey="1" type="card" items={tabInfo} />

            {/* //?product review */}
            <Review />
          </div>
        </div>

        {/* //?related products */}
        <div className="pt-11 px-5">
          <h3 className="text-lg font-bold mb-4">Related Products</h3>
          <ProductSlider />
        </div>
      </div>
    </div>
  );
};

export default productView;
