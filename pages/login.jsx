import React from "react";

function login() {
  return (
    <div className="container">
      <div className="p-6 bg-[#F6F6F6] rounded-xl shadow-lg">
        <p className="mx-auto text-2xl text-center mb-8">
          Login To Your Account
        </p>
        <div className="flex justify-between">
          <div className="absolute left-1/2 -ml-0.5 w-px h-44 mt-10 bg-gray-600"></div>

          <div>
            <p className="mb-2">Login or Register with Mobile Number</p>
            <div className="mb-4 w-72 mx-auto">
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <div className="flex">
                    <span className="text-gray-500">
                      <img src="/bd_flag.png" />{" "}
                    </span>
                    <span className="text-gray-500 ml-1"> +88</span>
                  </div>
                </div>
                <input
                  type="text"
                  className="block shadow appearance-none border rounded w-full py-2 pl-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="01*********"
                />
              </div>
            </div>

            <div className="mb-6 w-72 xl:w-96 mx-auto">
              <button className="rounded bg-black text-white w-full py-2 px-3">
                Login with OTP
              </button>
            </div>

            <p className="mb-1">Or Login With</p>

            <div className="flex justify-between">
              <a
                href="#"
                className="px-6 py-3 text-white no-underline bg-[#3B5998] rounded w-36"
              >
                <div className="flex justify-between">
                  <img src="/fb_icon.png" />
                  <span>Facebook</span>
                </div>
              </a>

              <a
                href="#"
                className="px-6 py-3 no-underline bg-[#ffffff] rounded w-36"
              >
                <div className="flex justify-between">
                  <img src="/google_icon.png" />
                  <span>Google</span>
                </div>
              </a>
            </div>
          </div>

          <div>
            <form action="#">
              <p className="mb-2">Login with Phone Number or Email</p>

              <div className="mb-4 w-96 mx-auto">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Email or Phone"
                />
              </div>

              <div className="w-96 mx-auto">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <a href="#" className="mb-5 font-medium float-right">
                Forgot Password?
              </a>

              <div className="mb-2 w-96 mx-auto">
                <button className="rounded bg-black text-white w-full py-2 px-3">
                  Login
                </button>
              </div>

              <div className="mb-4 w-96 mx-auto">
                <p>
                  Don’t have any account?{" "}
                  <a href="#" className="font-medium">
                    Signup
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
