import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-black">
      <div className="py-5 mx-4 md:mx-10 lg:mx-[90px] text-white lg:grid lg:grid-cols-7">
        <div className="flex gap-5 lg:col-span-2">
          <Link href="/">
            <img src="/sl-logo.svg" alt="logo" className="w-40 md:w-auto" />
          </Link>
          <div className="flex gap-2 justify-center items-center">
            <img
              className="bg-[#ffffff21] w-6 rounded-full"
              src="/home-icon.svg"
            />

            <span className="text-xs md:text-base font-normal">
              Deliver to :
            </span>
            <span className="text-xs md:text-base font-bold">Chittagong</span>
          </div>
          <div className="hidden md:flex items-center gap-2 lg:hidden ">
            <img src="/flag-icon.svg" />
            <span>English</span>
          </div>
        </div>
        <div className=" col-span-3 flex">
          <input
            className="w-full h-11 rounded-l-sm pl-2 text-black focus:outline-none"
            placeholder="I want to buy..."
          />
          <div className="w-14  bg-primary flex items-center justify-center rounded-sm">
            <img src="/search-icon.svg" />
          </div>
        </div>
        <div className="hidden col-span-2 lg:flex lg:gap-20 lg:justify-end">
          <div className="flex items-center gap-2">
            <img src="/flag-icon.svg" />
            <span>English</span>
          </div>
          <Link href="/users" className="flex items-center gap-2">
            <img src="/user-icon.svg " />
            <span>Hi, Kajal</span>
          </Link>
          <Link href="/cart" className="flex items-center gap-2">
            <div className="bg-[#ffffff21] rounded-full p-2">
              <img src="/cart-icon.svg" />
            </div>
            <span>4 items</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
