import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { VideoCard } from "./";

function VideoDetail() {
  const { id } = useParams();
  const [VideoDetail, setVideoDetail] = useState(null);
  const [related, setRelated] = useState(null);

  useEffect(() => {
    fetchFromAPI(`video/details/?id=${id}&hl=en&gl=IN`).then((data) =>
      setVideoDetail(data)
    );

    fetchFromAPI(`video/related-contents/?id=${id}&hl=en&gl=IN`).then((data) =>
      setRelated(data?.contents)
    );
  }, [id]);

  return (
    <div className={`${window.innerWidth > 700 ? 'max-h-[85vh]' : 'min-h-[100vh]'} bg-black flex media700:flex-row flex-col text-white px-2`}>
      {!VideoDetail?.stats ? (
        "loading..."
      ) : (
        <>
          <div
            id="video-container"
            className="media700:w-[80%] w-[100%] media700:mr-5 mb-10 overflow-hidden"
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls='true'
              width="100%"
              height="70vh"
            />
            <div
              id="content"
              className="flex gap-5 justify-between items-center"
            >
              <p className="font-bold media500:text-xl text-sm mt-4">{VideoDetail.title}</p>
              <div id="stats" className="flex gap-5">
                <p className="font-bold text-zinc-500 media500:text-sm text-xs mt-4">
                  {VideoDetail.stats.views.toLocaleString("en-In")} Views
                </p>
                <p className="font-bold text-zinc-500 media500:text-sm text-xs mt-4">
                  {VideoDetail.stats.likes.toLocaleString("en-In")} Likes
                </p>
              </div>
            </div>
          </div>
          <div
            id="related-container"
            className={`flex media700:flex-col ${window.innerWidth < 700 ? 'flex-wrap' : 'flex-nowrap'} gap-5 media500:justify-start justify-center overflow-auto`}
          >
            {!related
              ? "loading..."
              : related.map((video, i) => (

                  <VideoCard key={i}
                    video={video}
                    width={window.innerWidth < 500 ? "w-[90vw]" : "w-[210px]"}
                  />
                ))}
          </div>
        </>
      )}
    </div>
  );
}

export default VideoDetail;
