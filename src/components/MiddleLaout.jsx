import React from "react";

const MiddleLayer = () => {
    return (
        <div className="main-grid">
            <div className="left-side-grid">
                <div className="img-container" >
                    <img src="../../images/image-web-3-desktop.jpg" alt="" className="desktop-img"/>
                </div>
                <div className="middle-sub-grid">
                    <div className="web3-grid">
                        <h1 className="web3">The Bright future of web 3.O?</h1>
                    </div>
                    <div className="web3-descrip-grid">
                        <p className="web3-descrip">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise? </p>
                        <button className="web3-btn">REAR MORE</button>
                    </div>               
                </div>         
            </div>
            <div className="right-side-grid">
                <div >
                    <h1 className="right-grid-head">New</h1>
                    <h2 className="right-grid-name">Hydrogen VS Electric cars </h2>
                    <p className="right-grid-descrip">Will hydrogen-fueled cars ever catch up to EVs? </p>
                    <hr/>
                </div>
                <div>
                    <h2 className="right-grid-name">The Downsides of AI Artistry</h2>
                    <p className="right-grid-descrip">What are the possible adverse effects of on-demand AI image generation?</p>                
                    <hr/>
                </div>
                <div>
                    <h2 className="right-grid-name">Is VC Funding Drying Up?</h2>
                    <p className="right-grid-descrip">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
            </div>
        </div>    
    )
}
export default MiddleLayer;