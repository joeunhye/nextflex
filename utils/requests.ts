// const API_KEY = process.env.NEXT_PUBLIC_API_TOKEN;
const BASE_UEL = 'https://api.themoviedb.org/3'

const requests = {
    top: `${BASE_UEL}/movie/top_rated?language=en-US&page=1`,
    sf: `${BASE_UEL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=878`,
    drama: `${BASE_UEL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=18`,
    fantasy: `${BASE_UEL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=14`,
    comedy: `${BASE_UEL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35`,
    action : `${BASE_UEL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28`,
}

export default requests;