import React from "react";
import '../styles/Pagination.css'

function PaginationButton({onPageClick, className, page}) {
    return (
        <button 
            className={className}
            onClick={() => onPageClick(page)}
        >
            {page}
        </button>
    )
}

export default PaginationButton;