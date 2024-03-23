import React from "react";
import { categories } from "../utils/constants";

function SideBar({ selectedCategory, setSelectedCategory, setVideos }) {
  return (
    <div className="h-[97%] overflow-y-auto flex media500:flex-col border-r border-zinc-800 flex-row px-2 gap-2">
      {categories.map((category) => (
        <button
        onClick={() => {
          setSelectedCategory(category.name);
          setVideos(null)
        }}
          key={category.name}
          className={`category-btn ${
            category.name === selectedCategory
              ? "bg-[#FC1503]"
              : "bg-transparent"
          } media500:py-[7px] py-[1px] px-[20px] text-[14px] media500:text-[16px]`}
        >
          <span
            className={`mr-3 ${
              category.name === selectedCategory
                ? "text-white"
                : "text-[#FC1503]"
            }`}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}

export default SideBar;
