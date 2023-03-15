import React from "react";
import "../styles/DropdownMenu.css"

function DropdownMenu() {
    
    return (
        <div className="dropdownmenu">
            <div className="dropdown-header">Project links</div>
            <a 
                className="dropdown-link" 
                href="https://www.flickr.com/services/api/" 
                target="_blank"
            >
                <div className="dropdown-text">
                    Flickr API
                </div>
            </a>
            <a 
                className="dropdown-link" 
                href="https://github.com/alextsoi101/Free-image-app-React" 
                target="_blank"
            >
                <div className="dropdown-text">
                    Project on Gtihub
                </div>
            </a>
            <a 
                className="dropdown-link dropdown-footer" 
                href="https://github.com/alextsoi101" 
                target="_blank"
            >
                <div className="dropdown-text">
                    My Github
                </div>
            </a>
        </div>
    )
}

export default DropdownMenu;