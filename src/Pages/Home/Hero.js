import React from "react";
import img1 from "../../Assets/Images/banner1.jpg";
import img2 from "../../Assets/Images/banner2.jpg";

export const Hero = () => {
  return (
    <div>
      <div className="flex flex-row px-[120px]">
        <div className="py-6 pr-6 basis-4/5">
            <div className="absolute z-40 flex justify-between pl-10 transform -translate-y-1/2 bottom-4 left-4/5">
              <div className="flex justify-center w-full gap-2 py-2 ">
                <a
                  href="#item1"
                  className="px-2 py-[2px] rounded-sm bg-[#fed430]"
                ></a>
                <a
                  href="#item2"
                  className="px-2 py-[2px] rounded-sm bg-[#fed430]"
                ></a>
                <a
                  href="#item3"
                  className="px-2 py-[2px] rounded-sm bg-[#fed430]"
                ></a>
                <a
                  href="#item4"
                  className="px-2 py-[2px] rounded-sm bg-[#fed430]"
                ></a>
              </div>
            </div>
          <div className="w-full relative h-[440px] carousel">
            <div id="item1" className="z-30 w-full carousel-item">
              <img src={img1} className="w-full" />
            </div>
            <div id="item2" className="z-20 w-full carousel-item">
              <img src={img2} className="w-full" />
            </div>
            <div id="item3" className="z-10 w-full carousel-item">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
              <div className="absolute flex justify-between pl-10 transform -translate-y-1/2 bottom-4 left-4/5"></div>
            </div>
            <div id="item4" className="z-0 w-full carousel-item">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div>
          </div>
        </div>
        <div className="basis-1/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, vero.
        </div>
      </div>
    </div>
  );
};
