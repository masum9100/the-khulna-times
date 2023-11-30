import React from 'react';
import useSecureAxios from '../Hooks/useSecureAxios';
import { useQuery } from '@tanstack/react-query';
import { AiOutlineDelete } from 'react-icons/ai';
import { HiOutlineUsers } from "react-icons/hi";

const AllUser = () => {

    const axiosSecure = useSecureAxios()
    const { data: user = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleDeleteUser = user =>{

    }
    return (
        <div>
            <p className='text-3xl font-bold text-center'>Our Total User: {user.length}</p>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                user.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td><img src={user.photoURL} alt="" className='w-12 h-12 rounded-full' /></td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><button onClick={() => handleDeleteUser(user)} className='btn bg-green-800 text-white font-extrabold text-xl'><HiOutlineUsers></HiOutlineUsers></button></td>
                                    <td><button onClick={() => handleDeleteUser(user)} className='btn bg-red-800 text-white font-extrabold text-xl'><AiOutlineDelete></AiOutlineDelete></button></td>
                                </tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;