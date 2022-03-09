import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../style/selectedprofile.css';
import LargeCard from "./LargeCard";

let profileUrl = 'http://localhost:4000/profile/'

function SelectedProfile({}) {
    const params = useParams();
    let [data,setData]=useState([]);
    // console.log(params.profileId)
    document.title=`Ghostd - ${data.name}`


    useEffect(()=>{
        axios.get(profileUrl+params.profileId)
        .then(r=>setData(r.data))
    },[])

    return(
        <React.Fragment>
            <div className="profile-container">
                <LargeCard profile={data}/>
            </div>
        </React.Fragment>
    )

}

export default SelectedProfile;