import React from 'react';

const ImageList = props => {
    const images = props.images.map((img) => {
        return <img key={img.id} src={img.urls.regular} alt={img.description} />
    })
    return(
        <div>{images}</div>
    )
}

export default ImageList;