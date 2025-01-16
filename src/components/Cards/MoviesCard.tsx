import Image from "next/image";
import { FaStar } from "react-icons/fa";

type MoviesCardProps = {
  image: string;
  title: string;
  action: string;
  rating: number;
};

const MoviesCard: React.FC<MoviesCardProps> = ({ image, title, action, rating }) => {
  return (
    <div className="card max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-4">
      <div className="relative w-[280px]  h-[400px] sm:h-[350px] md:h-[400px]">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-sm" />
      </div>
      <h1 className="text-lg sm:text-xl md:text-2xl py-2 font-bold text-white">{title}</h1>
      <p className="text-sm sm:text-md text-white">{action}</p>
      <div className="flex items-center gap-1">
        <FaStar className="text-yellow-400" />
        <span className="text-md font-bold text-white">{rating}</span>
      </div>
    </div>
  );
};

export default MoviesCard;
