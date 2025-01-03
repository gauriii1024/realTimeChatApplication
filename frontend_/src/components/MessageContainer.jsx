import React from 'react'
import SendInput from './SendInput.jsx'
import Messages from './Messages.jsx'

const MessageContainer = () => {
    return (
        <div className='md:min-w-[550px] flex flex-col'>
            <div className='flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPjv1lHEIpzgDk_e3Sm-e4EVOzggYdb5aHA&s" alt="profileImg" />
                    </div>

                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between gap-2 '>
                        <p>Gaurip1024</p>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>
            <Messages/>
            <SendInput/>
        </div>
    )
}

export default MessageContainer