import { modalState } from "@/atoms/globalAtom"
import {useRecoilState} from 'recoil';

function Modal() {
    const [showModal, setShowModal] = useRecoilState(modalState);

    return (
        <aside className="fixed w-full h-[100vh] top-0 left-0 z-50 bg-[rgba(0,0,0,0.8)] p-10 flex items-center justify-center">
            <article className="w-[600px] h-[100%]"></article>
            <span className="absolute top-10 right-10 text-[16px] text-white cursor-pointer font-bold" onClick={() => setShowModal(false)}>close</span>
        </aside>
    )
}

export default Modal