import React from "react";
import PageName from "../../components/seller/pageName";
import { useRouter } from "next/router";

const ChangePassword = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <div className="border-1 rounded-lg bg-white shadow-sm border-[#DADADA]  mt-10  mr-6 w-268">
        <div className="border-b-2">
          <h2 className="mx-5 my-3 text-xl">
            <PageName
              name={
                router.query.name === undefined
                  ? "Change Password"
                  : router.query.name
              }
            />
          </h2>
        </div>
        <div className="px-6 py-5">
          <div className="flex flex-col lg:w-[473px] p-10">
            <span className="flex">
              <h1 className="text-slate-400">New Password</h1>
              <h1 className="ml-1 text-[#FFC800]">*</h1>
            </span>
            <input
              type={"password"}
              className="mt-1 pl-4 w-full h-12 border-1 border-slate-400 rounded-md"
              placeholder="*************"
            />

            <span className="flex mt-6">
              <h1 className="text-slate-400">Confirm Password</h1>
              <h1 className="ml-1 text-[#FFC800]">*</h1>
            </span>
            <input
              type={"password"}
              className="mt-1 pl-4 w-full h-12 border-1 border-slate-400 rounded-md"
              placeholder="*************"
            />

            <button className=" mt-8 pl-4 w-full h-12 border-1 bg-black text-white rounded-md">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

ChangePassword.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default ChangePassword;
