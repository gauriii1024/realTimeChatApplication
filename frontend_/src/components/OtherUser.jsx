import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice.js';


const OtherUser =  ({user}) => {
    const dispatch = useDispatch();
    const {selectedUser, onlineUsers} = useSelector(store => store.user)
    const isOnline = onlineUsers && Array.isArray(onlineUsers) && onlineUsers.includes(user._id);

    const selectedUserHandler = (user) => {
        console.log(user);
        dispatch(setSelectedUser(user));
    }
    return (
        <>
            <div onClick={() => selectedUserHandler(user)} className={` ${selectedUser?._id === user?._id ? 'bg-zinc-200 text-black' : 'text-white  ' } flex gap-2 text-white  hover:text-black items-center hover:bg-zinc-700 rounded p-2 cursor-pointer`}>
                <div className={`avatar $isOnline ? 'online' : '' `}>
                    <div className='w-12 rounded-full'>
                        <img src={user?.profilePhoto} alt="profileImg" />
                    </div>

                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between gap-2 '>
                        <p>{user?.fullName}</p>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>
            
        </>
    )
}

export default OtherUser