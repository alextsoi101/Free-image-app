import React from "react";
import LastResults from "./LastResults";
import { useState, useRef, useEffect, useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import '../styles/SearchSection.css';

function SearchSection() {

    const { runSearch } = useContext(PhotoContext);

    const [searchArray, setSearchArray] = useState([
        <div className="last-result" onClick={() => runSearch("Mountain")}>Mountain</div>,
        <div className="last-result" onClick={() => runSearch("Forest")}>Forest</div>,
        <div className="last-result" onClick={() => runSearch("Sunset")}>Sunset</div>,
        <div className="last-result" onClick={() => runSearch("Flowers")}>Flowers</div>,
        <div className="last-result" onClick={() => runSearch("Animals")}>Animals</div>
    ]);

    useEffect(() => {
        if (searchArray.length > 5) {
        searchArray.pop()
        }
    }, [searchArray]);

    let searchWord;
    function inputValue(inputText) {
        searchWord = inputText;
    };

    let searchTag;
    function addLastResult() {
        if (searchWord && searchWord.split('').filter(n => n !== " ").length > 0) {
            
            if (searchWord.length >= 12) {
                searchTag = searchWord.slice(0, 12) + '...';
            } else {
                searchTag = searchWord;
            }

            setSearchArray(
                [<div 
                    className="last-result" 
                    onClick={() => runSearch(searchTag)}
                >
                    {searchTag}
                </div>, ...searchArray]
            );
        }
    }

    const searchIconDiv = useRef();

    function activeInput() {
        searchIconDiv.current.style.color = "#1a92c7";
    }
    function inactiveInput() {
        searchIconDiv.current.style.color = "#757575";
    }

    return (
        <div className="searchsection">
            <p className="main-text">
                FREE IMAGES
            </p>

            <div className="search-container">
                <div 
                    className="search-icon-div"
                    ref={searchIconDiv}
                >
                    <span class="material-symbols-outlined searchicon">
                        search
                    </span>
                </div>
                <input 
                    placeholder="Search images..." 
                    className="search-input"
                    onChange={e => inputValue(e.target.value)}
                    onFocus={() => activeInput()}
                    onBlur={() => inactiveInput()}
                />
                <button
                    className="search-button"
                    onClick={() => {runSearch(searchWord); addLastResult()}}
                >
                    SEARCH
                </button>
            </div>

            <LastResults lastResults={searchArray} />

        </div>
    );
}

export default SearchSection;