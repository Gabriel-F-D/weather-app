import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <div class="bg-yellow-200 py-2">
        <Link to = '/'>
           <p class="py-2 text-yellow-500 no-underline hover:text-yellow-700 top-0 left-0 absolute duration-300" >Weather App</p>
        </Link>

        <Link to='about'>
            <p class="py-2 text-yellow-500 no-underline hover:text-purple-900 top-0 right-0 absolute duration-300">About Me</p>
        </Link>
        
        <SearchBar
          onSearch={onSearch}
        />
    </div>
  );
};

export default Nav;
