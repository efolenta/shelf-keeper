import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function WelcomeHero(props) {
    return (
        <header>
            <div className="overlay"></div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
            </video>
            <div className="container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                        <h1 className="display-3">Inventory Tracker</h1>
                        <p className="lead mb-0">Robust yet easy to use inventory management for any small business!</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default WelcomeHero;