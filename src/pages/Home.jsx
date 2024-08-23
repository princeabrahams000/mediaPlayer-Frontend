import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import Vmus from '../components/Vmus';
import Catagory from '../components/Catagory';



function Home() {
  const [addStatus, setAddStatus] = useState([])
  const[dragStatus, setDragStatus] = useState(false)


  return (
    <>
    <div className="d-flex mt-5 p-5">
      <Add setAddStatus = {setAddStatus}/>
      <h5 className='ms-auto '><Link  to={'/watch-history'} style={{textDecoration:'none', color:'white'}}><FontAwesomeIcon icon={faClockRotateLeft} /><span id='h'>Watch History</span></Link></h5>
    </div>

    <div className="row w-100">
      <div className="col-md-9">
        <h4 className='ms-3'>All Videos</h4>
        <Vmus addStatus = {addStatus} setDragStatus={setDragStatus}/>
      </div>
      <div className="col-md-3">
        <Catagory dragStatus={dragStatus} setDragStatus={setDragStatus}/>
      </div>
    </div>
    
    </>
  )
}

export default Home