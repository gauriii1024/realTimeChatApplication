import React from 'react'
import { IoMdSend } from "react-icons/io";

const SendInput = () => {
  return (
    <div >
        <form action="" className='px-4 my-3'>
            <div className='w-full relative '>
                <input type="text" className='border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white' placeholder = 'Send a message...' />
                <button className='absolute flex inset-y-0 end-0 items-center pr-4'>
                    <IoMdSend/>
                </button>
            </div>
        </form>
    </div>
  )
}

export default SendInput