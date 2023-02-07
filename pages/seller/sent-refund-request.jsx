import React from "react";
import Image from "next/image";
import PageName from "../../components/seller/pageName";
import { useRouter } from "next/router";

const SentRefundRequest = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <div className="border-1 rounded-lg bg-white shadow-sm border-[#DADADA]  mt-10  mr-6 w-[1160px]">
        <div className="border-b-2">
          <h2 className="mx-5 my-3 text-xl">
            <PageName
              name={
                router.query.name === undefined
                  ? "Applied Refund Request"
                  : router.query.name
              }
            />
          </h2>
        </div>
        <div className="px-6 py-5">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="w-100">
                  <table className="min-w-full border-1 border-gray-200">
                    <tbody className="">
                      <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          #
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          Date
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          Order
                          <br />
                          Id
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          Product
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          Reason
                          <br />
                          Select
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          Reason
                          <br />
                          Explain
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          Refund
                          <br />
                          Method
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          Account
                          <br />
                          Credentials
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          Amount
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          Status
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                          100
                        </td>
                        <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          08/08/2022
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                          100
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                          Mobile
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                          100
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                          100
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                          100
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                          100
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                          100
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">
                          100
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SentRefundRequest.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default SentRefundRequest;
