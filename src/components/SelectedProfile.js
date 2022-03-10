import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../style/selectedprofile.css';
import LargeCard from "./LargeCard";

let profileUrl = 'http://localhost:4000/profile/'

function SelectedProfile({}) {
    const params = useParams();
    let [data,setData]=useState([]);
    let [nameLength, setNameLength] = useState(0)
    let [locationLength, setLocationLength] = useState(0)

    // console.log(params.profileId)
    document.title=`Ghostd - ${data.name}`


    useEffect(()=>{
        axios.get(profileUrl+params.profileId)
        .then(r=>{
            setData(r.data)
            setNameLength(r.data.name.length)
            setLocationLength(r.data.location.length)
        })
    },[])

    return(
        <React.Fragment>
            <div className="profile-container">
                <LargeCard profile={data}
                    nameLength={nameLength}
                    locationLength={locationLength}
                />
            </div>
        </React.Fragment>
    )

}

export default SelectedProfile;