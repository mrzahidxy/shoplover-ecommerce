const Copyright = () => {
  return (
    <div className="bg-black text-white rounded-bl-lg rounded-br-lg">
      <div className="container flex flex-col lg:flex-row justify-between items-center">
        <div className="text-xs md:text-[15px] font-base">
          © Copyright 2022 I All Rights Reserved by
          <span className="font-bold text-sm"> Shoplover.com</span>
        </div>
        <div className="py-3">
          <img src="/payment.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
