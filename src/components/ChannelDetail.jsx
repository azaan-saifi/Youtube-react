import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import { VideoCard, ChannelCard } from "./";
import ChannelShimmer from "./ChannelShimmer";

function ChannelDetail() {
  const { id } = useParams();
  const [videos, setVideos] = useState(null);
  const [ChannelDetail, setChannelDetail] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channel/videos/?id=${id}&hl=en&gl=US`).then((data) =>
      setVideos(data.contents)
    );

    fetchFromAPI(`channel/details/?id=${id}&hl=en&gl=US`).then((data) =>
      setChannelDetail(data)
    );
  }, [id]);

  if (!videos) return <ChannelShimmer/>;

  console.log(ChannelDetail);
  return (
    <div className="bg-black min-h-[100vh] w-full">
      {ChannelDetail.avatar && (
        <div id="banner" className="h-[190px]">
          <img
            src={`${ChannelDetail.banner.desktop[2].url}`}
            className="bg-cover h-full hidden media780:block w-full"
            alt=""
          />
          <img
            src={`${ChannelDetail.banner.mobile[1].url}`}
            className="bg-cover h-full block media780:hidden w-full object-none"
            alt=""
          />
        </div>
      )}
      <div id="avatar" className="w-[210px] h-[250px] mx-auto -mt-6">
        {ChannelDetail.avatar && (
          <ChannelCard
            id={id}
            avatar={ChannelDetail.avatar[2].url}
            title={ChannelDetail.title}
            subscribers={ChannelDetail.stats.subscribersText}
          />
        )}
      </div>
      <div
        id="videos"
        className="flex flex-wrap justify-center items-center gap-5 "
      >
        {videos &&
          videos.map((video, idx) => (
            <div key={idx} className="">
              <VideoCard
                video={video}
                width={window.innerWidth < 500 ? "w-[90vw]" : "w-[210px]"}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ChannelDetail;
