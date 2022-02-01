import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return (
        <div class='p-10 m-6'>
            <p class='text-slate-50'>This AI will detect faces in your pictures. Give it a try.</p>
            <div className='main'>
            <div class='flex p-10 m-1 shadow-lg shadow-gray-900 '>
                <input type='text' class='w-2/4 rounded border-lime-300' />
                <button class='bg-lime-200  p-2 w-1/5 rounded-lg border-slate-50 '>yipieee</button>
                </div>
            </div>
        </div>
        
    )
    }



export default ImageLinkForm;