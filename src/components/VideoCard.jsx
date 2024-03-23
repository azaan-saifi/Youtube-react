import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ video, width }) {
  return (
    <Link to={`/video/${video.video?.videoId}`}>
      <div
        id="thumbnail"
        className={`${width || "w-[210px]"} overflow-hidden rounded-t-lg`}
      >
        <img
          src={video.video?.thumbnails[0]?.url}
          alt=""
          className="w-[100%] bg-cover object-cover"
        />
      </div>
      <div
        className={`content pt-3 px-3 pb-2 bg-zinc-900 min-h-[145px] rounded-b-lg ${
          width || "w-[210px]"
        }`}
      >
        <p
          id="video-title"
          className="text-white font-bold"
        >{`${video.video?.title?.slice(0, 60)}
        `}</p>
        <p id="channel-title" className="mt-2 text-sm text-gray-500 font-bold">
          {video.video?.author?.title}
        </p>
      </div>
    </Link>
  );
}

export default VideoCard;
