import React, { useEffect, useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import PaginationRange from "./PaginationRange";
import PaginationButton from "./PaginationButton";
import ArrowButton from "./ArrowButton";
import '../styles/Pagination.css';

function Pagination({currentPage, setCurrentPage, pageRange, setPageRange, lastPage, setLastPage}) {

    const { currentQuery, runSearch, totalPages } = useContext(PhotoContext);

    useEffect(() => {
        setCurrentPage(1);
        setLastPage(totalPages);
    }, [currentQuery])
    
    useEffect(() => {
        if (currentPage < 1000) {

            if (currentPage < 3) {
                setPageRange([1, 2, 3, 4, 5])
    
            } else if (currentPage >= lastPage - 3) {
                setPageRange([lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1, lastPage])
    
            }
            else {
                setPageRange([currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2])
            }
        }
        if (currentPage >= 1000) {
            if (currentPage >= lastPage - 2) {
                setPageRange([lastPage - 3, lastPage - 2, lastPage - 1, lastPage])
    
            }
            else {
                setPageRange([currentPage - 1, currentPage, currentPage + 1])
            }
        }
    }, [currentPage]);

    function clickPrevPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            runSearch(currentQuery, currentPage - 1);
        }
    };

    function clickNextPage() {
        if (currentPage !== lastPage) {
            setCurrentPage(currentPage + 1);
            runSearch(currentQuery, currentPage + 1);
        }
    };

    function onPageClick(page) {
        if (page !== currentPage) {
            setCurrentPage(page);
            runSearch(currentQuery, page);
        }
    };

    return (
        <div className="pages-numbers">

            <ArrowButton
                onClick={() => clickPrevPage()}
                icon="arrow_back_ios_new"
                className="prevnext-square prev"
            />

            { (currentPage > 4) 
                ? <>
                    <PaginationButton
                        onPageClick={onPageClick}
                        pageRange={pageRange}
                        page={1}
                        className="firstpage"
                    />
                    <div className="otherpages">
                    ...
                    </div>
                </>
                : ''}

            <PaginationRange
                onPageClick={onPageClick}
                currentPage={currentPage}
                pageRange={pageRange}
                lastPage={lastPage}
            />

            { (currentPage < 1000) && (currentPage < lastPage - 3)
            ? <>
                <div className="otherpages">
                ...
                </div>
                <PaginationButton
                    onPageClick={onPageClick}
                    pageRange={pageRange}
                    page={lastPage}
                    className="lastpage"
                />
            </>
            : ''}

            {(currentPage >= 1000) && (currentPage < lastPage - 2)
            ? <>
                <div className="otherpages">
                ...
                </div>
                <PaginationButton
                    onPageClick={onPageClick}
                    pageRange={pageRange}
                    page={lastPage}
                    className="lastpage"
                />
            </>
            : ''}

            <ArrowButton
                onClick={() => clickNextPage()}
                icon="arrow_forward_ios"
                className="prevnext-square next"
            />

        </div>
    )
}

export default Pagination;