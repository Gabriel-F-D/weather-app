import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div class="py-10 px-6 ml-5 mt-5 w-8/12 bg-gradient-to-b from-gray-400  to-blue-500 rounded-lg relative transform transition duration-500 hover:scale-110">

        <div className="top-0 right-0 absolute">
            <h1></h1>
          <button onClick={onClose} class="py-1 px-2 text-white rounded-lg bg-red-500 shadow-lg hover:bg-red-700 duration-300">x</button>
        </div>

      <div class="text-white">
        <Link to={`/city/${id}`}>
          <h5 className="card-title">{name}</h5>
        </Link>


        <div className="flex justify-around">


          <div className="justify-center">
            <p class="text-blue-800">
              Min </p>
            <p>{min}°</p>
          </div>

          <div className="justify-center">
            <p class="text-red-400">Max</p>
            <p>{max}°</p>
          </div>

        </div>

        <div className="flex justify-center">
          <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
        </div>

      </div>
    </div>
  );
};

/*estado para el boton(componente aparte)
  cambiar index (html class="")
*/