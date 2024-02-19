/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    //외부 웹사이트에서 가져오는 이미지를 최적화하기 위해 해당 이미지 서버 도메인 등록
    // 도메인으로 등록하지 않은 url의 이미지를 Image컴포넌트로 호출 시 에러 발생
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
  // images: { loader: "default", minimumCacheTTL: 60, domains: [ "image.tmdb.org" ], }
}

module.exports = nextConfig