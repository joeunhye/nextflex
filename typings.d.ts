/*
    *.ts vs *.d.ts
    *.ts는 자바스크립트로 컴파일됨.
    *.d.ts는 개발 과정에서만 실행되고 빌드 시에 자바스크립트로 컴파일되지 않는다.
    실 서비스 시 호출되는 자바스크립트 파일이 적어짐.
*/

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}