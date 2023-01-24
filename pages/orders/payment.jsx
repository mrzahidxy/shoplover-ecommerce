import Breadcrumb from "../../components/Breadcrumb";

const orders = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    quantity: 2,
    price: "৳8,800",
    img: "/bag.png",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    quantity: 2,
    price: "৳8,800",
    img: "/bag.png",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    quantity: 2,
    price: "৳8,800",
    img: "/bag.png",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    quantity: 2,
    price: "৳8,800",
    img: "/bag.png",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet",
    quantity: 2,
    price: "৳8,800",
    img: "/bag.png",
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet",
    quantity: 2,
    price: "৳8,800",
    img: "/bag.png",
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet",
    quantity: 2,
    price: "৳8,800",
    img: "/bag.png",
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit amet",
    quantity: 2,
    price: "৳8,800",
    img: "/bag.png",
  },
  {
    id: 9,
    title: "Lorem ipsum dolor sit amet",
    quantity: 2,
    price: "৳8,800",
    img: "/bag.png",
  },
  {
    id: 10,
    title: "Lorem ipsum dolor sit amet",
    quantity: 2,
    price: "৳8,800",
    img: "/bag.png",
  },
];

const payments = [
  { id: 1, title: "Credit/Debit Card" },
  { id: 1, title: "bkash Account" },
  { id: 1, title: "Rocket" },
  { id: 1, title: "Upay" },
  { id: 1, title: "Nagad" },
  { id: 1, title: "Cash on Delivery" },
];

const payment = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="container flex flex-col lg:flex-row justify-center gap-9 my-8">
        <div className="">
          <div className="text-lg font-medium mb-5 ml-5">Order Summary</div>
          <div className="bg-[#E8EAEF] rounded-md px-6 py-3 divide-y-2 space-y-2">
            {orders.map((o) => (
              <div className="flex justify-between items-center" key={o.id}>
                <img src={o.img} alt="" className="h-10 mr-4" />
                <span className="mr-11">{o.title}</span>
                <span className="md:mr-32">x {o.quantity}</span>
                <span className="font-medium">{o.price}</span>
              </div>
            ))}

            <div className="flex justify-between text-lg font-medium py-4">
              <span className="">Subtotal</span> <span>৳5680</span>{" "}
            </div>
            <div className="flex justify-between text-lg font-medium py-4">
              <span> Shipping Cost</span> <span>৳80</span>{" "}
            </div>
            <div className="flex justify-between text-lg font-semibold py-4">
              <span>Total</span> <span>৳5680</span>{" "}
            </div>
          </div>
        </div>

        <div className="max-w-[349px]">
          <div className="text-lg font-medium mb-5">Select Payment Option</div>
          <div className="bg-[#E8EAEF] rounded-md divide-y-2">
            {payments.map((p) => (
              <button
                className=" focus:bg-[#FFEBEB] w-full  flex flex-row items-center justify-between gap-20 py-6 px-4"
                key={p.id}
              >
                <div className="flex flex-row items-center">
                  <input type="checkbox" name="" class="w-4 h-4 rounded-full" />
                  <img src="/credit-card-icon.svg" alt="" className="ml-2" />
                  <span className="ml-4">{p.title}</span>
                </div>
                <img src="/arrow.svg" alt="" />
              </button>
            ))}
          </div>
          <div className="bg-black text-white py-3 rounded-md text-center mt-8">
            Place Order
          </div>
        </div>
      </div>
    </div>
  );
};

export default payment;
