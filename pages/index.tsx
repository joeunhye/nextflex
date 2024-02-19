import Header from "@/components/Header";
import requests from "@/utils/requests";
import Head from "next/head";

export default function Home({topRated, sf, drama, fantasy, comedy, action }) {
  console.log(topRated)
  return (
    <div className="relative h-screen bg-gradient-to-b from-[#333] to-[#141414]">
      <Head>
        <title>NEXTFLIX</title>
      </Head>
      
      <Header />

      <main>
        {/* Banner */}
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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGM3MjY2ODQ0NDZmYmVjZjJmMDRiZTJjMWYzYTBhOCIsInN1YiI6IjY1Y2RjNzNmYTNiNWU2MDE4NTJjNzQ0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rBC59v9K3SHEx9JsC-m5wSQuvJVHYH9hdUw7Cv_cYto'
    }
  };

  const [top, sf, drama, fantasy, comedy, action] = await Promise.all([
    fetch(requests.top, options).then(res => res.json()),
    fetch(requests.sf, options).then(res => res.json()),
    fetch(requests.drama, options).then(res => res.json()),
    fetch(requests.fantasy, options).then(res => res.json()),
    fetch(requests.comedy, options).then(res => res.json()),
    fetch(requests.action, options).then(res => res.json()),
  ])

  return {
    props: {
      topRated: top.results,
      sf: sf.results,
      drama: drama.results,
      fantasy: fantasy.results,
      comedy: comedy.results,
      action: action.results
    }
  }
}