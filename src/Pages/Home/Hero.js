import React from "react";
import img1 from '../../Assets/Images/banner1.jpg'
import img2 from '../../Assets/Images/banner2.jpg'


export const Hero = () => {
  return (
    <div>
      <div className="flex flex-row px-[120px]">
        <div className="py-6 pr-6 basis-4/5">
          <div className="w-full carousel">
            <div id="item1" className="w-full h-[440px] carousel-item">
              <img src={img1} className="w-full" />
            </div>
            <div id="item2" className="w-full carousel-item">
              <img src={img2} className="w-full" />
            </div>
            <div id="item3" className="w-full carousel-item">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div>
            <div id="item4" className="w-full carousel-item">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
            </div>
          </div>
          <div className="flex justify-center w-full gap-2 py-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
        <div className="basis-1/5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
          explicabo voluptatem, qui quibusdam officiis doloribus aliquid illo
          saepe assumenda!
        </div>
      </div>
    </div>
  );
};
