import React, {useState} from "react";

function Button(){
    const link=()=>{
        window.open('https://zerodha.com/open-account', "_blank", "noreferrer");
    }
    return(
        <div  >
            
            <h1 className="text-3xl text-center">Invest in Everything</h1>
            <p className="text-center py-5">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <div onClick={link}  className="flex justify-center ">
            <button className="bg-blue-500 font-bold text-white py-3 px-5 rounded">Sign up for free</button>
            </div>
        </div>
    )
}
export default Button