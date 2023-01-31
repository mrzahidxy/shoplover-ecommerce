import Link from "next/link";

const orders = [
  {
    id: 1,
    name: "Water Resistant High Quality BackpackWith USB Port - 1006",
    color: "Black",
    size: "S",
    price: "350",
  },
  {
    id: 1,
    name: "Water Resistant High Quality BackpackWith USB Port - 1006",
    color: "Black",
    size: "S",
    price: "350",
  },
];

const ordercart = () => {
  return (
    <div className="container my-8">
      <div className="flex gap-2">
        <span>Home</span> <img src="/arrow-icon.svg" alt="" /> <span>Cart</span>
      </div>

      <div className="flex justify-between items-center mt-3 lg:hidden">
        <div className="space-x-1">
          <input type="checkbox" name="" id="" /> <span>Select All</span>
        </div>
        <span className="text-primary">Delete</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 py-5 gap-10">
        <div className="col-span-3">
          <h3 className="text-2xl hidden lg:block">Shopping Cart</h3>
          <hr />

          {orders.map((o) => (
            <div key={Math.random()}>
              <div className="hidden lg:block">
                <div className="grid grid-cols-8 my-8 space-x-42">
                  <div className="w-16 h-16 p-1 border border-secondary">
                    <img src="/bag.png" alt="" />
                  </div>
                  <div className="col-span-4 space-y-2">
                    <span className="text-base">{o.name}</span>
                    <div className="space-x-4 text-[#979797]">
                      <span>Color: {o.color}</span> <span>Size: {o.size}</span>
                    </div>
                  </div>
                  <div className="col-span-2 flex justify-center items-center">
                    <span className="border border-color-[#EBEBEB] p-2 text-lg font-medium">
                      -
                    </span>
                    <span className="border border-color-[#EBEBEB] p-2 text-lg font-medium text-primary">
                      1
                    </span>
                    <span className="border border-color-[#EBEBEB] p-2 text-lg font-medium">
                      +
                    </span>
                  </div>
                  <div className="flex flex-col text-xl items-center">
                    <span className="text-primary">{o.price}</span>
                    <span className="text-[#979797] line-through">
                      {o.price}
                    </span>
                    <div className="mt-9">
                      <img src="/delete.svg" alt="" />
                    </div>
                  </div>
                </div>
                <hr className="mt-10" />
              </div>

              {/* small & medium screen */}

              <div>
                <div className="mt-4 flex flex-row gap-2 lg:hidden">
                  <input type="checkbox" name="" id="" className="" />
                  <div className="grid grid-cols-3 md:grid-cols-4">
                    <div className="w-16 h-16 p-1 border">
                      <img src="/bag.png" alt="" />
                    </div>
                    <div className="col-span-2">
                      <span className="text-base">{o.name}</span>
                      <div className="hidden md:block space-x-4 text-[#979797]">
                        <span>Color: {o.color}</span>{" "}
                        <span>Size: {o.size}</span>
                      </div>
                      <div className="space-x-2">
                        <span className="text-primary">{o.price}</span>
                        <span className="text-[#979797] line-through">
                          {o.price}
                        </span>
                      </div>
                    </div>

                    <div className="hidden md:block lg:hidden">
                      <span className="border border-color-[#EBEBEB] p-2 text-lg font-medium">
                        -
                      </span>
                      <span className="border border-color-[#EBEBEB] p-2 text-lg font-medium text-primary">
                        1
                      </span>
                      <span className="border border-color-[#EBEBEB] p-2 text-lg font-medium">
                        +
                      </span>
                    </div>
                  </div>

                  {/* small screen actions */}
                  <div className="flex justify-end items-center mb-6 md:hidden">
                    <span className="border border-color-[#EBEBEB] p-2 text-lg font-medium">
                      -
                    </span>
                    <span className="border border-color-[#EBEBEB] p-2 text-lg font-medium text-primary">
                      1
                    </span>
                    <span className="border border-color-[#EBEBEB] p-2 text-lg font-medium">
                      +
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          ))}
        </div>

        {/* large screen total */}
        <div className="hidden lg:flex flex-col gap-2">
          <span className="mb-2 text-2xl font-medium">Cart Totals</span>
          <div className="bg-[#F8F8F8] flex justify-between p-4 text-lg">
            <span>Subtotal</span> <span className="text-primary">৳700</span>
          </div>
          <Link href="/cart/deliveryinfo" className="bg-black text-white p-4 text-xl mt-4">
            Proceed to Checkout
          </Link>
        </div>
      </div>

      {/* small screen total */}
      <div className=" w-full flex justify-between items-center border border-secondary rounded-md p-2 lg:hidden">
        <div>
          {" "}
          <span className="text-[#AEAEB2]">Total:</span>{" "}
          <span className="font-bold">700</span>
        </div>
        <div className="bg-black text-white rounded-md px-6 py-2">Checkout</div>
      </div>

      <div className="hidden lg:block w-3/12 text-lg font-medium text-center border border-[#DFDFDF] p-4">
        Continue Shopping
      </div>
    </div>
  );
};

export default ordercart;
