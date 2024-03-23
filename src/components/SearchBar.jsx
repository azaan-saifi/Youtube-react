import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function SearchBar() {

  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleForm = (e) => {
    e.preventDefault()
    if (query.trim().length) {
      navigate(`search/${query}`)
      setQuery("")
    }
  }

  const handleQuery = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value);
  }

  return (
    <form className="flex items-center gap-1 rounded-full pr-2 bg-zinc-800"
    onSubmit={handleForm}
    >
      <input
        type="text"
        placeholder="Search..."
        className="outline-none py-2 pl-4 border-zinc-400 bg-zinc-800 rounded-l-full media500:w-72 w-44 text-white"
        value={query}
        onChange={handleQuery}
      />
      <div className="search p-2 rounded-full hover:bg-red-200 cursor-pointer transition-all ease-in-out duration-300">
        <IoSearchSharp className="text-red-600 text-xl" />
      </div>
    </form>
  );
}

export default SearchBar;
