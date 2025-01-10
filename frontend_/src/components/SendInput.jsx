import axios from 'axios';
import React, {  useState } from 'react'
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import {setMessages} from '../redux/messageSlice.js'

const SendInput = () => {
  const [message, setMessage] = useState("");
  const { selectedUser } = useSelector(store => store.user)
  const dispatch = useDispatch();
  const {messages} = useSelector(store => store.message)
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/message/send/${selectedUser?._id}`, { message },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        dispatch(setMessages([...messages, res?.data?.newMessage]))
      console.log(res)
    } catch (error) {
      console.log(error);
    }
    setMessage("")
  }
  return (
    <div >
      <form onSubmit={onSubmitHandler} action="" className='px-4 my-3'>
        <div className='w-full relative '>
          <input
            value={message} onChange={(e) => setMessage(e.target.value)}
            type="text" className='border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white' placeholder='Send a message...' />
          <button type="submit" className='absolute flex inset-y-0 end-0 items-center pr-4'>
            <IoMdSend />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SendInput