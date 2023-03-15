import React from 'react';
import { useState, useEffect } from 'react';
import MainHeader from './components/MainHeader';
import SearchSection from './components/SearchSection';
import ImagesSection from './components/ImagesSection';
import ImageModal from './components/ImageModal';
import PhotoContextProvider from './context/PhotoContext';
import './styles/App.css';

function App() {

    const [imageIsOpen, setImageIsOpen] = useState([false, null, null]);

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
            <PhotoContextProvider>
                <MainHeader />
                <SearchSection />
                <ImagesSection
                    modalOpen={imageModalOpen}  
                />
                <ImageModal 
                    modalVisible={imageIsOpen[0]}  
                    url={imageIsOpen[1]} 
                    modalTitle={imageIsOpen[2]} 
                    modalClose={imageModalClose}
                />
            </PhotoContextProvider>
        </div>
    );
}


export default App;