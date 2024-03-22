import React, { useRef } from 'react';
import Sidebar from "../components/Sidebar"
import { useAuth } from '../context/authContext';
import { EditFormpage } from '../components/EditFormpage';

const  Editpage =()=> {

        const [auth] = useAuth()
        setTimeout(()=>{
            console.log(auth)
        },5000)

    return (
        <>
        
        <div style={{display:"flex"}}>
        <Sidebar/>
        <EditFormpage/>
        </div>
        </>
            
    )
}

export default Editpage;