const Review = ({ review }) => {
  return (
    <div className="flex flex-col gap-3" key={review.id}>
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
      <span className="font-normal text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat m veniam, quis nostrud exe.
      </span>
      <div className="flex flex-row gap-3 h-[69px]">
        <img src="/bag.png" alt="" className="w-[69px]" />
        <img src="/bag.png" alt="" className="w-[69px]" />
        <img src="/bag.png" alt="" className="w-[69px]" />
        <img src="/bag.png" alt="" className="w-[69px]" />
      </div>
    </div>
  );
};

export default Review;
