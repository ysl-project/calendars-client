import { InAuthUser } from "@/models/in_auth_user";
import { useEffect, useState } from "react";

export default function userAuth() {
    const [authUser, setAuthUser] = useState<InAuthUser | null>(null);
    const [loading, setLoading] = useState(true);
    async function signIn(): Promise<void> {
        try {
            // const signInResult = await 
            // 로그인 로직
        } catch (err) {
            console.error(err);
        }
    }
    const clear = () => {
        setAuthUser(null);
        setLoading(true);
    }
    const signOut = () => {
        // 로그아웃 api
    }

    return {
        authUser,
        loading,
        signIn,
        signOut,
    };
}