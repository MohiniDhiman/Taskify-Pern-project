import React from "react";

const Login = () => {
  return (
    <>
      <div className="m-10 mt-20">

        <div className="bg-white shadow-2xl rounded-2xl mx-80 p-5">
          <h1 className="mb-8 text-3xl leading-10 text-purple-800 font-bold text-center">
            LOGIN
          </h1>

          <form className="flex flex-col gap-6 items-center">
          
            {/* Email */}
            <div className="relative">
              <label className="absolute -top-2 left-2 text-xs bg-white px-1 text-purple-800">
                Email
              </label>
              <input
                type="email"
                className="border border-purple-800 rounded-md h-10 w-72 px-3 outline-none"
              />
            </div>

        

            {/* Password */}
            <div className="relative">
              <label className="absolute -top-2 left-2 text-xs bg-white px-1 text-purple-800">
                Password
              </label>
              <input
                type="password"
                className="border border-purple-800 rounded-md h-10 w-72 px-3 outline-none"
              />
            </div>
          

            {/* Button */}
            <button className="py-3 w-40 text-sm rounded-sm bg-linear-to-r from-purple-800 to-purple-700 text-white font-semibold hover:from-purple-700 hover:to-purple-800 transition">
              LOGIN NOW
            </button>

            {/* OR */}
            <div className="flex items-center justify-center gap-2 w-full">
              <div className="border-t border-neutral-300 w-28"></div>
              <span className="text-sm">OR</span>
              <div className="border-t border-neutral-300 w-28"></div>
            </div>

            {/* Login */}
            <h1 className="bg-clip-text text-transparent bg-linear-to-r from-black to-purple-500 font-semibold text-center">
              Don't have an account? Signup Now
            </h1>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
