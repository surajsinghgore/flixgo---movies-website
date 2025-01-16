import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

type MoviesCardProps = {
  id: string;
  image: string;
  title: string;
  action: string;
  rating: number;
};

const MoviesCard: React.FC<MoviesCardProps> = ({ id, image, title, action, rating }) => {
  return (
    <Link href={`/movies/${id}`}>
      <div className="card max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-4 cursor-pointer">
        <div className="relative w-[250px]  h-[400px] sm:h-[350px] md:h-[400px]">
          <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-sm" />
        </div>
        <h1 className="text-md font-light sm:text-xl md:text-xl pt-3 text-white">{title}</h1>
        <p className="text-sm sm:text-md text-white py-1">{action}</p>
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span className="text-md font-bold text-white">{rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default MoviesCard;
