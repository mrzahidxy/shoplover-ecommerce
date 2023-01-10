const Header = () => {
  return (
    <div className="bg-black h-[90px]">
      <div className="h-full mx-24 text-white flex items-center gap-9">
        <div className="w-4/12 gap-9 flex">
          <img src="/sl-logo.svg" alt="logo" />
          <div className="flex items-center space-x-1">
            <img
              className="bg-[#ffffff21] rounded-full p-1 h-7 "
              src="/home-icon.svg"
            />
            <span className="text-base font-normal">Deliver to :</span>
            <span className="text-base font-bold">Chittagong</span>
          </div>
        </div>
        <div className="w-5/12  flex justify-center items-center  h-11">
          <input
            className="w-full h-full rounded-l-sm pl-2 text-black focus:outline-none"
            placeholder="I want to buy..."
          />
          <div className="w-14 h-full bg-primary flex items-center justify-center rounded-sm">
            <img src="/search-icon.svg" />
          </div>
        </div>
        <div className="w-3/12 flex  items-center justify-around">
          <div className="flex items-center gap-2 h-8">
            <img src="/flag-icon.svg" />
            <span>English</span>
          </div>
          <div className="flex items-center gap-2 h-8">
            <img src="/user-icon.svg " />
            <span>Hi, Kajal</span>
          </div>
          <div className="flex items-center gap-2 h-8">
            <div className="bg-[#ffffff21] rounded-full p-2">
              <img src="/cart-icon.svg" />
            </div>
            <span>4 items</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
