import React from 'react';
import Swal from 'sweetalert2';

const AddPublisher = () => {

    const handleAddPublisher = e =>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Publisher added Successfully",
            showConfirmButton: false,
            timer: 1500
          });
    }
    return (
        <div>
            <p className='text-2xl font-bold text-center'>Add a Publisher</p>
            <div className="divider divider-secondary mx-5"></div>
            <div className='mt-10 text-center'>
                <form className='w-full px-10 mx-auto'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-1/2'>
                            <p className='text-2xl font-bold mb-5'>Publisher Name</p>
                            <input type="text" placeholder='Publisher Name' className='input border-blue-800 border-4 text-[#4A00FF] w-1/2' />
                        </div>
                        <div className='w-1/2'>
                            <p className='text-2xl font-bold mb-5'>Publisher Photo</p>
                            <input type="text" placeholder='Publisher Photo URL' className='input border-blue-800 border-4 text-[#4A00FF] w-1/2' />
                        </div>
                        
                        
                    </div>
                    
                    <div className=''>
                    <button onClick={handleAddPublisher} className="px-10 py-5 rounded-lg mt-10 text-white bg-[#4A00FF] text-xl font-bold">Add a Publisher</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddPublisher;