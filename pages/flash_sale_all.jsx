import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { flashSales } from "./demoData";

const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped",
};

// const INITIAL_COUNT = 11; // 11sec
const INITIAL_COUNT = 172811; // 2days 11sec

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

function FlashSaleAll() {
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
      {/* <div className="mt-5">
        <h3 className="text-2xl font-semibold">Flash deals</h3>
      </div> */}

      <div className="mt-4"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {flashSales.map((flashSale, index) => (
          <Link className="" key={index} href={`/flash_sale_detail`}>
            <div className="">
              {/* <img src="/flash_sale_banar.png" className="" /> */}
              <img src="/flashsale-sub.png" className="" />
            </div>
            <div className="flex justify-between mt-1">
              <div className="text-base font-semibold">{flashSale.name}</div>
              <div className="">
                <span className="bg-black text-white text-xs px-1 py-[2px] rounded-sm">
                  {twoDigits(daysToDisplay)}
                </span>
                <span className="text-[#FFC800]">:</span>
                <span className="bg-black text-white text-xs px-1 py-[2px] rounded-sm">
                  {twoDigits(hoursToDisplay)}
                </span>
                <span className="text-[#FFC800]">:</span>
                <span className="bg-black text-white text-xs px-1 py-[2px] rounded-sm">
                  {twoDigits(minutesToDisplay)}
                </span>
                <span className="text-[#FFC800]">:</span>
                <span className="bg-black text-white text-xs px-1 py-[2px] rounded-sm">
                  {twoDigits(secondsToDisplay)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FlashSaleAll;
