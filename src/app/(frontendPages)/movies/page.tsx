import MoviesCard from "@/components/Cards/MoviesCard";
import React from "react";
import AllMoviesData from "../../../data/AllMoviesData";
const page = () => {
  return (
    <div className="bg-[#2F2F39]">
    <div className="w-[80%] m-auto py-4 ">
      <h1 className="text-2xl py-4 text-center text-white font-bold">All List Movies</h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {AllMoviesData?.data?.slice(0,10).map((movie) => (
          <MoviesCard key={movie.id} id={movie.id} image={movie.image} title={movie.title} action={movie.action} rating={movie.rating} />
        ))}
      </div>
    </div></div>
  );
};

export default page;
