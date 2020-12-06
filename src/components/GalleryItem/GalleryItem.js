import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
    state = { 
        photoLikes: 0,
    }

    likePhoto = () => {
        console.log('clicked like photo button');
        this.setState({
            photoLikes: this.state.photoLikes + 1
        });
    }

    render() { 
        return ( 
            <div className="GalleryItem">
                <img src={this.props.photo.path} />
                <button className="likeBtn" onClick={this.likePhoto}>Awesome Photo!</button>
                <p>{this.state.photoLikes} people have liked this photo!</p>
            </div>
         );
    }
}
 
export default GalleryItem;