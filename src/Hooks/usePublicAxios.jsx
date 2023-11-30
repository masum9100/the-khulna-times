import axios from "axios";

const axiosPubic = axios.create({
    baseURL: 'http://localhost:5001'
})

const usePublicAxios = () => {
    return axiosPubic
};

export default usePublicAxios;