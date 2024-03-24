import React from 'react'
import { Link } from "react-router-dom";

function ChannelCard({id, avatar, title, subscribers}) {
  return (
    <Link to={`/channel/${id}`}>
      <div
        id="thumbnail"
        className=" w-[210px] overflow-hidden flex items-center justify-center rounded-full"
      >
        <img
          src={avatar}
          alt=""
          className="w-[65%] bg-cover object-cover rounded-full mx-auto"
        />
      </div>
      <div className="content pt-3 px-3 pb-2 text-center">
        <p id="channel-name" className="text-white font-bold">{`${title}`}</p>
        <p id="subscribers" className="mt-2 text-sm font-bold text-white">
          {subscribers}
        </p>
      </div>
    </Link>
  );
}

export default ChannelCard