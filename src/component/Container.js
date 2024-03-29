import React from "react";
import "../style/Container.css";
const Container = () => {
  return (
    <div className="title-and-slogan"style={{
        background:" linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",
        width:"100%",
        height:"300px",
        fontSize:"50px",
        fontFamily:"cursive",
        color: "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",
        padding:"30px",
        display:"flex",
        flexDirection:"column",
        gap:"10px",
        alignItems:"center",
        justifyContent:"center",
        backgroundImage:'url(./Images/bg.jpg)',
        backgroundSize: "cover",
      }}>
      <h1 className="h1" style={{ animation: "fadeIn 2s forwards" }}>
        <i className="fa-solid fa-store"></i>TRENDY SHOPPIE
      </h1>
      <p style={{ animation: "slideUp 2s forwards" }}>All you need is here!!!</p>
    </div>
  );
};

export default Container;
