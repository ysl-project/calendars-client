import userAuth from "@/hooks/user_auth";
import { InAuthUser } from "@/models/in_auth_user";
import { createContext, useContext } from "react";

interface InAuthUserContext {
    authUser: InAuthUser | null;
    loading: boolean;
    signIn: () => void;
    signOut: () => void;
}

const AuthUserContext = createContext<InAuthUserContext>({
    authUser: null,
    loading: true,
    signIn: async () => {},
    signOut: () => {},
});

export const AuthUserProvider = function ({ children }: { children: React.ReactNode}) {
    const auth = userAuth();
    return <AuthUserContext.Provider value={auth}>{ children }</AuthUserContext.Provider>;
};

export const useAuth = () => useContext(AuthUserContext);