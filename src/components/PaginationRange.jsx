import React from "react";
import PaginationButton from "./PaginationButton";
import '../styles/Pagination.css'

function PaginationRange({onPageClick, currentPage, pageRange, lastPage}) {

    const paginationButtons = pageRange.map(page => {
        if (page <= lastPage) {
            return (
                <PaginationButton
                    onPageClick={onPageClick}
                    currentPage={currentPage}
                    pageRange={pageRange}
                    className={`number-square ${currentPage == page ? 'active' : ''}`}
                    page={page}
                />
            )
        }
    })

    return (
        <div className="pagination-range">
            {paginationButtons}
        </div>
    )
}

export default PaginationRange;