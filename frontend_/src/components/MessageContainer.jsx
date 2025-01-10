import React, { useEffect } from 'react';
import SendInput from './SendInput.jsx';
import Messages from './Messages.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice.js';

const MessageContainer = () => {
    const dispatch = useDispatch();
  const { selectedUser, authUser } = useSelector(store => store.user);
  useEffect(() => {
    return () => dispatch(setSelectedUser(null))
  }, [])
  return (
    <>
      {
        selectedUser != null ? (
          <div className='md:min-w-[550px] flex flex-col'>
            <div className='flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2'>
              <div className='avatar online'>
                <div className='w-12 rounded-full'>
                  <img src={selectedUser?.profilePhoto} alt="profileImg" />
                </div>
              </div>
              <div className='flex flex-col flex-1'>
                <div className='flex justify-between gap-2'>
                  <p>{selectedUser?.fullName}</p>
                </div>
              </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>
            <Messages />
            <SendInput />
          </div>
        ) : (
          <div className='md:min-w-[550px] flex flex-col justify-center items-center'>
            <h1 className='text-2xl text-white '>Hiiieeeeeee {authUser?.fullName}</h1>
            <h1 className='text-4xl font-bold text-white '>Start chatting</h1>
          </div>
        )
      }
    </>
  );
}

export default MessageContainer;
