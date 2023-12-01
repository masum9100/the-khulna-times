import React from 'react';
import useSecureAxios from '../Hooks/useSecureAxios';
import { useQuery } from '@tanstack/react-query';
import { AiOutlineDelete } from 'react-icons/ai';
import { HiOutlineUsers } from "react-icons/hi";
import Swal from 'sweetalert2';

const AllUser = () => {

    const axiosSecure = useSecureAxios()
    const { data: user = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div>
            <p className='text-2xl font-bold text-center'>Our Total User : <span className='text-[#4A00FF] font-extrabold text-3xl'>{user.length}</span></p>
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
                                    <td>
                                        {
                                            user.role  ===  'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className='btn bg-green-800 text-white font-extrabold text-xl'><HiOutlineUsers></HiOutlineUsers></button>
                                        }
                                    </td>
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