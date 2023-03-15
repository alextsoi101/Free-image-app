import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { apiKey } from "../API/apikey";
export const PhotoContext = createContext();

function PhotoContextProvider(props) {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentQuery, setCurrentQuery] = useState('mountain');
    const [totalPages, setTotalPages] = useState(100);
    // const [imageIsOpen, setImageIsOpen] = useState([false, null]);
    // const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        runSearch('Mountain')
    }, []);

    const runSearch = async (query, pagenum = 1) =>  {
        if (query && query.split('').filter(n => n !== " ").length > 0) {
            setLoading(true);
            await axios
                .get(
                    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=9&page=${pagenum}&format=json&nojsoncallback=1`
                )
                .then(response => {
                    setImages(response.data.photos.photo);
                    setTotalPages(response.data.photos.pages);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(
                    "Encountered an error with fetching and parsing data",
                    error
                    );
                });
            setCurrentQuery(query);
        }
    };

    return (
        <PhotoContext.Provider value={{ images, loading, runSearch, currentQuery, totalPages }}>
            {props.children}
        </PhotoContext.Provider>
    )

}

export default PhotoContextProvider;
