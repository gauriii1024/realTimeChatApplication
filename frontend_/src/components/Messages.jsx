import React from 'react'
import Message from './Message.jsx'
import useGetMessages from '../hooks/useGetMessages.jsx'

const Messages = () => {
  useGetMessages();
  return (
    <div className='px-4 flex-1 overflow-auto'>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default Messages