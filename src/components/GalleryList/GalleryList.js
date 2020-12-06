import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    state = { }

    render() { 
        return (
            <div className="GalleryList">
                <p>GalleryList</p>
                {this.props.gallery.map(photo => (
                <GalleryItem photo={photo} key={photo.id} />
                ))}
            </div>
         );
    }
}
 
export default GalleryList;