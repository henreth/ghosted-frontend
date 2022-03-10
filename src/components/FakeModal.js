import * as BS from 'react-bootstrap'
import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'
import confetti from "canvas-confetti";
import '../style/fakemodal.css'


function MatchModal({ setShowMatchModal}) {
    const [openMatchModal, setOpenMatchModal] = useState(true)
    const history = useHistory()

    function handleClose() {
        setOpenMatchModal(openMatchModal => !openMatchModal)
        setShowMatchModal(false)
        confetti.reset()
    }

    function handleGoToProfile() {
        history.push('/match/')
        history.go(0)
        setShowMatchModal(false)
    }

    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });

    return (
            <BS.Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={openMatchModal}
                onHide={handleClose}
                // backdrop='static'
                style={{ borderRadius: '30px', backgroundColor: 'rgba(0, 0, 0, 0.75)', width:'50%', position:'absolute',marginLeft:'350px', marginTop:'-900px'}}
            >
                                    {/* <div style={{marginTop:'100px'}}></div> */}

                <BS.Modal.Body style={{ padding: '80px',paddingLeft:'60px',textAlign: "center", opacity: '1', color: 'white', background: ''}}>
                    <strong style={{fontSize:'70px'}}>IT'S A MATCH!</strong>
                    <p>Their early work was a little too new wave for my tastes, but when Sports came out in '83,</p>
                    <p>The whole album has a clear, crisp sound, and a new sheen of consummate professionalism that really gives the songs a big boost.</p>
                    <p>He's been compared to Elvis Costello, but I think Huey has a far more bitter, cynical sense of humor.</p>
                    <hr></hr>
                    <div style={{marginTop:'340px'}}></div>
                    {/* <button>test</button> */}
                    <BS.Button variant='Secondary' onClick={handleGoToProfile}>Go to Profile</BS.Button>
                    <BS.Button variant='secondary' onClick={handleClose}>EXIT</BS.Button>
                </BS.Modal.Body>
            </BS.Modal>
    )
}

export default MatchModal