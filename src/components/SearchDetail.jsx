import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import VideosShimmer from "./VideosShimmer";

function SearchDetail() {
  const { searchTerm } = useParams();

  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    fetchFromAPI(`search/?q=${searchTerm}&hl=en&gl=IN`).then((data) =>
      setSearchResults(data.contents)
    );
  }, [searchTerm]);

  if (!searchResults) return <VideosShimmer justify="justify-center"/>

  return (
    <div className="bg-black media500:pl-0 pl-4">
      <div id="results-for" className="text-white text-lg py-4">
        Search Results for: <span className="text-red-500">{searchTerm}</span>
      </div>
      <div className="min-h-[100vh]">
        <Videos
          videos={searchResults}
          width={window.innerWidth < 500 ? "w-[90vw]" : "w-[210px]"}
        />
      </div>
    </div>
  );
}

export default SearchDetail;
