import React from "react";
import { useState, useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Pagination from "./Pagination";
import Gallery from "./Gallery";
import '../styles/ImagesSection.css';

function ImagesSection({ modalOpen }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageRange, setPageRange] = useState([1, 2, 3, 4, 5]);
    const [lastPage, setLastPage] = useState();

    const { images, loading, currentQuery} = useContext(PhotoContext);

    return (
        <div className="imagessection">
            <Pagination 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageRange={pageRange}
                setPageRange={setPageRange}
                lastPage={lastPage}
                setLastPage={setLastPage}
            />
            <Gallery 
                data={images} 
                modalOpen={modalOpen} 
                currentQuery={currentQuery} 
                loading={loading}
            />
            <Pagination 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageRange={pageRange}
                setPageRange={setPageRange}
                lastPage={lastPage}
                setLastPage={setLastPage}
            />
        </div>
    );
}

export default ImagesSection;