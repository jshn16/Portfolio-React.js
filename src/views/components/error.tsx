import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Error() {

    const navigate = useNavigate()
  
    useEffect(() => {
    
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, []);

    return (
        <div className="box">
            <h1 className="bold">Page Does Not Exist</h1>
        </div>
    )
}

export default Error