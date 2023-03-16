import Modal from "../components/Modal";
import Button from "../components/button";
import { useState } from "react";
function ModalPage(){
    const [showModal,setShowModal] =useState(false);

    const handleClick=()=>{
        setShowModal(true)
    }

    const handleClose=()=>{
        setShowModal(false)
    }
    const actionBar =<div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>

    const modal =<Modal onclose={handleClose} actionBar={actionBar}>
        <p>Here is important agreement for you to accept</p>
        </Modal>
    return (<div className="relative">
    <Button primary onClick={handleClick}>Open Modal</Button>
    {showModal && modal }
    </div>)
    }
    
    export default ModalPage;