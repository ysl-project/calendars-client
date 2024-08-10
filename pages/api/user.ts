import instance from ".";

interface RegUser {
    email: string;
    nickName: string;
    password: string;
}
interface User {
    email: string;
    password: string;
}

export const register = async ({ email, nickName, password }: RegUser) => {
    const res = await instance.post("/user/add", {
        email: email,
        nickName: nickName,
        password: password
    });
    return res;
}

export const login = async ({ email, password }: User) => {
    const res = await instance.post("/user/login", {
        email: email,
        password: password,
    });

    return res;
}