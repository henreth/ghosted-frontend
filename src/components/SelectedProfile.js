import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SelectedProfile({}) {
    // call useParams to access the `params` from the url: the dynamic portion of our /book/:bookId path
    const params = useParams();

    return(
        <React.Fragment>
            
        </React.Fragment>
    )

}

export default SelectedProfile;