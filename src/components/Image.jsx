import React from "react";
import { useRef } from "react";
import "../styles/Image.css";
import Loader from "./Loader";

function Image({ url, title, modalOpen, loading }) {

    const divOverlayRef = useRef();

    function imageOverlay() {
        divOverlayRef.current.style.display = "flex";
    }

    function imageNotOverlay() {
        divOverlayRef.current.style.display = "none";
    }

    return (
        <li 
            className="image-li" 
            onClick={() => modalOpen(url, title)} 
            onMouseOver={() => imageOverlay()} 
            onMouseLeave={() => imageNotOverlay()}
        >
            <div className="image-container">
                <div className="image-overlay" ref={divOverlayRef}>
                    <div className="image-header">
                        <div className="image-title">{title}</div>
                    </div>
                </div>
                {loading ? <Loader/> : <img className="image-pic" src={url} alt={title} />}
            </div>
        </li>
    )
}

export default Image;