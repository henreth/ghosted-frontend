import * as BS from 'react-bootstrap'
import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'
import confetti from "canvas-confetti";
import '../style/infomodal.css'
import userPhoto from '../img/userPhoto.jpeg'
import InfoCard from './InfoCard';
import undo from '../img/reboot-icon.png';
import heart from '../img/real_heart.png';
import reject from '../img/bones-icon.png';




function InfoModal({ setShowInfoModal,user }) {
    const [openInfoModal, setOpenInfoModal] = useState(true)

    function handleClose() {
        setOpenInfoModal(openInfoModal => !openInfoModal)
        setShowInfoModal(false)
        confetti.reset()
    }

    return (
            <BS.Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={openInfoModal}
                onHide={handleClose}
                // backdrop='static'
                style={{ borderRadius: '30px', backgroundColor: 'rgba(0, 0, 0, 0.75)', width:'50%', position:'absolute',marginLeft:'350px', marginTop:'-790px'}}
            >
                <BS.Modal.Body style={{ padding: '80px',paddingLeft:'70px',textAlign: "center", opacity: '1', color: 'white', background: ''}}>
                    <div className='text-holder'>
                        <strong style={{marginLeft:'35px', fontSize:'70px'}}>WELCOME TO GHOSTD</strong>
                        <strong style={{marginLeft: '40px', fontSize:'20px'}}> YOU AND LIKED ONE ANOTHER</strong>
                        <hr></hr>
                        <InfoCard profile={user}/>
                            <div className='info-buttons'>
                                <img className="info-reject-button" alt='reject' src={reject} />
                                <img className="info-undo-button"  alt='undo' src={undo} />
                                <img className="info-like-button" alt='heart' src={heart} />
                            </div>
                        <hr></hr>
                        <div style={{marginTop:'420px'}}></div>
                        <button className='exit-button' onClick={handleClose}>START SWIPING</button>
                    </div>
                </BS.Modal.Body>
            </BS.Modal>
    )
}

export default InfoModal