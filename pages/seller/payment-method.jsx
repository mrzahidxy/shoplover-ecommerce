import React from "react";
import Image from "next/image";
import PageName from "../../components/seller/pageName";
import { useRouter } from "next/router";
import bkashLogo from "../../public/seller/images/bkash_logo.png";

const PaymentMethod = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <div className="border-1 rounded-lg bg-white shadow-sm border-[#DADADA]  mt-10  mr-6 w-268">
        <div className="border-b-2">
          <h2 className="mx-5 my-3 text-xl">
            <PageName
              name={
                router.query.name === undefined
                  ? "Payment method"
                  : router.query.name
              }
            />
          </h2>
        </div>
        <div className="px-6 py-5">
          <div className="flex gap-2">
            <Image
              src={bkashLogo}
              alt=""
              className="ml-4"
              width={80}
              height={50}
            />
            <h3 className="font-extrabold">
              Payment Not Added <br />
              Yet
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

PaymentMethod.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default PaymentMethod;
