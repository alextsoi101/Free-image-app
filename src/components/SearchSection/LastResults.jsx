import React from "react";
import "./LastResults.css";

function LastResults({lastResults}) {

    return (
        <div className="last-search">
            <h6 className="last-search-h6">Last Search Results:</h6>
            <div className="last-search-results">
                {lastResults}
            </div>
        </div>
    )
}

export default LastResults;