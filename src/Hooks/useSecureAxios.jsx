import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5001'
})

const useSecureAxios = () => {
    return axiosSecure
};

export default useSecureAxios;