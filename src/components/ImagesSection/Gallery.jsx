import React from "react";
import './Gallery.css'
import NoImages from "./NoImages";
import Image from "./Image";

function Gallery(props) {

    const results = props.data;
    let images;
    let noImages;

    if (results.length > 0) {
        images = results.map(image => {
        let farm = image.farm;
        let server = image.server;
        let id = image.id;
        let secret = image.secret;
        let title = image.title;
        let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
        return <Image url={url} key={id} title={title} modalOpen={props.modalOpen}/>;
        });
    } else {
        noImages = <NoImages />;
    }

    return (
        <div className="gallery">
            <h2 className="h2gallerytext">
                {props.currentQuery} <span className="h2gallerytext-span">Images:</span>
            </h2>
            <ul className="gallery-list">{images}</ul>
            {noImages}
        </div>
    );
};

export default Gallery;