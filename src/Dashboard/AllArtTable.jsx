import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineStop } from "react-icons/ai";
import { FaHandPointRight } from "react-icons/fa";


const AllArtTable = ({allArticle}) => {

    const { _id, newsTitle, short_description, long_description, user_email, photo_url1, photo_url2, tag, package_status } = allArticle
    const [deleted, setDeleted] = useState(false)

    const handeApprove = e =>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Article has been Approved ",
            showConfirmButton: false,
            timer: 1500
          });
    }
    const handeReject = e =>{
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Article has been Rejected ",
            showConfirmButton: false,
            timer: 1500
          });
    }

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
                fetch(`http://localhost:5001/newarticle/${_id}`, {
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
        <tr>
                        <th className='text-xl'><FaHandPointRight></FaHandPointRight></th>
                        <td><img src={photo_url1}  className='w-16 h-16' alt="" /></td>
                        <td>{newsTitle}</td>
                        <td>{short_description}</td>
                        <td>{user_email}</td>
                        <td>{package_status}</td>
                        <td><button onClick={handeApprove} className='btn bg-green-800 text-white font-extrabold text-xl'><IoMdCheckmark></IoMdCheckmark></button></td>
                        <td><button onClick={handeReject} className='btn bg-red-800 text-white font-extrabold text-xl'><AiOutlineStop></AiOutlineStop></button></td>
                        <td><button onClick={() => handleDelete(_id)} className='btn bg-red-800 text-white font-extrabold text-xl'><AiOutlineDelete></AiOutlineDelete></button></td>
                    </tr>
    );
};

export default AllArtTable;