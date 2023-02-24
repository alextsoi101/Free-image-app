import React from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import SearchSection from './components/SearchSection/SearchSection';
import ImagesSection from './components/ImagesSection/ImagesSection';
import ImageModal from './components/ImageModal/ImageModal';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './styles/App.css';

function App() {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imageIsOpen, setImageIsOpen] = useState([false, null]);
    const [currentQuery, setCurrentQuery] = useState('Mountain');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        runSearch("Mountain")
    }, []);

    function runSearch(query, pagenum = 1) {
        if (query && query.split('').filter(n => n != " ").length > 0) {
            setCurrentQuery(query);
            setLoading(true);
            axios
                .get(
                    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b935f1d2725eb94c6254076900a0c7bd&tags=${query}&per_page=9&page=${pagenum}&format=json&nojsoncallback=1`
                )
                .then(response => {
                    setImages(response.data.photos.photo);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(
                    "Encountered an error with fetching and parsing data",
                    error
                    );
                });
        }
    };

        let currentClickImgUrl; 
        function imageModalOpen(imgurl, imgtitle) {
            currentClickImgUrl = imgurl;
            setImageIsOpen([true, imgurl, imgtitle]);
        };

        function imageModalClose() {
            setImageIsOpen(false);
        };

    return (
        <div className='App'>
            <ImageModal modalVisible={imageIsOpen[0]} modalClose={imageModalClose} modalTitle={imageIsOpen[2]} url={imageIsOpen[1]} />
            <MainHeader />
            <SearchSection searchFunc={runSearch} />
            <ImagesSection images={images} loading={loading} modalOpen={imageModalOpen} searchFunc={runSearch} currentQuery={currentQuery} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}


export default App;