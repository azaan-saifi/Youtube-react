import React from "react";

function VideosShimmer({justify}) {
  return (
    <div id="container" className={`flex flex-wrap items-center gap-6 p-4 media500:${justify || 'justify-start'} justify-center`}>
      {Array.from({ length: 10 }).map((el, i) => (
        <div key={i} className="media500:w-[210px] w-[85vw] media500:h-[250px] h-[300px] bg-[#27272a5b] rounded-lg">
          <div
            id="demo-img"
            className="w-full h-[50%] border-b border-zinc-800 bg-zinc-800"
          ></div>
          <div id="demo-img" className="w-full h-[50%] p-3">
            <div className="w-[95%] h-[18px] bg-zinc-800 rounded-md mt-2"></div>
            <div className="w-[65%] h-[18px] bg-zinc-800 rounded-md mt-6"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideosShimmer;
