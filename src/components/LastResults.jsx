import React from "react";
import "../styles/LastResults.css";

function LastResults({lastResults}) {

    return (
        <div className="last-search">
            <h6 className="last-search-h6">Last search results:</h6>
            <div className="last-search-results">
                {lastResults}
            </div>
        </div>
    )
}

export default LastResults;