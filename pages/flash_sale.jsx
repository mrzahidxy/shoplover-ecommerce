import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped",
};

// const INITIAL_COUNT = 11; // 11sec
const INITIAL_COUNT = 172811; // 2days 11sec

const flashSales = [
  { id: 1, name: "Books Collection" },
  { id: 2, name: "Books Collection" },
  { id: 3, name: "Books Collection" },
  { id: 4, name: "Books Collection" },
  { id: 5, name: "Books Collection" },
  { id: 6, name: "Books Collection" },
  { id: 7, name: "Books Collection" },
  { id: 8, name: "Books Collection" },
  { id: 9, name: "Books Collection" },
  { id: 10, name: "Books Collection" },
  { id: 11, name: "Books Collection" },
  { id: 12, name: "Books Collection" },
];

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const twoDigits = (num) => String(num).padStart(2, "0");

function Flash_sale() {
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [status, setStatus] = useState(STATUS.STARTED);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursRemaining = (minutesRemaining - minutesToDisplay) / 60;
  const hoursToDisplay = hoursRemaining % 24;
  const daysToDisplay = (hoursRemaining - hoursToDisplay) / 24;

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
  );
  return (
    <div className="container mb-5">
      <div className="mt-5">
        <img src="/flash_sale_banar.png" />
        {/* <img src="/flashsale-main.png" /> */}
      </div>

      <div className="mt-4"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {flashSales.map((flashSale, index) => (
          // <div className=" border boreder-secondary" key={index}>
          <Link className="" key={index} href={`/flash_sale_detail`}>
            <div className="">
              {/* <img src="/flash_sale_banar.png" className="" /> */}
              <img src="/flashsale-sub.png" className="" />
            </div>
            <div className="flex justify-between mt-1">
              <div className="text-base font-semibold">{flashSale.name}</div>
              {status === STATUS.STARTED ? (
                <div className="">
                  <span className="bg-black text-white text-xs px-1 py-[2px] rounded-sm">
                    {twoDigits(daysToDisplay)}
                  </span>
                  :
                  <span className="bg-black text-white text-xs px-1 py-[2px] rounded-sm">
                    {twoDigits(hoursToDisplay)}
                  </span>
                  :
                  <span className="bg-black text-white text-xs px-1 py-[2px] rounded-sm">
                    {twoDigits(minutesToDisplay)}
                  </span>
                  :
                  <span className="bg-black text-white text-xs px-1 py-[2px] rounded-sm">
                    {twoDigits(secondsToDisplay)}
                  </span>
                </div>
              ) : (
                <div className="text-center mb-4 text-red-500">
                  Time is expired
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Flash_sale;
