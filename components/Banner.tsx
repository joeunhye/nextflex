import { baseURL } from "@/constants/movie";
import { Movie } from "@/typings";
import Image from "next/image";
import { useState, useEffect } from 'react';

interface Props {
    original: Movie[],
}

function Banner({original} : Props) {
    const [Movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        setMovie(original[Math.floor(Math.random()*original.length)])
    }, [original])

    console.log(Movie)

    return (
        <section>
            <div>
                <Image src={`${baseURL}${Movie?.backdrop_path || Movie?.poster_path}`} alt={`${Movie?.title}`} fill quality={75} priority className="object-cover" />
            </div>
        </section>
    )
}

export default Banner