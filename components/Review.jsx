import { Progress } from "antd";

const Review = () => {
  const ratings = [
    {
      id: 1,
      rating: 5,
      total: 40,
      percent: "60%",
    },
    {
      id: 2,
      rating: 4,
      total: 15,
      percent: "10%",
    },
    {
      id: 3,
      rating: 3,
      total: 15,
      percent: "10%",
    },
    {
      id: 4,
      rating: 2,
      total: 15,
      percent: "15%",
    },
    {
      id: 5,
      rating: 5,
      total: 15,
      percent: "15%",
    },
  ];
  const reviews = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <>
      {/* //? Ratings */}
      <div className="flex flex-col gap-3 md:flex-row mt-16">
        <div className="flex-1">
          <div className="bg-[#E9E9E9] w-[110px] mb-10 font-medium py-2 text-center">
            Reviews
          </div>
          <div className="flex gap-12 mb-2">
            <div className="flex w-3">
              <img src="/star-icon.svg" />
              <img src="/star-icon.svg" />
              <img src="/star-icon.svg" />
              <img src="/star-icon.svg" />
            </div>
            <div className="text-sm">4.6 overall rating</div>
          </div>
          <span className="text-sm">
            88 out of 100 customers reommend this product
          </span>
        </div>
        <div className="flex-1 ">
          {ratings.map((r) => (
            <div className="flex items-center gap-2" key={r.id}>
              <span>{r.rating}</span>
              <img src="/star-icon.svg" />
              <Progress className="w-6/12" showInfo={false} />
              <span>{r.total}</span>
              <span>({r.percent})</span>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-12" />

      {/* //? Users Review */}
      <div className="">
        <div className="text-end lg:hidden ">
          <span className="text-base font-medium border border-[#161D25] p-1 md:p-2.5 rounded-md capitalize">
            View All
          </span>
        </div>

        <div className="hidden lg:flex flex-col gap-7">
          {reviews.map((r) => (
            <div className="flex flex-col gap-3" key={r.id}>
              <div className="flex gap-12 mb-2">
                <div className="flex w-3">
                  <img src="/star-icon.svg" />
                  <img src="/star-icon.svg" />
                  <img src="/star-icon.svg" />
                  <img src="/star-icon.svg" />
                </div>
                <div className="text-sm font-bold">Customer name</div>
              </div>
              <span className="text-sm text-[#9C9C9C]">Date : 12-12-22</span>
              <span className="font-normal text-base text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat m veniam, quis nostrud
                exe.
              </span>
              <div className="flex flex-row gap-3 h-[69px]">
                <img src="/bag.png" alt="" className="w-[69px]" />
                <img src="/bag.png" alt="" className="w-[69px]" />
                <img src="/bag.png" alt="" className="w-[69px]" />
                <img src="/bag.png" alt="" className="w-[69px]" />
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden">
          {reviews.slice(0, 1).map((r) => (
            <div className="flex flex-col gap-3" key={r.id}>
              <div className="flex gap-12 mb-2">
                <div className="flex w-3">
                  <img src="/star-icon.svg" />
                  <img src="/star-icon.svg" />
                  <img src="/star-icon.svg" />
                  <img src="/star-icon.svg" />
                </div>
                <div className="text-sm font-bold">Customer name</div>
              </div>
              <span className="text-sm text-[#9C9C9C]">Date : 12-12-22</span>
              <span className="font-normal text-base text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat m veniam, quis nostrud
                exe.
              </span>
              <div className="flex flex-row gap-3 h-[69px]">
                <img src="/bag.png" alt="" className="w-[69px]" />
                <img src="/bag.png" alt="" className="w-[69px]" />
                <img src="/bag.png" alt="" className="w-[69px]" />
                <img src="/bag.png" alt="" className="w-[69px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
