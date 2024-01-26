import { createContext, ReactNode, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  Auth,
  User,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

export interface AuthContextProps {
  user: Auth | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  googleSignIn: () => Promise<void>;
  logOut: () => Promise<void>;
  updateUserProfile: (name: string, photo: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

const auth = getAuth(app);

interface AuthProviderProps {
  children: ReactNode;
}


const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Auth | null>(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = async (email: string, password: string) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = async () => {
    setLoading(true);
    await signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    setLoading(true);
    await signOut(auth);
  };

  const updateUserProfile = async (name: string, photo: string) => {
    await updateProfile(auth.currentUser!, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      setUser(currentUser as Auth | null);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo: AuthContextProps = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo as AuthContextProps}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
