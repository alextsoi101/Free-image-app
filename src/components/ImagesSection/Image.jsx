import React from "react";
import { useRef } from "react";
import "./Image.css"

function Image({ url, title, modalOpen }) {

    const divOverlayRef = useRef();

    function imageOverlay() {
        divOverlayRef.current.style.display = "flex";
    }

    function imageNotOverlay() {
        divOverlayRef.current.style.display = "none";
    }


    return (
        <li className="image-li" onClick={() => modalOpen(url, title)} onMouseOver={() => imageOverlay()} onMouseLeave={() => imageNotOverlay()}>
            <div className="image-container">
                <div className="image-overlay" ref={divOverlayRef}>
                    <div className="image-header">
                        <div className="image-title">{title}</div>
                    </div>
                </div>
                <img className="image-pic" src={url} alt={title} />
            </div>
        </li>
    )
}

export default Image;