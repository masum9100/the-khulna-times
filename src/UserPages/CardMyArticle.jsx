import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import { FaHandPointRight } from "react-icons/fa";

const CardMyArticle = ({ myArticle }) => {
    const { _id, newsTitle, short_description, long_description, user_email, photo_url1, photo_url2, tag, package_status } = myArticle
    const [deleted, setDeleted] = useState(false)



    const handleDelete = _id => {
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
                fetch(`https://agn12ss-masum9100.vercel.app/newarticle/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            setDeleted(true)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your article has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }
    return (
        <>
            {
                deleted ? null : (
                    <tr>
                        <th className='text-xl'><FaHandPointRight></FaHandPointRight></th>
                        <td><img src={photo_url1} className='w-16 h-16' alt="" /></td>
                        <td>{newsTitle}</td>
                        <td>{short_description}</td>
                        <td>{user_email}</td>
                        <td>{package_status}</td>
                        <td>Pending</td>
                        <td><NavLink to={`/update-my-article/${_id}`}><button className='btn bg-green-800 text-white font-extrabold text-xl'><FaRegEdit></FaRegEdit></button></NavLink></td>
                        <td><button onClick={() => handleDelete(_id)} className='btn bg-red-800 text-white font-extrabold text-xl'><AiOutlineDelete></AiOutlineDelete></button></td>
                    </tr>
                )
            }
        </>
    );
};

export default CardMyArticle;