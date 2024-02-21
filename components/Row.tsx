import { Movie } from "@/typings";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Thumbnail from "./Thumbnail";
import { useRef } from "react";

interface Props {
    title: string,
    movies: Movie[]
}

function Row({title, movies} : Props) {
    const rowRef = useRef<HTMLDivElement>(null);

    const handleClick = (direction : string) => {
        if(rowRef.current) {
            const {scrollLeft, clientWidth} = rowRef.current;
            const targetPos = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            rowRef.current.scrollTo({left: targetPos, behavior: 'smooth'})
        }
    }

    return (
        <article className="space-y-0.5 md:space-y-2 relative z-20 md:pb-[30px]">
            <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">{title}</h2>
            <div className="group relative md:-ml-2 ">
                <FaAngleLeft onClick={() => handleClick('left')} className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />

                {/* list */}
                <div ref={rowRef} className="flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500   scrollbar-thumb-rounded-full scrollbar-track-rounded-full !pb-4 ">
                    {movies.map(movie => <Thumbnail key={movie.id} movie={movie} />)}
                </div>

                <FaAngleRight onClick={() => handleClick('right')} className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
            </div>
        </article>
    )
}

export default Row 