import { baseURL } from "@/constants/movie";
import { Movie } from "@/typings";
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import { FaPlay, FaInfoCircle } from "react-icons/fa";

interface Props {
    original: Movie[],
}

function Banner({original} : Props) {
    const [Movie, setMovie] = useState<Movie | null>(null)
    const ref = useRef<any>(null);

    useEffect(() => {
        setMovie(original[Math.floor(Math.random()*original.length)])
    }, [original])

    return (
        <section className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
            <div className="absolute top-0 left-0 z-[1] h-[95vh] w-[100%]">
                <Image src={`${baseURL}original/${Movie?.backdrop_path || Movie?.poster_path}`} alt={`${Movie?.title}`} fill quality={75} className="object-cover"
                onLoadingComplete={() => ref.current.remove()} />
                {/* image loading bar */}
                <div className="w-[30px] h-[30px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[4px] border-solid border-[orange] rounded-[50%] border-t-[transparent] border-l-[transparent] z-10 animate-ani-rotation" ref={ref}></div>
                <div className="absolute top-0 left-0 z-[5] w-[100%] h-[100%] bg-gradient1"></div>
            </div>
            <h1 className="relative z-10 text-2xl font-bold md:text-4xl lg:text-7xl drop-shadow">{Movie?.title || Movie?.name || Movie?.original_title}</h1>
            <p className="relative z-10 text-xs max-w-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{Movie?.overview}</p>

            <div className="flex space-x-3 z-10 relative">
                <button className="bannerButton bg-white text-black"><FaPlay className="w-4 text-black md:w-7" /> Play</button>
                <button className="bannerButton bg-[gray]/70 text-black"><FaInfoCircle className="w-5 text-black md:w-8" /> Info</button>
            </div>
        </section>
    )
}

export default Banner