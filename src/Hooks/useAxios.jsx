import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5001'
})

const useAxios = () => {
    return axiosSecure
};

export default useAxios;