import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        className= "py-1 px-1 rounded-full outline-none"
        type="text"
        placeholder="Search your city..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="rounded-full ml-2 py-1 px-2 border border-red-700 hover:bg-gray-500 hover:text-white duration-300" type="submit" value="Add city"/>
    </form>
  );
}
