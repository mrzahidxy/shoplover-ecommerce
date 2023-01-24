import Breadcrumb from "../../components/Breadcrumb";

const shipping = () => {
  return (
    <div>
      <Breadcrumb />

      <div className="container flex flex-col items-center gap-6 my-24 rounded-md">
        <div className="max-w-[389px] space-y-4">
          <div className=" bg-[#F6F6F6] grid grid-cols-6 gap-3 p-4">
            <div className="col-span-5 flex flex-col gap-1">
              <span className="w-[65px] mb-2 py-1 font-medium text-xs bg-black text-white text-center">
                Home
              </span>
              <span className="font-medium text-[15px]">
                Mahmudul Hasan Shojol
              </span>
              <span className="font-base text-sm">
                Corporate Office: Road no-1A, House No-32, Baridhara J Block,
                Dhaka. 01631345678
              </span>
            </div>
            <div>
              <span className="text-primary text-sm">EDIT</span>
              <div className="mt-11">
                <img src="/green-ticks.svg" alt="" />
              </div>
            </div>
          </div>
          <div className=" bg-[#F6F6F6] grid grid-cols-6 gap-3 p-4">
            <div className="col-span-5 flex flex-col gap-1">
              <span className="w-[65px] mb-2 py-1 font-medium text-xs bg-black text-white text-center">
                Office
              </span>
              <span className="font-medium text-[15px]">
                Mahmudul Hasan Shojol
              </span>
              <span className="font-base text-sm">
                Corporate Office: Road no-1A, House No-32, Baridhara J Block,
                Dhaka. 01631345678
              </span>
            </div>
            <div>
              <span className="text-primary text-sm">EDIT</span>
              <div className="mt-11">
                <img src="/green-ticks.svg" alt="" />
              </div>
            </div>
          </div>

          <div className=" w-min-[360px] bg-[#F6F6F6] text-primary text-center py-10">
            + Create New
          </div>
        </div>
      </div>
    </div>
  );
};

export default shipping;
