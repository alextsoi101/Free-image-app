import React from "react";
import './PagesNumbers.css'

function PagesNumbers({searchFunc, currentQuery, currentPage, setCurrentPage}) {

    function prevPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else { return }
        searchFunc(currentQuery, currentPage);
    };

    function nextPage() {
        if (currentPage < 5) {
            setCurrentPage(currentPage + 1);
        } else { return }
        searchFunc(currentQuery, currentPage);
    };

    return (
        <div className="pages-numbers">

            <div className="prevnext-square" onClick={() => prevPage()} style={{marginRight: 15}}>
                <span class="material-symbols-outlined prevnext">
                    arrow_back_ios_new
                </span>
            </div>

            <div className={`number-square ${currentPage == 1 ? 'active' : ''}`} onClick={() => {searchFunc(currentQuery, 1); setCurrentPage(1)}}>1</div>
            <div className={`number-square ${currentPage == 2 ? 'active' : ''}`} onClick={() => {searchFunc(currentQuery, 2); setCurrentPage(2)}}>2</div>
            <div className={`number-square ${currentPage == 3 ? 'active' : ''}`} onClick={() => {searchFunc(currentQuery, 3); setCurrentPage(3)}}>3</div>
            <div className={`number-square ${currentPage == 4 ? 'active' : ''}`} onClick={() => {searchFunc(currentQuery, 4); setCurrentPage(4)}}>4</div>
            <div className={`number-square ${currentPage == 5 ? 'active' : ''}`} onClick={() => {searchFunc(currentQuery, 5); setCurrentPage(5)}}>5</div>

            <div className="prevnext-square" onClick={() => nextPage()}>
                <span class="material-symbols-outlined prevnext">
                    arrow_forward_ios
                </span>
            </div>

        </div>
    )
}

export default PagesNumbers;