import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src="../../images/logo.svg" alt=""/>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </nav>
        </div>
    )
}   
export default Header;