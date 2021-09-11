import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (


    <div class="bg-gray-600 py-2">
        <Link to = '/'>
          <img src='../img/wind.png' class='h-4 pl-24'/>
           <p class="py-2 text-yellow-500 no-underline hover:text-white top-0 left-0 absolute duration-300" >Weather App</p>
        </Link>

        <Link to='about'>
            <p class="py-2 text-yellow-500 no-underline hover:text-white top-0 right-0 absolute duration-300">About Me</p>
        </Link>
        
        <SearchBar
          onSearch={onSearch}
        />
    </div>
  );
};

export default Nav;
