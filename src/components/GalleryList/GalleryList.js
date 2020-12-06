import React, { Component } from 'react';

class GalleryList extends Component {
    state = {  }
    render() { 
        return (
            <div className="GalleryList">
                <p>GalleryList</p>
                {this.props.gallery.map(photo => (
                <img key={photo.id} src={photo.path} />
                ))}
            </div>
         );
    }
}
 
export default GalleryList;