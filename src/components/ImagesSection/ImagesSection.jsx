import React from "react";
import './ImagesSection.css';
import PagesNumbers from "./PagesNumbers";
import Gallery from "./Gallery";
import Loader from "./Loader";

function ImagesSection({images, loading, modalOpen, searchFunc, currentQuery, currentPage, setCurrentPage}) {

    return (
        <div className="imagessection">
            <PagesNumbers searchFunc={searchFunc} currentQuery={currentQuery} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {loading ? <Loader /> : <Gallery data={images} modalOpen={modalOpen} currentQuery={currentQuery} />}
            <PagesNumbers searchFunc={searchFunc} currentQuery={currentQuery} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}

export default ImagesSection;