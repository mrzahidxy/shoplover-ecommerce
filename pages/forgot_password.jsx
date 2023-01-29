import React from "react";

const ForgotPassword = () => {
  return (
    <div className="container my-10 lg:px-40">
      <div className="p-6 py-16 bg-[#F6F6F6] rounded-xl shadow-lg">
        <p className="mx-auto text-2xl text-center mb-8">Forgot password?</p>
        <form action="#">
          <div className="mb-4 w-100 mx-auto">
            <p className="text-[15px]">
              Enter your email or phone no to recover your password.
            </p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email or Phone"
            />
          </div>

          <div className="mb-2 w-100 mx-auto">
            <button className="rounded bg-black text-white w-full py-2 px-3">
              Continue
            </button>
          </div>

          <div className="mb-4 w-100 mx-auto">
            <p className="underline underline-offset-1">
              <a href="#">Back to Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
