import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center h-svh text-center text-white">
      <h1 className=" font-bold text-5xl">
        Unlimited movies, TV shows and more
      </h1>

      <p className="text-2xl font-medium gap-4  flex flex-col"> 
        Watch anywhere. Cancel anytime.
        <p className="text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </p>
      <div className="w-full flex items-center justify-center gap-2">
        <div className="w-[25%] flex items-center">
          <input
            type="text"
            id="floating-input"
            className="peer relative bg-gray-900 text-gray-300 p-2 border rounded-[5px] w-full py-3 border-gray-600 focus:border-blue-500 transition-all duration-500 ease-in-out"
            placeholder=" " // Add a space to keep the input's height consistent
          />
          <label
            htmlFor="floating-input"
            className="absolute flex justify-center xl:left-[32%] max-xl:left-[30%] 2xl:left-[35%]  transition-all duration-200 ease-in-out text-gray-500   peer-placeholder-shown:text-base peer-focus:bottom-[165px] peer-focus:text-xs  "
          >
            Email address
          </label>
        </div>

        <button className="flex px-5 py-2 items-center text-lg bg-red-600 font-semibold rounded-md">
          Get Started{" "}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              data-icon="ChevronRightStandard"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
