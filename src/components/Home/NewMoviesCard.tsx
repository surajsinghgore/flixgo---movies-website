import React from "react";
import MoviesCard from "../Cards/MoviesCard";
import MoviesData from "../../data/MoviesData";

const NewMoviesCard = () => {
  return (
    <div className="relative NewMoviesCard">
      <div className="opacity-95 py-10">
        <div className="w-[90%] sm:w-[80%] m-auto">
          <h1 className="text-3xl sm:text-4xl text-white md:pl-4">
            <b className="font-black">NEW ITEMS</b> OF THIS SEASON
          </h1>

          {/* Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
            {MoviesData?.map((movie) => (
              <MoviesCard key={movie.id} id={movie.id} image={movie.image} title={movie.title} action={movie.action} rating={movie.rating} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMoviesCard;
