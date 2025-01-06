import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice.js'

const useGetMessages = () => {
    const dispatch = useDispatch()
    const {selectedUser} = useSelector(store => store.user)
    useEffect(() => {
        const fetchMessages = async () => {
            if (!selectedUser?._id) return;
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:8080/api/v1/message/${selectedUser?._id}`);
                console.log(res.data);
                dispatch(setMessages(res.data))
            } catch (error) {
                console.log(error.response ? error.response.data : error.message);

            }
        }
        fetchMessages();
    }, [selectedUser])
}

export default useGetMessages;