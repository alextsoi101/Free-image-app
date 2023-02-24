import React from "react";
import LastResults from "./LastResults";
import { useState } from "react";
import { useRef } from "react";
import './SearchSection.css';

function SearchSection({searchFunc}) {

    const [searchArray, setSearchArray] = useState([
        <div className="last-result">Mountain</div>,
        <div className="last-result">Forest</div>,
        <div className="last-result">Sunset</div>,
        <div className="last-result">Flowers</div>,
        <div className="last-result">Animals</div>
    ]);

    if (searchArray.length > 5) {
        searchArray.pop()
    }

    let searchWord;
    function inputValue(inputText) {
        searchWord = inputText;
    };

    let searchTag;
    function newArray() {
        if (searchWord && searchWord.split('').filter(n => n != " ").length > 0) {
            if (searchWord.length >= 12) {
                searchTag = searchWord.slice(0, 12) + '...';
            } else {
                searchTag = searchWord;
            }

            setSearchArray([<div className="last-result">{searchTag}</div>, ...searchArray]);
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
                <div className="search-icon-div"
                    ref={searchIconDiv}>
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
                    onClick={() => {searchFunc(searchWord); newArray()}}
                >
                    SEARCH
                </button>
            </div>

            <LastResults lastResults={searchArray} />

        </div>
    );
}

export default SearchSection;