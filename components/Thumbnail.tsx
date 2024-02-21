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
        {/* placeholder='blur' 속성을 지정하면, 이미지가 로드되는 동안 작은 사이즈의 blur 이미지를 미리 로딩하여 보여줄 수 있다. */}
        <Image src={`${baseURL}w500${movie.backdrop_path || movie.poster_path}`} alt={`${movie.title}`} fill blurDataURL={`${baseURL}w500${movie.backdrop_path || movie.poster_path}`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" placeholder='blur'  className="rouned-sm object-cover md:rouned" />
    </div>
  )
}

export default Thumbnail