import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useState, createContext, useContext, useMemo, useEffect } from 'react';
import { auth } from '@/firebase';

// Promise<void>로 지정할 수 있습니다. 이는 함수가 비동기적으로 완료될 것이지만, 완료 후에 특정 값을 반환하지 않을 것임을 나타냄
interface IAuth {
    user: User | null;
    signUp : (email: string, password: string) => Promise<void>;
    signIn : (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    error : string | null;
    loading: boolean;
}

// 전역으로 담을 초기 정보값을 createContext로 생성
const AuthContext = createContext<IAuth>({
    user: null,
    signUp: async () => {},
    signIn: async () => {},
    logout: async () => {},
    error: null,
    loading: false
})

// AuthProvider로 전체 리액트 컴포넌트를 감싸줄 것이므로 자식 타입을 리액트 노드로 지정
interface AuthProviderProps {
    children : React.ReactNode;
}

export const AuthProvider = ({children} : AuthProviderProps) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setUser(user);
                setLoading(false);
            } else {
                // User is signed out
                setUser(null);
                setLoading(true);
                router.push('/login')
            }

            setInitialLoading(false)
          }); 
    }, [auth])

    const signUp = async (email: string, password: string) => {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            router.push('/');
            setLoading(false);
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
        })
        .finally(() => setLoading(false))
    }

    const signIn = async (email: string, password: string) => {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            router.push('/');
            setLoading(false);
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
        })
        .finally(() => setLoading(false))
    }

    const logout =  async () => {
        setLoading(true);
        await signOut(auth).then(() => {
            setUser(null)
            }).catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            })
            .finally(() => setLoading(false))
    }

    // useMemo를 이용하여 user, loading값이 바뀔 때만 각 함수 및 정보를 객체로 묶어서 내보냄
    const memoedValue = useMemo(() => ({user, loading, error, signUp, signIn, logout}), [user, loading]);

    return <AuthContext.Provider value={memoedValue}>{!initialLoading && children}</AuthContext.Provider>
}

export default function useAuth() {
    return useContext(AuthContext)
}