import React from "react";
import { VideoCard, ChannelCard } from "./";

function Videos({ videos, width }) {
  return (
    <div
      id="card-container"
      className="flex flex-wrap justify-start items-start gap-5 "
    >
      {videos &&
        videos.map((item, idx) => (
          <div key={idx} className="max-w-[210px] rounded-lg">
            {item.channel && (
              <ChannelCard
                id={item.channel.channelId}
                avatar={item.channel.avatar[1]?.url}
                title={item.channel.title}
                subscribers={item.channel.stats?.subscribersText}
              />
            )}
            {item.video && <VideoCard video={item} width={width} />}
          </div>
        ))}
    </div>
  );
}

export default Videos;
