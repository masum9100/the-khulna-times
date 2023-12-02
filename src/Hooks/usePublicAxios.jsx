import axios from "axios";

const axiosPubic = axios.create({
    baseURL: 'https://agn12ss-masum9100.vercel.app'
})

const usePublicAxios = () => {
    return axiosPubic
};

export default usePublicAxios;