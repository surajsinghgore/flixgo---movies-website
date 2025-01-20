import AllMoviesCard from "@/components/Cards/AllMoviesCard";
import MoviesCard from "@/components/Cards/MoviesCard";
import React from "react";

const page = () => {
  return (
    <div className="w-[80%] m-auto my-4">
      <h1 className="text-xl py-4">All List Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
            
              {/* <MoviesCard key={32} id={43} image={movie.image} title={movie.title} action={movie.action} rating={movie.rating} /> */}
          </div>
      </div>
  );
};

export default page;
