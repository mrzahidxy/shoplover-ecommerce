import React, { useState, useEffect, useRef } from "react";
import Product from "../components/Product";
import { products } from "./demoData";

const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped",
};

// const INITIAL_COUNT = 11; // 11sec
const INITIAL_COUNT = 172811; // 2days 11sec

function FlashSaleDetail() {
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
    <>
      <div className="container mb-5">
        <div className="mt-5">
          <img src="/flash_sale_banar.png" />
          {/* <img src="/flashsale-main.png" /> */}
        </div>

        <div className="mt-4">
          <h3 className="text-center text-2xl">Empower your smartphones</h3>

          {status === STATUS.STARTED ? (
            <div className="text-center mb-4 text-xl">
              <span className="bg-black text-white px-2 py-1 rounded-sm">
                {twoDigits(daysToDisplay)}
              </span>
              <span className="text-[#FFC800] font-bold">:</span>
              <span className="bg-black text-white px-2 py-1 rounded-sm">
                {twoDigits(hoursToDisplay)}
              </span>
              <span className="text-[#FFC800] font-bold">:</span>
              <span className="bg-black text-white px-2 py-1 rounded-sm">
                {twoDigits(minutesToDisplay)}
              </span>
              <span className="text-[#FFC800] font-bold">:</span>
              <span className="bg-black text-white px-2 py-1 rounded-sm">
                {twoDigits(secondsToDisplay)}
              </span>
            </div>
          ) : (
            <div className="text-center mb-4 text-xl text-red-500">
              Time is expired
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
          {products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

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

export default FlashSaleDetail;
