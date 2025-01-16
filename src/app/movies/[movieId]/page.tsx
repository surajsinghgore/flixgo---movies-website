"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import MoviesData from "../../../data/MoviesData";
import { FaStar } from "react-icons/fa";

interface Movie {
  id: string;
  image: string;
  title: string;
  action: string;
  rating: number;
}

interface PageProps {
  params: Promise<{ movieId: string }>;
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { movieId } = React.use(params);

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
        <h2 className="text-xl text-black font-bold">{movie.title}</h2>
        <p className="text-sm text-gray-400">{movie.action}</p>
        <div className="flex items-center justify-center gap-1">
          <FaStar className="text-yellow-400" />
          <span className="text-md font-bold text-black">{movie.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
