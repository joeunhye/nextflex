import { baseURL } from "@/constants/movie";
import { modalState, movieState } from "@/atoms/globalAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import Image from "next/image";
import { useRef } from "react";

function Modal() {
	const [showModal, setShowModal] = useRecoilState(modalState);
	const ref = useRef<any>(null);
	const Movie = useRecoilValue(movieState);

	return (
		<aside className="fixed w-full h-[100vh] top-0 left-0 z-50 bg-[rgba(0,0,0,0.8)] p-10 flex items-center justify-center">
			<article className="w-[100%] h-[100%] flex justify-between items-center flex-wrap">
				<div className="relative w-[100%] h-[60%] overflow-hidden sm:w-[40%] sm:h-[100%]">
					<Image src={`${baseURL}w780/${Movie?.poster_path}`} alt={`${Movie?.title}`} fill quality={75} className="object-contain" onLoadingComplete={() => ref.current.remove()} />
					<div
						className="w-[30px] h-[30px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[4px] border-solid border-[orange] rounded-[50%] border-t-[transparent] border-l-[transparent] z-10 animate-ani-rotation"
						ref={ref}
					></div>
				</div>
				<div className="w-[100%] h-[60%] flex content-center flex-wrap sm:w-[55%] sm:h-[100%]">
					<h2 className="w-[100%] text-[30px] text-white mb-[20px]">{Movie?.title}</h2>
					<p className="w-[100%] text-[12px] text-[#aaa]">{Movie?.overview}</p>
				</div>
			</article>
			<span className="absolute top-10 right-10 text-[16px] text-white cursor-pointer font-bold" onClick={() => setShowModal(false)}>
				close
			</span>
		</aside>
	);
}

export default Modal;
