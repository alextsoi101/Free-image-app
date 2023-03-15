import React from "react";
import '../styles/Pagination.css'

function ArrowButton(props) {
    return (
        <button 
                className={props.className} 
                onClick={props.onClick} 
        >
            <span class="material-symbols-outlined prevnext">
                {props.icon}
            </span>
        </button>
    )
}

export default ArrowButton;