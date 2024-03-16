import React, { useRef } from 'react';
import Sidebar from "../components/Sidebar";
import CreatePage from '../components/CreatePage';

const  Addpage =()=> {

    

    return (
        <>
        <div style={{display:"flex"}}>

        <Sidebar/>
        <CreatePage/>
        </div>
        </>
            
    )
}

export default Addpage