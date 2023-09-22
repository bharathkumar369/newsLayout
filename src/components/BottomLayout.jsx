import React from "react";

const BottomLayout = () =>{
    return (
        <div className="bottom-grid">
            <div className="box">
                <div>
                    <img src="../../images/image-retro-pcs.jpg" alt="" className="bottom-image"/>
                </div>
                <div className="bottom-right-div">
                    <p className="number">01</p>
                    <p className="name">Reviving Retro PCs </p>
                    <p className="description">What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className="box">
                <div>
                    <img src="../../images/image-top-laptops.jpg" alt="" className="bottom-image"/>
                </div>
                <div className="bottom-right-div">
                    <p className="number">02</p>
                    <p className="name"> Top 10 Laptops of 2022</p>
                    <p className="description">Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className="box">
                <div>
                    <img src="../../images/image-gaming-growth.jpg" alt="" className="bottom-image"/>
                </div>
                <div className="bottom-right-div">
                    <p className="number">03</p>
                    <p className="name">The Growth of Gaming </p>
                    <p className="description">How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
        
        
    )
}   
export default BottomLayout;