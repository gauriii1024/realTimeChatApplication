import React, {useEffect} from 'react'
import OtherUser from './OtherUser.jsx'
import useGetOtherUsers from '../hooks/useGetOtherUsers.jsx'
import { useSelector } from 'react-redux'



const OtherUsers = () => {
    useGetOtherUsers()
    const {otherUsers} = useSelector(store => store.user)
    if (!otherUsers) return;
    return (
        <div className='overflow-auto'>
            {
                otherUsers?.map((user) => {
                    return (
                        <OtherUser key={user._id} user= {user}/>
                    )
                })
            }</div>
    )
}

export default OtherUsers