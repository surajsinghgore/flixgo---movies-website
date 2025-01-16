"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import MoviesData from "../../../data/MoviesData";

interface Movie {
  id: string;
  image: string;
  title: string;
  action: string;
  rating: number;
}

interface PageProps {
  params: {
    movieId: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { movieId } = params;

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = () => {
      const foundMovie = MoviesData.find((movie) => movie.id === movieId);
      if (!foundMovie) {
        setError("Movie not found");
      } else {
        setMovie(foundMovie);
      }
      setLoading(false);
    };

    fetchMovie();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>No movie found</div>;
  }

  return (
    <div className="my-16">
      <h1 className="text-center py-2">Movie ID: {movieId}</h1>
      <div className="flex justify-center ">
        <div className="relative w-[250px] h-[400px] sm:h-[350px] md:h-[400px]">
          <Image src={movie.image} alt={movie.title} layout="fill" objectFit="cover" className="rounded-sm" />
        </div>
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl text-white">{movie.title}</h2>
        <p className="text-sm text-gray-400">{movie.action}</p>
        <p className="text-lg text-yellow-400">{movie.rating}</p>
      </div>
    </div>
  );
};

export default Page;
