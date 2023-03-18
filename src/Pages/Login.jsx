import React from "react";

const login = () => {
  return (
    <>
      <div className="flex mt-40 items-start justify-center ">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title">Welcome back to Budgetly</h2>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex text-center items-baseline justify-around">
              <div>
                <p className="text-sm">Don't have an account? Register</p>
              </div>
              <button className="btn w-28 bg-gradient-to-r from-[#AD1DEB] to-[#6E72FC] hover:to-blue-500">
                Login
                <div className="ml-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-login"
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                    <path d="M20 12h-13l3 -3m0 6l-3 -3"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
