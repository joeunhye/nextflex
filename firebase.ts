import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXLtsKefRM7ltniY42_LYHFhnTiujgYi4",
  authDomain: "nextflix-2a221.firebaseapp.com",
  projectId: "nextflix-2a221",
  storageBucket: "nextflix-2a221.appspot.com",
  messagingSenderId: "743628083305",
  appId: "1:743628083305:web:0e9a08f09a32a5ba2592f8"
};

// firebase로 구동한 app이 없으면 아직 인증 저리가 되지 않은 상태에서만 초기화
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();

export default app;
export { auth };