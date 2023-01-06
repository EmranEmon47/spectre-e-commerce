import React from "react";

export const Menu = () => {
  return (
    <main className="bg-primary">
      <div className="flex justify-between items-center w-full h-[43px] px-[120px]">
        <div>
          <div className="dropdown dropdown-hover h-[43px]">
            <label
              tabIndex={0}
              className="px-4 py-[9.5px] text-black font-medium bg-[#fed430] flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 pr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              All Catagories
            </label>
            <ul
              tabIndex={0}
              className="shadow dropdown-content menu bg-base-100 w-52 "
            >
              <li className="hover-bordered hover:text-primary">
                <a>Item 1</a>
              </li>
              <li className="hover-bordered hover:text-primary">
                <a>Item 2</a>
              </li>

              {/* <li tabIndex={1} className="hover-bordered hover:text-primary ">
                <div className="flex items-center justify-between">
                  <a>Item 3</a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>

                <ul
                  tabIndex={1}
                  className="shadow dropdown-content menu bg-base-100 w-52 "
                >
                  <li className="hover-bordered hover:text-primary">
                    <a>Item 1</a>
                  </li>
                  <li className="hover-bordered hover:text-primary">
                    <a>Item 2</a>
                  </li>

                  <li className="hover-bordered hover:text-primary">
                    <a>Item 3</a>
                  </li>
                  <li className="hover-bordered hover:text-primary">
                    <a>Item 4</a>
                  </li>
                  <li className="hover-bordered hover:text-primary">
                    <a>Item 5</a>
                  </li>
                </ul>
              </li> */}
              <li className="hover-bordered hover:text-primary">
                <a>Item 4</a>
              </li>
              <li className="hover-bordered hover:text-primary">
                <a>Item 5</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="font-medium text-white">0180000000</p>
        </div>
      </div>
    </main>
  );
};
