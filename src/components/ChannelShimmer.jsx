import React from 'react'
import VideosShimmer from './VideosShimmer'

function ChannelShimmer() {
  return (
    <div>
      <div id="banner" className="w-full h-[20vh] bg-zinc-800"></div>
      <div
        id="logo"
        className="w-[180px] h-[180px] rounded-full bg-zinc-800 mx-auto -mt-12 border-zinc-700 border mb-10"
      ></div>
        <VideosShimmer justify='justify-center'/>
    </div>
  );
}

export default ChannelShimmer