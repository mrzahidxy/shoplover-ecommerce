import React from "react";

function register() {
  return (
    <div className="container py-10 px-52">
      <div className="p-6 bg-[#F6F6F6] rounded-xl shadow-lg">
        <p className="mx-auto text-2xl text-center mb-8">
          Create Shoplover Account
        </p>
        <form action="#">
          <div className="mb-4 w-96 mx-auto">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="mb-4 w-96 mx-auto">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email or Phone"
            />
          </div>

          <div className="mb-4 w-96 mx-auto">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="mb-4 w-96 mx-auto">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Confirmed Password"
            />
          </div>

          <div className="mb-2 w-96 mx-auto">
            <button className="rounded bg-black text-white w-full py-2 px-3">
              Signup
            </button>
          </div>

          <div className="mb-4 w-96 mx-auto">
            <p>
              Already have an account? <a href="#">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default register;
