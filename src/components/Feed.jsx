import React, { useEffect, useState } from "react";
import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import VideosShimmer from "./VideosShimmer";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null)
  useEffect(() => {
    fetchFromAPI(
      `search/?q=${selectedCategory}&hl=en&gl=IN`
    ).then((data) => setVideos(data?.contents));
  }, [selectedCategory]);

  return (
    <div className="bg-black max-h-[calc(100vh-56px)] text-white flex media500:flex-row flex-col">
      <div className="side-container">
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setVideos={setVideos}
        />
      </div>
      {!videos ? (
        <VideosShimmer/>
      ) : (
        <div className="feed-container px-4 overflow-y-auto">
          <div id="title" className="text-3xl font-bold my-2">
            {selectedCategory} <span className="text-[#FC1503]">videos</span>
          </div>
          <Videos videos={videos}
          width={window.innerWidth < 500 ? "w-[90vw]" : "w-[210px]"}
          />
        </div>
      )}
    </div>
  );
}

export default Feed;
