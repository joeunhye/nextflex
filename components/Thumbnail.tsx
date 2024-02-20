import { baseURL } from '@/constants/movie'
import { Movie } from '@/typings'
import Image from 'next/image'
import React from 'react'

interface Props {
    movie: Movie
}

function Thumbnail({movie} : Props) {
  return (
    <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:hover:scale-105'>
        <Image src={`${baseURL}w500${movie.backdrop_path || movie.poster_path}`} alt={`${movie.title}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} priority className="rouned-sm object-cover md:rouned" />
    </div>
  )
}

export default Thumbnail