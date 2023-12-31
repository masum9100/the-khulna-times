import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'https://agn12ss-masum9100.vercel.app'
})

const useSecureAxios = () => {
    const navigate = useNavigate()
    const {logOut} = useAuth()
    axiosSecure.interceptors.request.use(function (config){
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error){
        return Promise.reject(error)
    })
    axiosSecure.interceptors.response.use(function(response){
        return response
    }, async (error) =>{
        const status = error.response.status
        // console.log('status error in the interceptors', status)
        if (status === 401 || status === 403){
            
            useEffect(() => {
                const doNavigation = async () => {
                    await logOut();
                    navigate('/login');
                };

                doNavigation();
            }, [logOut, navigate]);
        }
        return Promise.reject(error)
    })
    return axiosSecure
};

export default useSecureAxios;