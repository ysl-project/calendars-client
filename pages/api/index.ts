import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080",
});

// 요청 타임아웃 설정
instance.defaults.timeout = 2500;

// 요청 인터셉터 추가ㅏ
instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

// 응답 인터셉터 추가
instance.interceptors.response.use(
    (response) => {
        const res = response.data;
        return res;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default instance;