import React,{ Component } from "react";

const footer=()=>{
    return(
        <div className="footer" style={{
            background:"black",
            width:"100%",
            height:"100px",
            color:"white",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
        }}>
            <span className="copyright">Copyright</span>
            <span className="copyright"><i class="fa-regular fa-copyright"></i></span>
            <span className="copyright">Trendy Shoppie  2023</span>
        </div>
    )
}
export default footer;