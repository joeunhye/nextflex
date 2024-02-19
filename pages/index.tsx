import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { Movie } from "@/typings";
import requests from "@/utils/requests";
import { NextPage } from "next";
import Head from "next/head";

interface Props {
  original: Movie[],
  topRated: Movie[],
  sf: Movie[],
  drama: Movie[],
  fantasy: Movie[],
  comedy: Movie[],
  action: Movie[],
}

const Home: NextPage<Props> = ({original, topRated, sf, drama, fantasy, comedy, action } : Props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-[#333] to-[#141414]">
      <Head>
        <title>NEXTFLIX</title>
      </Head>
      
      <Header />

      <main>
        <Banner original={original} />
        <section>

        </section>
      </main>

    </div>
  )
}

// 페이지 컴포넌트가 렌더링되기 전에 getServerSideProps 함수가 실행
// Data Fetch 작업을 getServerSideProps 함수 내에서 처리하면, 페이지 컴포넌트의 props로 전달받아 렌더링
export const getServerSideProps = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    }
  };

  const [original, top, sf, drama, fantasy, comedy, action] = await Promise.all([
    fetch(requests.top, options).then(res => res.json()),
    fetch(requests.top, options).then(res => res.json()),
    fetch(requests.sf, options).then(res => res.json()),
    fetch(requests.drama, options).then(res => res.json()),
    fetch(requests.fantasy, options).then(res => res.json()),
    fetch(requests.comedy, options).then(res => res.json()),
    fetch(requests.action, options).then(res => res.json()),
  ])

  return {
    props: {
      original: top.results,
      topRated: top.results,
      sf: sf.results,
      drama: drama.results,
      fantasy: fantasy.results,
      comedy: comedy.results,
      action: action.results
    }
  }
}

export default Home;